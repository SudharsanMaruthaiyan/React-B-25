import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import UserStore from "../store/userStore";

const AppLayout = () => {
  return (
    <UserStore.Provider value={{ name: "React Developer" }}>
      <Header />
      <Outlet />
      <Footer />
    </UserStore.Provider>
  );
};

export default AppLayout;
