"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./LoginForm.module.scss";
import Logo from "@/components/Logo/Logo";
import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginForm() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session && session.user) {
      // session.user.id로 동적 경로로 이동
      router.push(`/${session.user?.name}`);
    }
  }, [session, router]);

  return (
    <div style={{ flexDirection: "column" }}>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>

      <button onClick={() => signIn("google")} className={styles.submitBtn}>
        <div className={styles.login}>로그인</div>
      </button>
    </div>
  );
}
