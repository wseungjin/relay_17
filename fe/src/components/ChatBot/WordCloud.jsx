import React from "react";
import styled from "styled-components";

const WordCloud = ({ message }) => {
  return (
    <MessageBox isUser={message.user}>
      <div>{message.text}</div>
    </MessageBox>
  );
};

const MessageBox = styled.div`
  text-align: ${(props) => (props.isUser ? "right" : "left")};
`;

export default WordCloud;
