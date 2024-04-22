import "./App.css";
import Child1 from "./Child1";
import { createContext } from "react";

const myContext = createContext();

function App() {
  const data1 = "Hello from your parent";
  const data2 = "Hello bachho... :)"
  const data3 ={data1, data2};

  return (
    <>
      <myContext.Provider value={data3} >
        <h1>useContext Implementation</h1>
        <Child1 />
      </myContext.Provider>
    </>
  );
}

export {myContext};
export default App;
