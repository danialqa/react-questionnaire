import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderLogo}>
        <img src='/assets/images/fueled-logo.svg' alt='' />
      </div>

      <h1 className={styles.HeaderTitle}>New Questionnaire</h1>

      <button className={styles.HeaderLoginBtn}>Log In</button>
    </div>
  );
};

export default Header;
