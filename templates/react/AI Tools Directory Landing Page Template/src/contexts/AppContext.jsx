import React, { createContext, useContext, useState, useEffect } from 'react';
import { MOCK_TOOLS, CATEGORIES, BLOG_POSTS } from '../data/mockData';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [tools, setTools] = useState([]);
  const [categories, setCategories] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [userUpvotes, setUserUpvotes] = useState([]);

  useEffect(() => {
    // Initialize data
    setTools(MOCK_TOOLS);
    setCategories(CATEGORIES);
    
    // Load user preferences from local storage
    const savedBookmarks = localStorage.getItem('bookmarks');
    if (savedBookmarks) setBookmarks(JSON.parse(savedBookmarks));
    
    const savedUpvotes = localStorage.getItem('upvotes');
    if (savedUpvotes) setUserUpvotes(JSON.parse(savedUpvotes));
  }, []);

  const toggleUpvote = (toolId) => {
    const isUpvoted = userUpvotes.includes(toolId);
    let newUpvotes;
    
    if (isUpvoted) {
      newUpvotes = userUpvotes.filter(id => id !== toolId);
      setTools(prev => prev.map(t => t.id === toolId ? { ...t, upvotes: t.upvotes - 1 } : t));
    } else {
      newUpvotes = [...userUpvotes, toolId];
      setTools(prev => prev.map(t => t.id === toolId ? { ...t, upvotes: t.upvotes + 1 } : t));
    }
    
    setUserUpvotes(newUpvotes);
    localStorage.setItem('upvotes', JSON.stringify(newUpvotes));
  };

  const toggleBookmark = (toolId) => {
    const isBookmarked = bookmarks.includes(toolId);
    let newBookmarks;
    
    if (isBookmarked) {
      newBookmarks = bookmarks.filter(id => id !== toolId);
    } else {
      newBookmarks = [...bookmarks, toolId];
    }
    
    setBookmarks(newBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
  };

  const isUpvoted = (toolId) => userUpvotes.includes(toolId);
  const isBookmarked = (toolId) => bookmarks.includes(toolId);

  const getTrendingTools = () => [...tools].sort((a, b) => b.upvotes - a.upvotes).slice(0, 6);
  const getFeaturedTools = () => tools.filter(t => t.featured);
  const getToolBySlug = (slug) => tools.find(t => t.slug === slug);

  return (
    <AppContext.Provider value={{
      tools,
      categories,
      blogPosts: BLOG_POSTS,
      toggleUpvote,
      toggleBookmark,
      isUpvoted,
      isBookmarked,
      getTrendingTools,
      getFeaturedTools,
      getToolBySlug
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);