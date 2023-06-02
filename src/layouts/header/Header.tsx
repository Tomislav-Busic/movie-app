import { Logo } from "./logo/Logo";
import { StatusBar } from "./statusbar/Statusbar";
import styled from "./header.module.scss";

export const Header = () => {
    return (
        <div className={styled.navbar}>
            <StatusBar />
            <Logo />
        </div>
    )
}