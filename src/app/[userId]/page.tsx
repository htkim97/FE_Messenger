"use client";
import Chat from "@/components/Chat/Chat";
import styles from "./page.module.scss";
import Header from "@/components/Header/Header";

export default function ChatPage() {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header />
      </div>

      <div className={styles.input}></div>
      <div className={styles.chatRoomList}></div>
    </div>
  );
}
