import Chat from "@/components/Chat/Chat";
import styles from "./page.module.scss";
export default function ChatPage() {
  return (
    <div className={styles.layout}>
      <Chat />
    </div>
  );
}
