import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import ItemCard from "./components/ItemCard";
function App() {
  return (
    <>
      <Nav li={["View Menu", "My Choice", "Logout"]} />

      <div class="p-5 grid grid-cols-1 mx-auto md:grid-cols-3 gap-3 lg:grid-cols-4">
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      </div>

    </>
  );
}

export default App;
