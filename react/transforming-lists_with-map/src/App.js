const data = [
  {
    id: "1",
    title: "Tiramisu",
    description: "The best tiramisu in town",
    image: "#",
    price: "$5.00",
  },
  {
    id: "2",
    title: "Lemon Ice Cream",
    description: "Tart",
    image: "#",
    price: "$3.00",
  },
  {
    id: "3",
    title: "Chocolate",
    description: "yummy",
    image: "#",
    price: "$2.50",
  }
];


// create a new variable, mapping the data array to a new object declared as dessert
const topDesserts = data.map(dessert => {
  return {
    content: `${dessert.title} - ${dessert.description}`,
    price: dessert.price
  }
});

function App() {
  console.log(topDesserts); 
  return (
    <h1>Examine console output.</h1>
    
  );
}

export default App;
