import { Logo } from "./logo/Logo";
import styled from "./header.module.scss";

export const Header = () => {
    return (
        <div className={styled.navbar}>
            <Logo />
        </div>
    )
}