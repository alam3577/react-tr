import { useState } from "react";
import Data from "./component/Data";
function App() {
  const [state, setstate] = useState(false);
  return (
    <div className="App">
      <h1>Welcome to react js</h1>
      <button onClick={() => setstate(true)}>Click to get more data</button>
      {state && <Data />}
    </div>
  );
}

export default App;
