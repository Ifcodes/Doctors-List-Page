import { useState } from "react";
import Homepage from "./Page/Homepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
