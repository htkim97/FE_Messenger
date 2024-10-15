"use client";

import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import styles from "./LoginForm.module.scss";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleClick = () => setShow(!show);

  const handleLogin = () => {
    router.push("/ChatPage");
  };

  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.post("/api/login", {
  //       id,
  //       password,
  //     });

  //     if (response.status === 200) {
  //       const data = response.data;

  //       console.log("로그인 성공 ::::", data);
  //       router.push("/chat");
  //     }
  //   } catch (err) {
  //     if (axios.isAxiosError(err)) {
  //       setError(err.response?.data.message || "로그인 실패");
  //     } else {
  //       setError("서버 오류 발생");
  //     }
  //   }
  // };

  return (
    <div className={styles.layout}>
      <div className={styles.inputLayout}>
        <div className={styles.idInput}>
          <Input
            placeholder="Enter ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </div>
      </div>
      {error && <div className={styles.error}>{error}</div>}{" "}
      <div className={styles.submitBtn}>
        <Button onClick={handleLogin}>로그인</Button>{" "}
      </div>
    </div>
  );
}
