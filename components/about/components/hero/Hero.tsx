import Image from "next/image";

import { Link } from "components/mdx/link/Link";
import { normalizeViewsCount } from "utils/normalizeViewsCount";

import styles from "./hero.module.scss";

export const Hero = ({ views }: { views: number }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h2 className={styles.title}>Hi, I'm Mark Saeid&nbsp;👋</h2>
        <p className={styles.description}>
          <span className={styles.paragraph}>
            I'm a 22 year old software engineer live in Egypt. I'm passionate about building modern , effecient and heigh quality software . 
          </span>
          <span className={styles.paragraph}>
            I'm interest in writing a clean code with clean architecture and TTD also
            I have deep knowledge in software development cycle and a basic knowledge in devops methodology.
            I have worked on 28 project with diffrent tecnologies framworks.
          </span>
          <span className={styles.paragraph}>
            I'm working as a freelancer, so if you want to hire me, check the sections below. I'm always open to
            innovative ideas and solutions, so I think we're gonna get along. 😎
          </span>
          <span className={styles.paragraph}>
            Sounds interesting? Feel free to <Link href="/contact">contact me!</Link>
          </span>
          <span className={styles.paragraph}>
            Need more information? Download my <Link href="#">resume</Link>
          </span>
        </p>
      </div>

      <div className={styles.image}>
        <Image src="/img/me.jpg" width="400" height="400" alt="" />
      </div>
    </section>
  );
};
