import battery from "../../../assets/images/battery.png";
import cellular from "../../../assets/images/cellular.png";
import time from "../../../assets/images/time.png";
import wifi from "../../../assets/images/wifi.png";

import styled from "./statusBar.module.scss";


export const StatusBar = () => {
    return (
        <div className={styled.status}>
            <div className={styled.bar}>
                <img src={wifi} alt="wifi" />
                <img src={cellular} alt="cellular" />
                <img src={battery} alt="battery" />
                <img src={time} alt="time" />
            </div>
        </div>
    );
}