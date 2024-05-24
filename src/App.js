import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { useParams } from "react-router-dom";

function App() {
  const location = useLocation();

  const { resId } = useParams();

  const pathWithoutFooter = ["/restaurant/" + resId];

  const hideFooter = pathWithoutFooter.includes(location.pathname);

  return (
    <div className="app">
      <Header />
      <Outlet />
      {!hideFooter && <Footer />}
    </div>
  );
}

export default App;
