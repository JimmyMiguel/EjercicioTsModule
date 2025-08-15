import productos from "./products.json"  with {type: "json"}

export const productosOrdenados = productos;

productosOrdenados.sort((a, b) => a.price - b.price)

console.log(productosOrdenados);
