import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ChevronRight from '../components/icons/ChevronRight';
import styles from '../styles/Explorer.module.css';

const explorerItems = [
  {
    name: 'home.jsx',
    path: '/',
    icon: 'react_icon.svg',
  },
  {
    name: 'about.html',
    path: '/about',
    icon: 'html_icon.svg',
  },
  {
    name: 'contact.css',
    path: '/contact',
    icon: 'css_icon.svg',
  },
  {
    name: 'projects.js',
    path: '/projects',
    icon: 'js_icon.svg',
  },
  {
    name: 'github.md',
    path: '/github',
    icon: 'markdown_icon.svg',
  },
  {
    name: 'cv.json',
    path: 'https://drive.google.com/file/d/1VI1Bk7artSPwok1WsZ75Xmv-TvRFPYko/view?usp=drive_link',
    icon: 'json_icon.svg',
  },
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <ChevronRight
            className={styles.chevron}
            style={portfolioOpen ? { transform: 'rotate(90deg)' } : {}}
          />
          Portfolio
        </label>
        <div
          className={styles.files}
          style={portfolioOpen ? { display: 'block' } : { display: 'none' }}
        >
          {explorerItems.map((item) => {
            const isExternalLink = item.path.startsWith('http');

            return isExternalLink ? (
              <a
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                key={item.name}
                className={styles.file}
              >
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                />
                <p>{item.name}</p>
              </a>
            ) : (
              <Link href={item.path} key={item.name}>
                <div className={styles.file}>
                  <Image
                    src={`/${item.icon}`}
                    alt={item.name}
                    height={18}
                    width={18}
                  />
                  <p>{item.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
