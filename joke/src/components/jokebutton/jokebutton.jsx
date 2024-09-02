import styles from './jokebutton.module.scss';

export const JokeButton = ({ onClick, label, isDarkMode }) => {
    return (
      <button
        className={`${styles.button} ${isDarkMode ? styles['dark-theme'] : styles['light-theme']}`}
        onClick={onClick}
      >
        {label}
      </button>
    );
  };