export const BASE_URL = "http://localhost:3000/";
import axios from "axios";
export function Buy(items, callback) {
  console.log(items);
  items.forEach((el) => {
    axios
      .post(BASE_URL + `buy?id=${el.book.id}&&quantity=${el.quantity}`)
      .then((res) => {
        if (res.status > 250) throw new Error(res.statusText);
      })
      .catch((err) => {
        callback(null, err);
      });
  });
  callback("Compra realizada con exito", null);

}
