import React, { createContext, useContext, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = createContext();

const INITIAL_LISTS = [
  { id: 'inbox', name: 'Inbox', icon: 'solar:inbox-linear' },
  { id: 'work', name: 'Work', icon: 'solar:briefcase-linear' },
  { id: 'personal', name: 'Personal', icon: 'solar:user-linear' },
];

const INITIAL_TODOS = [
  { id: '1', text: 'Review quarterly goals', completed: false, listId: 'work', createdAt: Date.now() },
  { id: '2', text: 'Buy groceries for the week', completed: false, listId: 'personal', createdAt: Date.now() - 1000 },
  { id: '3', text: 'Respond to urgent emails', completed: true, listId: 'inbox', createdAt: Date.now() - 5000 },
];

export function TodoProvider({ children }) {
  const [lists, setLists] = useLocalStorage('task_lists', INITIAL_LISTS);
  const [todos, setTodos] = useLocalStorage('task_todos', INITIAL_TODOS);

  const addTodo = useCallback((text, listId) => {
    if (!text.trim()) return;
    const newTodo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
      listId: listId || 'inbox',
      createdAt: Date.now(),
    };
    setTodos(prev => [newTodo, ...prev]);
  }, [setTodos]);

  const toggleTodo = useCallback((id) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }, [setTodos]);

  const deleteTodo = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, [setTodos]);

  const clearCompleted = useCallback((listId) => {
    setTodos(prev => prev.filter(todo => !(todo.listId === listId && todo.completed)));
  }, [setTodos]);

  const getTodosByList = useCallback((listId) => {
    return todos.filter(todo => todo.listId === listId).sort((a, b) => b.createdAt - a.createdAt);
  }, [todos]);

  const getActiveCount = useCallback((listId) => {
    return todos.filter(todo => todo.listId === listId && !todo.completed).length;
  }, [todos]);

  const value = {
    lists,
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    getTodosByList,
    getActiveCount
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
};