import line from "../../assets/images/line.png";
import vector from "../../assets/images/vector.png";
import back from "../../assets/images/back.png";

import styled from "./footer.module.scss";

export const Footer = () => {
    return (
        <div className={styled.and_navbar}>
            <div className={styled.buttons}>
                <div className={styled.img_container}>
                    <img src={line} alt="line" />
                    <img src={line} alt="line" />
                    <img src={line} alt="line" />
                </div>
                <div className={styled.img_container}>
                    <img src={vector} alt="vector" />
                </div>
                <div className={styled.img_container}>
                    <img src={back} alt="back" />
                </div>
            </div>
        </div>
    )
}