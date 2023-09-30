import React from "react";

import styles from "./Contact.module.css";
// import { getImageUrl } from "../../utils";
import contact1 from '../contact-img/emailIcon.png'
import contact3 from '../contact-img/githubIcon.png'
import contact2 from '../contact-img/linkedinIcon.png'


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={contact1} alt="Email icon" />
          <a href="santoobpawar@gmail.com">myemail@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={contact2}
            alt="LinkedIn icon"
          />
          <a href="">linkedin.com/myname</a>
        </li>
        <li className={styles.link}>
          <img src={contact3} alt="Github icon" />
          <a href="">github.com/myname</a>
        </li>
      </ul>
    </footer>
  );
};
