import { NavLink } from "react-router";

function App() {
  return (
    <>
      <p>Main Page</p>
      <NavLink to={"/administrator"} className={'btn btn-primary mr-3'}>administrator</NavLink>
      <NavLink to={"/receptionist"} className={'btn btn-primary'}>resepsionis</NavLink>
    </>
  );
}

export default App;