import styles from './jokecategoryselector.module.scss'


export const JokeCategorySelector = ({ categories, onSelectCategory, theme }) => {
    return (
      <div className={`${styles.selector} ${theme === 'dark' ? styles['dark-theme'] : styles['light-theme']}`}>
        <select onChange={(e) => onSelectCategory(e.target.value)} defaultValue="">
          <option value="" disabled>Select a category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    );
  };
  