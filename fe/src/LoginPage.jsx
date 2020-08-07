import React, { useState } from "react";
import styled from "styled-components";

export const LoginPage = () => {
  const [number, setNumber] = useState(0);
  const [id, setId] = useState("");

  const clickMinus = () => {
    setNumber(number - 1);
  };

  const clickPlus = () => {
    setNumber(number + 1);
  };

  const changeInput = ({ target }) => {
    setId(target.value);
  };

  return (
    <div>
      <div>Login page!!</div>

      <button onClick={clickPlus}>+</button>
      <MyNumber>{number}</MyNumber>
      <button onClick={clickMinus}>-</button>
      <input onChange={changeInput}></input>
      <div>id: {id}</div>
    </div>
  );
};

const MyNumber = styled.div`
  background-color: blue;
  width: 300px;
`;
