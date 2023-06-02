import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

import styled from "./search.module.scss";

export const Search = () => {
    return (
        <div className={styled.search_container}>
            <div className={styled.search}>
                <AiOutlineSearch className={styled.icon} />
                <input placeholder="Search" />
                <AiOutlineClose className={styled.icon} />
            </div>
            <button>Close</button>
        </div>
    )
}