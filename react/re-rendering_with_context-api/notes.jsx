

// App(ContextProvider) > A > B > C



const App = () => {
  return (
    <AppContext.Provider>
           <ComponentA />
        {' '}
    </AppContext.Provider>
  )
}

const ComponentA = () => <ComponentB />
const ComponentB = () => <ComponentC />
const ComponentC = () => null
