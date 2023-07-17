import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { AiOutlineLeft } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

import styled from "./goBack.module.scss";

export const GoBack = () => {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    location.pathname !== "/" ? setActive(true) : setActive(false);
  }, [location.pathname]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      {active && (
        <AiOutlineLeft role="back" className={styled.back} onClick={goBack} />
      )}
    </>
  );
};
