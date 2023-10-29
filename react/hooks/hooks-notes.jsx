/*
Let’s say you have a component with an input text field. The user can type into this text field. The component needs to keep track of what the user types within this text field. You can add state and use the useState hook, to hold the string.

As the user keeps typing, the local state that holds the string needs to get updated with the latest text that has been typed.
*/

import { useState } from 'react';

export default function InputComponent() { 
  const [inputText, setText] = useState('hello'); 

  function handleChange(e) { 
    setText(e.target.value); 
  } 

  return ( 
    <> 
      <input value={inputText} onChange={handleChange} /> 
      <p>You typed: {inputText}</p> 
      <button onClick={() => setText('hello')}> 
        Reset 
      </button> 
    </> 
  ); 
} 


// The state variable inputText and the setText method are used to set the current text that is typed. The useState hook is initialized at the beginning of the component.

/*
Hooks also come with a set of rules, that you need to follow while using them. This applies to all React hooks, including the useState hook that you just learned.

You can only call hooks at the top level of your component or your own hooks. 

You cannot call hooks inside loops or conditions. 

You can only call hooks from React functions, and not regular JavaScript functions. 
*/


export default function RegisterForm() { 
  const [form, setForm] = useState({ 
    firstName: 'Luke', 
    lastName: 'Jones', 
    email: 'lukeJones@sculpture.com', 
  }); 

  return ( 
    <> 
      <label> 
        First name: 
        <input 
          value={form.firstName} 
          onChange={e => { 
            setForm({ 
              ...form, 
              firstName: e.target.value 
            }); 
          }} 
        /> 
      </label> 
      <label> 
        Last name: 
        <input 
          value={form.lastName} 
          onChange={e => { 
            setForm({ 
              ...form, 
              lastName: e.target.value 
            }); 
          }} 
        /> 
      </label> 
      <label> 
        Email: 
        <input 
          value={form.email} 
          onChange={e => { 
            setForm({ 
              ...form, 
              email: e.target.value 
            }); 
          }} 
        /> 
      </label> 
      <p> 
        {form.firstName}{' '} 
        {form.lastName}{' '} 
        ({form.email})
      </p> 
    </> 
  ); 
} 


/*
In addition to the useState hook, there are other hooks that come in handy such as useContext, useMemo, useRef, etc. When you need to share logic and reuse the same logic across several components, you can extract the logic into a custom hook. Custom hooks offer flexibility and can be used for a wide range of use-cases such as form handling, animation, timers, and many more. 

*/

// The useRef hook
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

/*
We use the useRef hook to access a child element directly.

When you invoke the useRef hook, it will return a ref object. The ref object has a property named current.

Using the ref attribute on the input element, I can then access the current value and invoke the focus() method on it, thereby focusing the input field.

There are situations where accessing the DOM directly is needed, and this is where the useRef hook comes into play.

*/