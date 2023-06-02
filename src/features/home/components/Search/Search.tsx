import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

import styled from "./search.module.scss";

export const Search = () => {
    return (
        <div className={styled.search}>
            <AiOutlineSearch />
            <input placeholder="Search" />
            <AiOutlineClose />
        </div>
    )
}