import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import PremiumUser from "./Utils/PremiumUser";

function App() {
  const location = useLocation();

  const { resId } = useParams();

  // const [user, setUser] = useState();

  // useEffect(() => {
  //   const data = {
  //     premiumUser: true,
  //   };
  //   setUser(data.premiumUser);
  // }, []);

  const pathWithoutFooter = ["/restaurant/" + resId, "/grocery", "/cart"];

  const hideFooter = pathWithoutFooter.includes(location.pathname);

  return (
    // <PremiumUser.Provider value={{ premiumUser: user }}>
    <div className="app">
      <Header />
      <Outlet />
      {!hideFooter && <Footer />}
    </div>
    // </PremiumUser.Provider>
  );
}

export default App;
