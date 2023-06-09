import { TmdbHeaderLogo } from "./tmdbHeaderLogo/TmdbHeaderLogo";
import styled from "./header.module.scss";

export const Header = () => {
    return (
        <div className={styled.navbar}>
            <TmdbHeaderLogo />
        </div>
    )
}