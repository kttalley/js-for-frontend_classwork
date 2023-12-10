const topDesserts = [
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

function App() {
  const listItems = topDesserts.map( dessert => {
    const itemText = `${dessert.title} - ${dessert.price}`
    return <li>{itemText}</li>
  })
  return (
   <div>
    {listItems}
   </div>
  );
}

export default App;
