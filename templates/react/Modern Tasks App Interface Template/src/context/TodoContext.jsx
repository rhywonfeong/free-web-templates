import React, { createContext, useContext, useState, useEffect } from 'react';

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem('modern-todos');
      return saved ? JSON.parse(saved) : [
        { id: '1', text: 'Review pull requests', completed: true, createdAt: Date.now() - 86400000 },
        { id: '2', text: 'Update design system documentation', completed: false, createdAt: Date.now() - 3600000 },
        { id: '3', text: 'Schedule team sync for Q3 planning', completed: false, createdAt: Date.now() }
      ];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('modern-todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    setTodos(prev => [
      { id: crypto.randomUUID(), text: text.trim(), completed: false, createdAt: Date.now() },
      ...prev
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    if (!newText.trim()) return deleteTodo(id);
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, text: newText.trim() } : todo
    ));
  };

  const clearCompleted = () => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  };

  const value = {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
    clearCompleted
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
}