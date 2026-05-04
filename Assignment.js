// Assignment 1
let customerName = "Jet";
let customerAge = 25;
let bookTitle = "The Riche Also Cry";
let bookPrice = 8000;
let bookQuantity = 15;
let isStudents = true;



console.log("Customer Name:", customerName);
console.log("Customer Age:", customerAge);
console.log("Book Title:", bookTitle);
console.log("Book Price:", bookPrice);
console.log("Book Quantity:", bookQuantity);
console.log("Is Student:", isStudents);

// Arithmetic operators(knowing amount)

let totalPrice = bookPrice * bookQuantity;

console.log("Total Price:", totalPrice)


// using comparison operators

let isAdult= customerAge >=20;
let isBuyingManyBooks = bookQuantity > 3;
let isBookFiveThousand = bookPrice===5000;

console.log("Is Adult?:", isAdult);
console.log("Buy More than 3 books?", isBuyingManyBooks);
console.log("Is Book Price 5000?", isBookFiveThousand);

// Creating customer order

let customerOrder = {
   name:customerName,
   title:bookTitle,
   quantity:bookQuantity,
   finalAmount:totalPrice
};

console.log("customer Order:", customerOrder);