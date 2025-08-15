// assert { type: "json" } ya no va
// https://stackoverflow.com/questions/70106880/err-import-assertion-type-missing-for-import-of-json-file
import {productosOrdenados} from './productoModel.js' 
console.log(productosOrdenados);


export function productsListComponent() {
  //creo un elemento en el dom y le doy estilo
  const section = document.createElement("section");
  section.style.border = "solid 1px #ccc";
  section.style.padding = "10px";
/// creo una lista desordenada
  const list = document.createElement("ul");

  ///itero sonbre cada uno de los productos 
  productosOrdenados.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${product.title} - $${product.price}`;
    list.appendChild(listItem);
  });

  section.appendChild(list);

  return section;
}
