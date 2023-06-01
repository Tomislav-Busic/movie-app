import homeB from "../../assets/images/home-blue.png";
import homeW from "../../assets/images/home-white.png";
import favoritesB from "../../assets/images/favorites-blue.png";
import favoritesW from "../../assets/images/favorites-white.png";

import styled from "./footer.module.scss";

export const Footer = () => {
    return (
        <div className={styled.footer}>
            <div className={styled.container}>
                <div className={styled.frame}>
                    <img src={homeB} alt="home" />
                    <p>Home</p>
                </div>
                <div className={styled.frame}>
                    <img src={favoritesW} alt="favorites" />
                    <p className={styled.active}>Favorites</p>
                </div>
            </div>
        </div>
    )
}