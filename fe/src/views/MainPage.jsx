import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getUser } from "../util/ReqMessage";
import ChatBot from "../components/ChatBot/ChatBot";

const MainPage = () => {
  const { userName } = useParams();
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: "", school: "", favors: "", graduatedYear: null });

  const getUserHandler = async () => {
    const user = await getUser(userName);
    setUserInfo(user);
  };

  useEffect(() => {
    getUserHandler();
  }, []);

  const onSetChatbotOpen = () => {
    setChatbotOpen(!chatbotOpen);
  };

  return (
    <>
      {userInfo && (
        <>
          <Wrapper>
            <MainBody>
              <MainLeft>
                <Profile>
                  <p>이름: {userInfo.name}</p>
                  <p>학교: {userInfo.school}</p>
                  <p>졸업년도: {userInfo.graduatedYear}</p>
                  <p>관심사: {userInfo.favors}</p>
                </Profile>
                <SchoolList>School List</SchoolList>
              </MainLeft>
              <MainCenter>Center</MainCenter>
              <MainRight>
                <ChatBot isOpen={chatbotOpen} onSetChatbotOpen={onSetChatbotOpen} />
                <ChatBotButton onClick={onSetChatbotOpen}>CHAT BOT</ChatBotButton>
              </MainRight>
            </MainBody>
            <MainFooter>
              <div>Footer</div>
            </MainFooter>
          </Wrapper>
        </>
      )}
    </>
  );
};

const Wrapper = styled.div`
  padding: 20px;
`;

const MainHeader = styled.div`
  padding: 20px;
  height: 50px;
  background-color: #4fd2c2;
`;

const MainBody = styled.div`
  height: 550px;
  display: flex;
`;

const MainLeft = styled.div`
  padding: 20px;
  width: 15%;
  background-color: #dddddd;
`;

const Profile = styled.div`
  margin: 0 0 20px 0;
  padding: 20px;
  width: 70%;
  height: 20%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

const SchoolList = styled.div`
  padding: 20px;
  width: 70%;
  height: 60%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

const MainCenter = styled.div`
  padding: 20px;
  width: 55%;
  background-color: #dddddd;
`;

const MainRight = styled.div`
  padding: 20px;
  width: 25%;
  background-color: #ffffff;
  display: block;
  align-items: center;
  justify-content: space-between;
`;

const MainFooter = styled.div`
  padding: 20px;
  height: 50px;
  background-color: #4fd2c2;
`;

const ChatBotButton = styled.button`
  height: 10%;
  color: white;
  background: #4fd2c2;
  border: none;
  border-radius: 5px;
  margin-top: 14px;
`;

export default MainPage;
