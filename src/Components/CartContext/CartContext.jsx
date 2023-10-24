import { useState, createContext } from "react";

const Context = createContext({});

export const CartContext = ({ children }) => {
  const [items, setItems] = useState([]);

  const clearItems = () => {
    setItems([]);
    window.location.href = "/";
  };
  const addToCart = (book, quantity) => {
    const Book = items.find((el) => el.book.title === book.title);

    if (!Book) {
      book.stock > quantity
        ? setItems((prev) => [...prev, { book, quantity }])
        : console.log("There is no such as you want on stock");
    } else {
      console.log(Book.book.stock);
      Book.book.stock > Book.quantity + quantity
        ? changeQuantity(book, Book.quantity + quantity)
        : console.log("There is no such as you want on stock");
    }
  };

  const changeQuantity = (book, quantity) => {
    if (quantity > book.stock)
      throw new Error("book quantity is not available");
    setItems((prev) =>
      prev.map((el) => (el.book.title === book.title ? { book, quantity } : el))
    );
  };

  const removeFromCart = (book) => {
    setItems((prev) => prev.filter((el) => el.book.title !== book.title));
  };

  return (
    <Context.Provider
      value={{
        items,
        setItems,
        addToCart,
        removeFromCart,
        changeQuantity,
        clearItems,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
