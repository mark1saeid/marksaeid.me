import Image from "next/image";
import { useState } from "react";

import { ContactForm } from "components/contact/contactForm/ContactForm";

import styles from "./contact.module.scss";

export const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  return (
    <section className={styles.wrapper}>
      <ContactForm handleIsSent={(val: boolean) => setIsSent(val)} />
      <div className={styles.avatar}>
        {isSent ? (
          <Image src="/img/avatars/3.webp" alt="" width="421" height="421" />
        ) : (
          <Image src="/img/avatars/1.webp" alt="" width="421" height="421" />
        )}
      </div>
    </section>
  );
};
