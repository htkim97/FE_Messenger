"use client";
import { useState, FormEvent } from "react";
import styles from "./Chat.module.scss";
import Message from "../Message/Message";

interface ChatProps {
  userId: string | string[];
}

export default function Chat({ userId }: ChatProps) {
  const [messages, setMessages] = useState<
    { id: number; userId: string; text: string }[]
  >([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = async (e: React.FormEvent) => {
    console.log(userId);
    e.preventDefault();
    if (!newMessage) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: prevMessages.length + 1,
        userId: userId as string,
        text: newMessage,
      },
    ]);

    setNewMessage("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.chatBox}>
        <h1>{userId}</h1>
        <div
          style={{
            maxHeight: "400px",
            overflowY: "scroll",
            border: "1px solid #ccc",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          {messages.map((message) => (
            <Message
              key={message.id}
              userId={message.userId}
              text={message.text}
            />
          ))}
        </div>
        <form onSubmit={handleSendMessage} className={styles.form}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="채팅을 적어볼까여,,,"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            빨하
          </button>
        </form>
      </div>
    </div>
  );
}
