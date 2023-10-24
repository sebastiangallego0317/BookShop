import React from "react";
import Context from "../CartContext/CartContext";
import { useContext } from "react";
export const Books = () => {
  const { items, changeQuantity, removeFromCart } = useContext(Context);
  
  const handleChange = (e, item) => {
    try {
      changeQuantity(item.book, parseInt(e.target.value));
      e.target.style.border = "";
    } catch (ex) {
      e.target.style.border = "red 1px solid";
      e.target.value = item.quantity;
      console.log(ex);
    }
  };
  return (
    <section className=" flex justify-start min-h-full w-full flex-col gap-4">
      {items.length > 0 ? (
        <>
          {items.map((item) => (
            <div className="flex items-center gap-6 p-5">
              <section className="w-96 h-40 relative grid place-content-center">
                <img
                  src={item.book.image}
                  className="w-full brightness-50 h-full object-cover absolute"
                />
                <strong className="z-10 text-2xl">{item.book.title}</strong>
              </section>
              <section>
                <input
                  onChange={(e) => handleChange(e, item)}
                  type="number"
                  className="w-12 focus:outline-none h-12 text-center rounded-xl text-black"
                  defaultValue={item.quantity}
                />
              </section>
              <button
                onClick={(e) => removeFromCart(item.book)}
                className="text-2xl font-bold text-red-600 rounded-full bg-slate-300 py-2 px-4 self-center"
              >
                X
              </button>
            </div>
          ))}
        </>
      ) : (
        <section className="m-auto h-full">
          <h1 className="text-3xl font-bold text-center h-7">
            No hay elementos en el carrito
          </h1>
        </section>
      )}
    </section>
  );
};
