import { useState } from "react";
import { Books } from "./Books";
import { Buy } from "../../Consts/Services.d";
import Context from "../CartContext/CartContext";
import { useContext } from "react";

export const ShopCart = () => {
  const { items, clearItems } = useContext(Context);
  const [isPopUpShow, setIsPopUpShow] = useState(false);
  const [isBuy, setIsBuy] = useState(false);
  const handleClick = () => {
    Buy(items, (res, err) => {
      if (err) return;
      console.log(res);
      setIsBuy(true);
      setTimeout(() => {
        location.href = "/";
      }, 3200);
    });
  };

  return (
    <div className="text-white flex-col flex items-center justify-center gap-12 min-h-screen min-w-[100vw]">
      <Books />
      <div className="flex w-1/2 justify-around">
        <button
          onClick={() => setIsPopUpShow(!isPopUpShow)}
          className="px-7 py-2 bg-gray-300 text-lg font-bold text-black rounded-xl"
        >
          {" "}
          confirmar Compra
        </button>

        <button
          onClick={clearItems}
          className="px-7 py-2 bg-gray-300 text-lg font-bold text-black rounded-xl"
        >
          Cancelar compra
        </button>
      </div>
      <p className="fixed bottom-7 right-7 z-20 font-bold text-2xl bg-black rounded-xl p-5">{`precio total: $${items.reduce(
        (acc, item) => acc + item.book.price * item.quantity,
        0
      )}`}</p>
      {isPopUpShow && (
        <div className="fixed top-0 left-0 bg-black/50 backdrop-blur-sm rounded-xl p-4 text-center text-white font-bold text-lg flex-col flex items-center justify-center gap-4 min-w-[100vw] min-h-screen">
          <section className="py-5 px-7 bg-gray-300 text-black rounded-xl">
            Esta seguro que desea confirmar la compra?
          </section>
          <section className="flex items-center justify-center gap-12">
            {isBuy ? (
              <h1 className="font-bold text-3xl text-white">
                Compra realizada con exito
              </h1>
            ) : (
              <>
                <button
                  onClick={handleClick}
                  className="py-2 w-12 hover:bg-blue-200 bg-gray-300 text-black rounded-xl"
                >
                  SI
                </button>
                <button
                  onClick={() => setIsPopUpShow(false)}
                  className="py-2 w-12 hover:bg-blue-200 bg-gray-300 text-black rounded-xl"
                >
                  NO
                </button>
              </>
            )}
          </section>
        </div>
      )}
    </div>
  );
};
