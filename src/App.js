// https://www.youtube.com/watch?v=5LrDIWkK_Bc
// https://reactjs.org/docs/hooks-reference.html
// https://reactjs.org/docs/context.html

// context is like a global state for all the children of the provider

import React, { useState } from 'react';
import FunctionContextComponent from './FunctionContextComponent'
import ClassContextComponent from './ClassContextComponent'

export const ThemeContext = React.createContext()
  // console.log(ThemeContext);
  // console.log(ThemeContext.Consumer);
  // console.log(ThemeContext.Provider);

function App() {
  const [darkTheme, SetDarkTheme] = useState(true)

function toggleTheme() {
  SetDarkTheme(prevxDarkTheme => !prevxDarkTheme)
  console.log(darkTheme)
  console.log(!darkTheme)
}

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        {/* <ThemeContext.Provider value="false"> */}
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
