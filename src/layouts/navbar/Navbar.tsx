import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import homeB from "../../assets/images/home-blue.png";
import homeW from "../../assets/images/home-white.png";
import favoritesB from "../../assets/images/favorites-blue.png";
import favoritesW from "../../assets/images/favorites-white.png";

import styled from "./footer.module.scss";

export const Navbar = () => {
    const [toogle, setToogle] = useState<boolean>(false);
    let location = useLocation();

    useEffect(() => {
        location.pathname !== "/" ? setToogle(true) : setToogle(false);
    }, [location.pathname])


    return (
        <div className={styled.footer}>
            <div className={styled.container}>
                <Link
                    to="/"
                    className={styled.frame}
                    onClick={() => setToogle(false)}
                >
                    <img src={toogle ? homeW : homeB} alt="home" />
                    <p className={toogle ? styled.active : ""}>Home</p>
                </Link>
                <Link
                    to="/favorites"
                    className={styled.frame}
                    onClick={() => setToogle(true)}
                >
                    <img src={toogle ? favoritesB : favoritesW} alt="favorites" />
                    <p className={toogle ? "" : styled.active}>Favorites</p>
                </Link>
            </div>
        </div>
    )
}

