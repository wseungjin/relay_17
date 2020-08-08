import React, { useState } from "react";
import styled from "styled-components";

import WordCloudList from "./WordCloudList";

const ChatBot = () => {
  const [message, setMessage] = useState("");

  const onSetMessage = ({ target }) => {
    setMessage(target.value);
  };

  const onPassMessage = () => {};

  return (
    <Wrapper>
      <TitleBox>
        <div>챗봇</div>
        <button>X</button>
      </TitleBox>
      <ContextBody>
        <WordCloudList />
      </ContextBody>
      <InputBox>
        <input textholder="챗봇에게 궁금한 점을 물어보세요!" onChange={onSetMessage}></input>
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
