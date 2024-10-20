import Chat from "@/components/Chat/Chat";
import styles from "./page.module.scss";
import { NewChatIcon } from "@/constants/icon";

interface ChatPageProps {
  params: {
    userId: string;
  };
}

export default function ChatPage({ params }: ChatPageProps) {
  const { userId } = params;
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <div className={styles.userName}>{userId}</div>
        <div className={styles.newChatBtn}></div>
      </div>

      <div className={styles.input}></div>
      <div className={styles.chatRoomList}></div>
    </div>
  );
}
