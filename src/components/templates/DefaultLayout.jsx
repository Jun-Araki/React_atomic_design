import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Footer";
import { Outlet } from "react-router-dom";
export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
