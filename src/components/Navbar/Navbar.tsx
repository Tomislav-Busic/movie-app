import { Logo } from "./Logo/Logo";
import { StatusBar } from "./StatusBar/StatusBar";
import styled from "./navbar.module.scss";

export const Navbar = () => {
    return (
        <div className={styled.navbar}>
            <StatusBar />
            <Logo />
        </div>
    )
}