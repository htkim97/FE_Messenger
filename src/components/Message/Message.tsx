import React from "react";

interface MessageProps {
  userId: string;
  text: string;
}

export default function Message({ userId, text }: MessageProps) {
  return (
    <div>
      <strong>{userId}:</strong> {text}
    </div>
  );
}
