import "./App.css";
import { Counter } from "./Component/basic_qst/Counter";
import Message from "./Component/basic_qst/Message";
import UserFetch from "./Component/basic_qst/UserFetch";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>

      <Message text="Hello Reetu"/>

      <Counter />

      <UserFetch />
    </div>
  );
}

export default App;
