import { useState } from "react";

import { AiOutlineLeft } from "react-icons/ai";

import styled from "./goBack.module.scss";

export const GoBack = () => {
    const [active, setActive] = useState(false);

    return <>
        {active &&
            <AiOutlineLeft className={styled.back} />
        }
    </>;
}