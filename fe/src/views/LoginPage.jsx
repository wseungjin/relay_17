import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const LoginPage = () => {
  let history = useHistory();

  const onPassMainPage = () => history.push(`/MainPage`);

  return (
    <div>
      <button onClick={onPassMainPage}>Go to Main Page</button>
    </div>
  );
};

export default LoginPage;
