"use client";
import { useSession } from "next-auth/react";
import { NewMemberIcon } from "@/constants/icon";
import styles from "./Header.module.scss";

export default function Header() {
  const { data: session } = useSession();

  if (session) {
    const str = session.user?.email;
    const result = str?.substring(0, str.indexOf("@"));
    console.log("결과:::", result);

    return (
      <div className={styles.layout}>
        <div className={styles.userName}>{result}</div>
        <div className={styles.newChat}>
          <NewMemberIcon />
        </div>
      </div>
    );
  }
}
