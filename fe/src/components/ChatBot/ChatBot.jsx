import React, { useState } from "react";
import styled from "styled-components";

import WordCloud from "./WordCloud";

const ChatBot = () => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const onSetMessage = ({ target }) => {
    setMessage(target.value);
  };

  const pressEnter = (e) => {
    if (e.keyCode === 13) onPassMessage();
  };

  const onPassMessage = () => {
    message && setMessageList((messageList) => [...messageList, { text: message, user: true }]);
    setMessage("");
  };

  const wordCloudList = messageList.map((message, index) => <WordCloud message={message} key={index} />);

  return (
    <Wrapper>
      <TitleBox>
        <div>챗봇</div>
        <button>X</button>
      </TitleBox>
      <ContextBody>{wordCloudList}</ContextBody>
      <InputBox>
        <input
          placeholder="챗봇에게 궁금한 점을 물어보세요!"
          value={message}
          onKeyDown={pressEnter}
          onChange={onSetMessage}
        ></input>
        <button onClick={onPassMessage}>보내기</button>
      </InputBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 300px;
  height: 500px;
`;

const TitleBox = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContextBody = styled.div`
  width: 100%;
  height: 80%;
`;

const InputBox = styled.div`
  width: 100%;
  height: 10%;
  justify-content: space-between;
`;

export default ChatBot;
