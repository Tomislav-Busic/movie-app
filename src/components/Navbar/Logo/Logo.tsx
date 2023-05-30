import logo from "../../../assets/images/TMDB-Logo.png";
import styled from "./logo.module.scss";

export const Logo = () => {
    return (
        <div className={styled.logo}>
            <img src={logo} alt="logo" />
        </div>
    );
}