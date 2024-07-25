import Image from "next/image";
import styles from "./page.module.css";
import React from "react";

/* export default function Home() {
  return (
    <main className={styles.main}> 
    "Hello World!"
    </main>
    // "Hello World!"
  )
}
*/

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://docs.google.com/document/d/17-Yu7P9Q-0_sveLqcvWBD0EEfl2WqbymaI7v_Np7NUo/edit#heading=h.2a2wrqxsri8n"
          className={styles.card} 

          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Hello World!!!!! <span>-&gt;</span>
          </h2>
          <p>My Hello World logo created in Google Docs!.</p>
        </a>

        <a
          href="https://www.birdsandblooms.com/birding/attracting-birds/bird-nesting/cute-baby-bird-photos/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Cute baby bird pictures! &gt;
          </h2>
          <p>22 cute baby bird pictures from Birds&Blooms website!</p>
        </a>

        <a
          href="https://unsplash.com/photos/multicolored-hallway-RnCPiXixooY"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Cool room <span>-&gt;</span>
          </h2>
          <p>Cool sci-fi room drawing I found online!</p>
        </a>

        <a
          // href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          href = "https://doodlewash.com/even-the-strongest/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            AND BEST OF ALL!!! <span>-&gt;</span>
          </h2>
          <p>
            The cutest image I found today!
          </p>
        </a>
      </div>
    </main>
    
  );
}



/* export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
*/
