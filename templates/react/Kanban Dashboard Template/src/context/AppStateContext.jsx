import React, { createContext, useContext, useState, useCallback } from 'react';

const mockUsers = {
  Admin: { name: 'Sarah Connor', role: 'Admin', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&q=80' },
  Executor: { name: 'John Smith', role: 'Executor', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&q=80' },
  Trainee: { name: 'Alex Doe', role: 'Trainee', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&q=80' }
};

const initialTasks = [
  { id: 't-1', title: 'Update Authentication Flow', description: 'Migrate to the new OAuth 2.0 provider and update tokens.', status: 'pending', priority: 'high', assignee: mockUsers.Admin },
  { id: 't-2', title: 'Design System Audit', description: 'Review the current components against the Aura UI specifications.', status: 'in-progress', priority: 'medium', assignee: mockUsers.Executor },
  { id: 't-3', title: 'Fix Navigation Bug', description: 'Mobile menu doesn\'t close on route change.', status: 'review', priority: 'medium', assignee: mockUsers.Trainee },
  { id: 't-4', title: 'Onboarding Documentation', description: 'Write a guide for new developers joining the team.', status: 'pending', priority: 'low', assignee: mockUsers.Trainee },
  { id: 't-5', title: 'Optimize Bundle Size', description: 'Implement code splitting and remove unused dependencies.', status: 'done', priority: 'high', assignee: mockUsers.Executor },
];

const AppStateContext = createContext();

export function AppStateProvider({ children }) {
  const [currentUserRole, setCurrentUserRole] = useState('Admin');
  const [showTraineeOnly, setShowTraineeOnly] = useState(false);
  const [tasks, setTasks] = useState(initialTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const currentUser = mockUsers[currentUserRole];

  const showToast = useCallback((message, type = 'success') => {
    const id = Date.now();
    setToast({ message, type, id });
    setTimeout(() => {
      setToast(prev => (prev?.id === id ? null : prev));
    }, 3000);
  }, []);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: `t-${Date.now()}` }]);
    showToast('New task successfully created', 'success');
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, status: newStatus } : t));
    const statusNames = { 'pending': 'Pending', 'in-progress': 'In Progress', 'review': 'Review', 'done': 'Done' };
    showToast(`Task moved to ${statusNames[newStatus] || newStatus}`, 'info');
  };

  return (
    <AppStateContext.Provider value={{
      currentUser,
      currentUserRole,
      setCurrentUserRole,
      showTraineeOnly,
      setShowTraineeOnly,
      tasks,
      addTask,
      updateTaskStatus,
      isModalOpen,
      setIsModalOpen,
      mockUsers,
      toast
    }}>
      {children}
    </AppStateContext.Provider>
  );
}

export const useAppState = () => useContext(AppStateContext);