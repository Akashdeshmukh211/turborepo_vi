"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { button } from "@repo/ui/button";
import { custmetitle } from "@repo/ui/custmetitle";
import { useEffect, useState } from "react";


export default function Home() {
  const [user, setUser] = useState([]);

  return (
    <>
      <button className={styles.secondary}>new next button</button>
      <custmetitle> MyVi new changesasdfasdf asdf</custmetitle>
      <div>
        <h1>App1 - User Info</h1>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </>
  );
}
