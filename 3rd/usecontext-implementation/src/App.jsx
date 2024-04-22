import "./App.css";
import Child1 from "./Child1";
import { createContext } from "react";

const myContext = createContext();
const myContext2 = createContext();

function App() {
  const data1 = "Hello from your parent";
  const data2 = "Hello bachho... :)";
  const data3 = { data1, data2 };

  return (
    <>
      {/* for multiple values */}
      <myContext.Provider value={data1}>
        <myContext2.Provider value={data2}>
          <h1>useContext Implementation</h1>
          <Child1 />
        </myContext2.Provider>
      </myContext.Provider>

      {/* <myContext.Provider value={data3} >
        <h1>useContext Implementation</h1>
        <Child1 />
      </myContext.Provider> */}
    </>
  );
}

export { myContext,myContext2 };
export default App;
