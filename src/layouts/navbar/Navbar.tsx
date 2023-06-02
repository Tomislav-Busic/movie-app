import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { AiFillHome, AiOutlineHome, } from "react-icons/ai";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

import styled from "./navbar.module.scss";

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
                    {
                        toogle ?
                            <AiOutlineHome className={styled.icon} />
                            :
                            <AiFillHome className={styled.icon} />
                    }

                    <p className={toogle ? styled.active : ""}>Home</p>
                </Link>
                <Link
                    to="/favorites"
                    className={styled.frame}
                    onClick={() => setToogle(true)}
                >
                    {
                        toogle ?
                            <MdFavorite className={styled.icon} />
                            :
                            <MdOutlineFavoriteBorder className={styled.icon} />
                    }
                    <p className={toogle ? "" : styled.active}>Favorites</p>
                </Link>
            </div>
        </div>
    )
}

