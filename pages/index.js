import React, { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Acrowd Interview Test</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://acrowd.se">Acrowd!</a>
        </h1>

        <p className={styles.description}>
          Get started by reading the{" "}
          <code className={styles.code}>README.md</code> file
        </p>

        <div className={styles.grid}>
          <a
            href="https://github.com/Black-Pixel-AB/shop-interview"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <h2>Instructions &rarr;</h2>
            <p>Check out the instructions for the project!</p>
          </a>

          <a
            href="https://www.figma.com/file/z7jZJGxVyjScHaNlVVlh6d/Shop-Interview?node-id=0%3A1"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <h2>Design &rarr;</h2>
            <p>The store is based on the attached design</p>
          </a>
          <Link href="/shop" rel="noreferrer" passHref>
            <a className={styles.card}>
              <h2>Shop &rarr;</h2>
              <p>Check out the shop page!</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
