import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { AiFillHome, AiOutlineHome, } from "react-icons/ai";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

import styled from "./navbar.module.scss";

export const Navbar = () => {
    const [toogle, setToogle] = useState(false);
    let location = useLocation();

    useEffect(() => {
        location.pathname !== "/" ? setToogle(true) : setToogle(false);
    }, [location.pathname]);

    const toHomePage = () => {
        setToogle(false)
    };

    const toFavoritesPage = () => {
        setToogle(true)
    };


    return (
        <div className={styled.footer}>
            <div className={styled.container}>
                <Link
                    to="/"
                    className={styled.frame}
                    onClick={toHomePage}
                >
                    {
                        toogle ?
                            <AiOutlineHome className={styled.icon__gray} />
                            :
                            <AiFillHome role="homeBlue" className={styled.icon} />
                    }

                    <p className={toogle ? styled.active : ""}>Home</p>
                </Link>
                <Link
                    to="/favorites"
                    className={styled.frame}
                    onClick={toFavoritesPage}
                >
                    {
                        toogle ?
                            <MdFavorite role="favoritBlue" className={styled.icon} />
                            :
                            <MdOutlineFavoriteBorder className={styled.icon__gray} />
                    }
                    <p className={toogle ? "" : styled.active}>Favorites</p>
                </Link>
            </div>
        </div>
    )
}

