"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const [userId, setUserId] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    });

    if (response.ok) {
      const { id } = await response.json();
      router.push(`/${id}`);
    } else {
      console.error("Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin} className={styles.layout}>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="아이디를 입력하세요"
        required
      />
      <div className={styles.submitBtn}>로그인</div>
    </form>
  );
};

export default LoginForm;
