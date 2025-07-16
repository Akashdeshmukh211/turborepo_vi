import React from 'react';
import { Subcriber } from "@repo/ui/subcriber"
import styles from "./subcriber.module.css";


const page = () => {
  return (
    <div>
        Subcriber
        <Subcriber  Subcriber_css={styles} title={"Neo Subcirber"} button_title="sing up now"/>
    </div>
  )
}


export default page;