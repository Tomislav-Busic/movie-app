import { Logo } from "./logo/Logo";
import { StatusBar } from "./statusBar/StatusBar";
import styled from "./navbar.module.scss";

export const Navbar = () => {
    return (
        <div className={styled.navbar}>
            <StatusBar />
            <Logo />
        </div>
    )
}