import { useState } from "react";
import { Books } from "../../Consts/Books";
import { Book } from "./Book/Book";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../Consts/Services.d";
import { useEffect } from "react";
export const BookList = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`${BASE_URL}books`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <main className="flex p-5 items-center ">
      {isLoading ? (
        <div> cargando</div>
      ) : (
        (
          <section className="flex flex-col items-center justify-start w-4/5 gap-1 ">
            {books.map((el, i) => {
              return (
                <Book
                  key={i}
                  id={el.id}
                  price={el.price}
                  stock={el.stock}
                  title={el.title}
                  image={el.image}
                />
              );
            })}
          </section>
        )
      )}
      <Link to="/Cart" className="w-12 h-12 top-5 right-5 fixed">
        <img
          src="https://th.bing.com/th?id=OIP.N9_o8N5H3KGExKFO-qorPAHaHa&w=80&h=80&c=1&vt=10&bgcl=a75665&r=0&o=6&pid=5.1"
          alt=""
        />
      </Link>
    </main>
  );
};
