import React from "react";

interface MessageProps {
  userId: string;
  text: string;
}

const Message: React.FC<MessageProps> = ({ userId, text }) => {
  return (
    <div>
      <strong>{userId}:</strong> {text}
    </div>
  );
};

export default Message;
