import Chat from "@/components/Chat/Chat";
import styles from "./page.module.scss";

interface ChatPageProps {
  params: {
    userId: string;
  };
}

export default function ChatPage({ params }: ChatPageProps) {
  const { userId } = params;
  return (
    <div className={styles.layout}>
      <Chat userId={userId} />
    </div>
  );
}
