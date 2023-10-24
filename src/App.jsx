import { BookList } from "./Components/BookList/BookList";
import { Routes, Route } from "react-router-dom";
import { ShopCart } from "./Components/ShopCart/ShopCart";
import Context from "./Components/CartContext/CartContext";
import { useContext } from "react";

function App() {
  const { items } = useContext(Context);
  return (
    <div className="bg-slate-950 text-white">
      <span className=" fixed top-2 right-2 text-white font-bold text-xl bg-slate-800 p-2 rounded-xl object-center object-cover z-10">
        {items.length}
      </span> y

      <Routes>
        <Route path="/" Component={BookList} />
        <Route path="/Cart" Component={ShopCart} />
      </Routes>
    </div>
  );
}

export default App;
