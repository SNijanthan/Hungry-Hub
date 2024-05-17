import logo from "./Images/App Logo.png";

function App() {
  return (
    <div className="px-5 pt-5">
      <img src={logo} alt="Logo" className="w-1/12" />
      <h1 className="text-orange-500 font-bold text-3xl">Hungry Hub</h1>
    </div>
  );
}

export default App;
