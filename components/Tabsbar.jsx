import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="home.jsx" path="/" />
      <Tab icon="/html_icon.svg" filename="about.html" path="/about" />
      <Tab icon="/css_icon.svg" filename="contact.css" path="/contact" />
      <Tab icon="/js_icon.svg" filename="projects.js" path="/projects" />
      <Tab icon="/markdown_icon.svg" filename="github.md" path="/github" />
      <Tab icon="/json_icon.svg" filename="cv.json" path="https://drive.google.com/file/d/1VI1Bk7artSPwok1WsZ75Xmv-TvRFPYko/view?usp=sharing" />
    </div>
  );
};

export default Tabsbar;
