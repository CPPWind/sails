import React from "react";
import styles from "./styles.module.css";
import Card from "../../components/Card";

function Client() {
  return (
    <main className={styles.client}>
      <header>
        <h1>Sails</h1>
      </header>
      <section className={styles.centered}>
        <Card>Hiya</Card>
      </section>
    </main>
  );
}

export default Client;
