import Link from "next/link";
import Image from "next/image";

import Arrow from "public/svg/right-top-arrow.svg";

import styles from "./aboutTile.module.scss";

export const AboutTile = () => {
  return (

      <div className={styles.tile}>
        <div className={styles.avatar}>
          <Image src="/img/avatars/5.webp" alt="winking memoji" width={230} height={306} />
        </div>
        <p className={styles.description}>
          I&apos;m <strong className={styles.name}>Mark</strong>, Software Engineer, freelancer,
          technologies enthusiast. I&apos;m in love with Flutter and Laravel ❤️ Constantly learning and discovering new
          stuff 📖
        </p>

        <Link href="#">
          <a>
        <div className={styles.resume}>
         My resume
          <span className={styles.arrow}>
            <Arrow />
          </span>
        </div>
        </a>
        </Link>


    <Link href="/about">
      <a>
        <div className={styles.more}>
          Learn more
          <span className={styles.arrow}>
            <Arrow />
          </span>
        </div>
         </a>
        </Link>


      </div>
   
  );
};
