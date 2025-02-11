import { Header } from "../atoms/layout/Header";
import { Outlet } from "react-router-dom";

export const HeaderOnly = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
