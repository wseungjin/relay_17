import React from "react";
import styled from "styled-components";

export const LoginPage = () => {

  return (
    <div>
    <h1>I Loved School Logo</h1>
      <LoginBox>
        <LoginHeader>
          <h1>로그인</h1>
          <p>안녕하세요, I Loved School 입니다.</p>
        </LoginHeader>
          <form method="post">
            <div>
              <Input type="text" name="id" placeholder="아이디"></Input>
            </div>
            <div>
              <Input type="password" name="pw" placeholder="비밀번호"></Input>
            </div>
            <div>
              <Input type="text" name="hobby" placeholder="취미"></Input>
            </div>
            <div>
              <Input type="text" name="graduateYear" placeholder="졸업년도"></Input>
            </div>
            <Button type="submit">로그인</Button>
          </form>
      </LoginBox>
      
    </div>
  );
};

const Input = styled.input`
  display : block;
  margin : 0 auto;
  margin-top : 10px
`
const LoginBox = styled.div`
  display : block;
  top : 30%;
  margin : auto;
  margin-top : 10%;
  width : 40%;
  border : 3px solid grey;
  padding : 10px;
`
const LoginHeader = styled.div`
  display : block;
  text-align : center;
`
const Button = styled.button`
display : block;
margin : 0 auto;
margin-top : 50px;
`