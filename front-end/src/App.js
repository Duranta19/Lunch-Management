import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import ItemCard from "./components/ItemCard";
import MyChoiceList from "./components/MyChoiceList";
function App() {
  return (
    <>
      <Nav li={["View Menu", "My Choice", "Logout"]} />

      <MyChoiceList/>

    </>
  );
}

export default App;
