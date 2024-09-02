import React, { useState, useEffect } from 'react';

import { JokeDisplay } from '../jokedisplay/jokedisplay';
import { JokeButton } from '../jokebutton/jokebutton';
import { ThemeToggle } from '../themetoggle/themetoggle';
import styles from './jokeapp.module.scss';
import { JokeCategorySelector } from '../jokecategoryselector/jokecategoryselector';



export const JokeApp = () => {
  const [joke, setJoke] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    fetchJoke();
    fetchCategories(); 
  }, []);

  useEffect(() => {
    
    document.body.className = isDarkMode ? styles.darkBody : styles.lightBody;
  }, [isDarkMode]);

const fetchJoke = async (category = '') => {
    try {
    //   const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const url = category
        ? `https://official-joke-api.appspot.com/jokes/${category}/random`
        : 'https://official-joke-api.appspot.com/random_joke';
  
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
  
      console.log('Joke data:', data);
  
      const jokeData = Array.isArray(data) ? data[0] : data;
      
      setJoke(jokeData);
    } catch (error) {
      console.error('Failed to fetch joke:', error);
      setJoke({ setup: 'Oops!', punchline: 'Something went wrong. Please try again.' });
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/types');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      console.log('Categories data:', data);

      setCategories(data);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };


  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    fetchJoke(category);
  };


  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={styles.container}>

    <ThemeToggle isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />

      <JokeCategorySelector
        categories={categories}
        onSelectCategory={handleCategoryChange}
        theme={isDarkMode ? 'dark' : 'light'}
      />

      {joke && <JokeDisplay setup={joke.setup} punchline={joke.punchline} />}

      <JokeButton
      onClick={() => fetchJoke(selectedCategory)}
      label="Get a new joke"
      isDarkMode={isDarkMode}
    />
    </div>
  );
};
