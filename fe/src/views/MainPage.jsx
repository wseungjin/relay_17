import React from "react";
import styled from "styled-components";

import ChatBot from "../components/ChatBot/ChatBot";

const MainPage = () => {
  return (
    <Wrapper>
      <MainHeader>
        <div>I Loved School</div>
      </MainHeader>
      <MainBody>
        <MainLeft>
          <Profile>profile</Profile>
          <SchoolList>School List</SchoolList>
        </MainLeft>
        <MainCenter>Center</MainCenter>
        <MainRight>
          <ChatBot />
        </MainRight>
      </MainBody>
      <MainFooter>
        <div>Footer</div>
      </MainFooter>
    </Wrapper>
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
  margin: 0px 5% 0px 5%;
  background-color: #dddddd;
`;

const MainRight = styled.div`
  padding: 20px;
  width: 25%;
  background-color: #fffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MainFooter = styled.div`
  padding: 20px;
  height: 50px;
  background-color: #4fd2c2;
`;

export default MainPage;
