import { Logo } from "./logo/Logo";
import { StatusBar } from "./statusbar/Statusbar";
import styled from "./navbar.module.scss";

export const Navbar = () => {
    return (
        <div className={styled.navbar}>
            <StatusBar />
            <Logo />
        </div>
    )
}