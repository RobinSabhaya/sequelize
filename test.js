// const str =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjkzMjEzNDk3fQ.hLE0unVe13nudfjY1Bekcqe7yuVrXMuajkAL_54wQw8";
// console.log(str.slice(0, 7));

// const index = "btn_1";
// console.log(index.slice(4));

const arr = [
  {
    id: 9,
    price: 4000,
    qty: "20",
    productId: 2,
    productName: "apple",
    product_price: "200",
  },
  {
    id: 10,
    price: 2200,
    qty: 22,
    productId: 4,
    productName: "watermelon",
    product_price: "100",
  },
  { productId: 3, qty: "10", price: 2000, product_price: "200" },
  { productId: 2, qty: "10", price: 2000, product_price: "200" },
];

arr.forEach((ele) => {
  console.log(ele.hasOwnProperty("id"));
});
