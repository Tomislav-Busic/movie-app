import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { AiOutlineLeft } from "react-icons/ai";

import styled from "./goBack.module.scss";

export const GoBack = () => {
    const [active, setActive] = useState(false);
    const location = useLocation();

    useEffect(() => {
        location.pathname !== "/" ? setActive(true) : setActive(false)
    }, [location.pathname])


    return <>
        {active &&
            <AiOutlineLeft className={styled.back} />
        }
    </>;
}