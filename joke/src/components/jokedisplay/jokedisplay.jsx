import styles from './jokedisplay.module.scss';

export const JokeDisplay = ({ setup, punchline, isDarkMode }) => {
    return (
      <div className={`${styles.jokeContainer} ${isDarkMode ? styles['dark-theme'] : ''}`}>
        <h2>{setup}</h2>
        <p>{punchline}</p>
      </div>
    );
  }; 
     