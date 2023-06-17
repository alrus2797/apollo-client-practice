import { Outlet } from "react-router-dom";
import { NavBar } from "./navbar/navbar";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default App;
