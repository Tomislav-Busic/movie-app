import { Home } from "features/home/Home";

import styled from "./pages.module.scss";

export const HomePage = () => {
  return (
    <div className={styled.page}>
      <Home />
    </div>
  );
};
