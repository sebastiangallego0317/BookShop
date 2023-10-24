import { useContext } from "react";
import Context from "../../CartContext/CartContext";
import { useRef } from "react";
export const Book = ({ title, image, stock, price, id  }) => {
  const context = useContext(Context);
  const numRef = useRef(null);
  const adding = () => {
    context.addToCart(
      { title, image, stock, price, id },
      parseInt(numRef.current.value)
    );
  };
  return (
    <section className="flex h-[12rem] w-full bg-slate-800 py-2 px-5 gap-5 text-white ">
      <img
        src={image}
        alt=""
        className="w-36 h-full object-cover bg-gradient-to-b from-white to-fuchsia-950 p-0.5 rounded-xl object-center"
      />
      <div className="w-3/4 flex flex-col items-start justify-between h-full">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm">{stock > 0 ? stock: `no hay `} unidades disponibles</p>
        <p className="text-sm">Precio: ${Math.floor(price)}</p>
      </div>
      <input
        ref={numRef}
        type="number"
        className="rounded-xl text-black h-12 self-center text-center text-xl"
        disabled={stock === 0}
        min={1}
        max={stock}
        defaultValue={1}
        onChange={() => {}}
      />
      <button
        onClick={adding}
        className="self-center rounded-xl h-5 p-5 bg-gray-200 hover:scale-105 transition-transform text-center flex items-center text-black"
      >
        addToCart
      </button>
    </section>
  );
};
