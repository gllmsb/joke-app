import styles from './themetoggle.module.scss';

export const ThemeToggle = ({ isDarkMode, onToggleTheme }) => {
    return (
      <div className={styles.headerContainer}>
      <h1 className={styles.heading}>Joke App</h1>
      <div className={styles.toggleContainer}>
        <label className={styles.switch}>
          <input type="checkbox" checked={isDarkMode} onChange={onToggleTheme} />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
}