import React, { useState } from "react";
import styled from "styled-components";

import ChatBot from "../components/ChatBot/ChatBot";

const MainPage = () => {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  const onSetChatbotOpen = () => {
    setChatbotOpen(!chatbotOpen);
  };

  return (
    <Wrapper>
      <MainHeader>I Loved School</MainHeader>
      <ChatBot isOpen={chatbotOpen} onSetChatbotOpen={onSetChatbotOpen} />
      <ChatBotButton onClick={onSetChatbotOpen}>CHAT BOT</ChatBotButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
`;

const MainHeader = styled.div`
  padding: 0 0 20px 0;
`;

const ChatBotButton = styled.button`
  height: 50px;
  width: 100px;
  color: white;
  background: #4fd2c2;
  border: none;
  border-radius: 5px;
`;

export default MainPage;
