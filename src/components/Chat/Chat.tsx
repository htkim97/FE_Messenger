"use client";
import { useState, FormEvent } from "react";
import styles from "./Chat.module.scss";

interface Message {
  id: number;
  user: string;
  text: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [userName, setUserName] = useState<string>("User");

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const newMsg: Message = {
      id: Date.now(),
      user: userName,
      text: newMessage.trim(),
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.chatBox}>
        <div className={styles.messages}>
          {messages.map((msg) => (
            <div key={msg.id} className={styles.message}>
              <strong>{msg.user}: </strong> {msg.text}
            </div>
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
