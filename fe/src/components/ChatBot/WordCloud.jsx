import React from "react";
import styled from "styled-components";

const WordCloud = ({ message }) => {
  return (
    <>
      <Message isUser={message.user}>{message.text}</Message>
    </>
  );
};

const Message = styled.div`
  background-color: ${(props) => (props.isUser ? "#4fd2c2" : "#ddd")};
  float: ${(props) => (props.isUser ? "right" : "left")};
  margin: 5px;
  padding: 4px 10px;
  border-radius: 5px;
  overflow-wrap: anywhere;
`;

export default WordCloud;
