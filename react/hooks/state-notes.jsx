/*
Like all props, parent components are able to pass state onto children components.

Stateful - array destructuring required for useState

Stateless components - performs a single action

*/


//Array Destructuring review

var fruits = ['apple', 'pear', 'plum'];

const fruits = ['apple', 'pear', 'plum'];
const [ fruit1, fruit2, fruit3 ] = fruits;
// declares three variables from initial array instead of one at a time.



// Stateful Component example

function App() {
  const [ greet, setGreet ] = React.useState("Hi");

  return (
    <div>
      <h1>A state value: {greet}</h1>
    </div>
  );
};

/*
React.useState has whatever you specify + an anon function (destructured and assigned)
Convention to follow:
if State variable name is 'Greet',
then Destructured state function is 'setGreet'.
*/


const [date, setDate] = React.useState(new Date());

