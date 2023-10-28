/* 
the different ways to embed expressions in event handlers in React:

    With an inline anonymous ES5 function 

    With an inline, anonymous ES6 function (an arrow function) 

    Using a separate function declaration 

    Using a separate function expression 
*/

// Handling events using inline anonymous ES5 functions
<button onClick={function() {console.log('first example')}}>
    An inline anonymous ES5 function event handler
</button>


//Handling events using inline anon ES6 functions (arrow functions)
<button onClick={() => console.log('second example')}>
    An inline anonymous ES6 function event handler
</button>

// Handling events using separate function declarations

function App() {
    function thirdExample() {
        console.log('third example');
    };
    return (
        <div className="thirdExample">
            <button onClick={thirdExample}>
                using a separate function declaration
            </button>
        </div>
    );
};
export default App;


//Handling events using separate function expressions

function App2() {
    const fourthExample = () => console.log('fourth example');

    return (
        <div className="fourthExample">
            <button onClick={fourthExample}>
                using a separate function expression
            </button>
        </div>
  );
};
export default App2;