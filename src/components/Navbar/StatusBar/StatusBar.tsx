import styled from "./statusBar.module.scss";

export const StatusBar = () => {
    return (
        <div className={styled.status}>
            <div className={styled.bar}></div>
        </div>
    );
}