import Image from 'next/image';
import profilePic from '../components/assets/img1.jpg';
import javaPic from '../components/assets/java.svg';
import androidPic from '../components/assets/android.svg';
import cPic from '../components/assets/c.svg';
import csharpPic from '../components/assets/csharp.svg';
import cssPic from '../components/assets/css.svg';
import htmlPic from '../components/assets/html.svg';
import jsPic from '../components/assets/js.svg';
import nodePic from '../components/assets/node.svg';
import officePic from '../components/assets/office.svg';
import phpPic from '../components/assets/php.svg';
import pythonPic from '../components/assets/python.svg';
import reactPic from '../components/assets/react.svg';
import unityPic from '../components/assets/unity.svg';
import himtiPic from '../components/assets/himti.png';
import styles from '../styles/About.module.css';

const AboutPage = () => {
  return (
    <>
      <div className={styles.centerContainer}>
        <div className={styles.profileFrame}>
          <Image 
            src={profilePic} 
            alt="Profile Picture" 
            width={670} 
            height={690}
            style={{ borderRadius: '50%' }}
          />
        </div>
      </div>
      <div className={styles.centerText}>
        <h2>A Little Bit About Me</h2>
        <br />
        <p className={styles.fadeInUp}>
          Hello my name is Jonathan Aditya Sanusi ✋. I am a 5th-semester Computer Science student. 
          I enjoy building practical and user-friendly applications. 
          I'm always eager to learn new things and develop practical skills to contribute effectively in a team.
        </p>
        <br />
        <p className={styles.fadeInUp}>
          I am constantly looking for opportunities to collaborate on innovative projects that challenge my problem-solving abilities and foster continuous learning. 
          Whether it's contributing to open-source projects or working in a team, I am always eager to expand my knowledge and skills.
        </p>
      </div>

      <br />
      <br />

      <div className={styles.skillsEducationContainer}>
        <div className={styles.skillsText}>
          <h2>Skills</h2>
          <div className={styles.skillsContainer}>
            <div className={styles.skillBox}>
              <Image src={reactPic} alt="React" width={50} height={50} />
            </div>
            <div className={styles.skillBox}>
              <Image src={javaPic} alt="Java" width={50} height={50} />
            </div>
            <div className={styles.skillBox}>
              <Image src={androidPic} alt="Android" width={50} height={50} />
            </div>
            <div className={styles.skillBox}>
              <Image src={cPic} alt="C" width={50} height={50} />
            </div>
            <div className={styles.skillBox}>
              <Image src={csharpPic} alt="C#" width={50} height={50} />
            </div>
            <div className={styles.skillBox}>
              <Image src={cssPic} alt="CSS" width={50} height={50} />
            </div>
            <div className={styles.skillBox}>
              <Image src={htmlPic} alt="HTML" width={50} height={50} />
            </div>
            <div className={styles.skillBox}>
              <Image src={jsPic} alt="JavaScript" width={50} height={50} />
            </div>
            <div className={styles.skillBox}>
              <Image src={nodePic} alt="Node.js" width={50} height={50} />
            </div>
            <div className={styles.skillBox}>
              <Image src={officePic} alt="Office" width={50} height={50} />
            </div>
            <div className={styles.skillBox}>
              <Image src={phpPic} alt="PHP" width={50} height={50} />
            </div>
            <div className={styles.skillBox}>
              <Image src={pythonPic} alt="Python" width={50} height={50} />
            </div>
            <div className={styles.skillBox}>
              <Image src={unityPic} alt="Unity" width={50} height={50} />
            </div>
          </div>
        </div>

        <div className={styles.educationText}>
          <h2>Education</h2>
          <ul><div className={styles.eduAnimation}>
            <li>SMAK BPK Penabur Holis</li>
            <p>2019-2022</p> 
            <p>Science</p> 
            <br />
            <li>Universitas Bina Nusantara</li>
            <p>2022-Present</p> 
            <p>Computer Science</p> 
            <br />
            <li>Chung Yuan Christian University</li>
            <p>February 2023 - June 2023</p> 
            <p>Online Student Exchange Mathematical Programming</p>
            </div> 
          </ul>
        </div>
      </div>

      <div className={styles.skillsEducationContainer}>
        <div className={styles.skillsText}>
          <h2>Organization Experience</h2>
          <p>Himpunan Mahasiswa Teknik Informatika (HIMTI)</p>
          <br />
          <p>Himti Care</p>
          <div className={styles.himtiFrame}>
          <Image 
            src={himtiPic}
            width={320} 
            height={200}
            style={{ borderRadius: '2%' }}
          />
        </div>
        <br />
          <li>Create internal events that members can attend</li>
          <li>Make relationship between HIMTI members closer</li>
          <li>Analyze problems that occur and resolve them</li>
        </div>

        <div className={styles.educationText}>
          <h2>Other Experience</h2>
          <ul><div className={styles.eduAnimation}>
            <li>BINECHA 2023</li>
            <p>June 2023</p> 
            <p>Event Coordinator</p> 
            <p>Create an event to introduce binus to high school students</p>
            <br />
            <li>Social Service</li>
            <p>February 2023</p> 
            <p>Participant</p>
            <p>Take part in a socialization event about the benefits and how to make ecoenzymes at the Yayasan Rumah Pejuang Kanker Ambu</p> 
            <br />
            <li>Summer Class</li>
            <p>June 2023 - July 2023</p> 
            <p>Teaching Staff</p>
            <p>Teaching high school student about basic programming logic</p>
            </div> 
          </ul>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
