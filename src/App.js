import "./App.css";
import Card from "./Component/basic_qst/Card";
import ContnetRender from "./Component/basic_qst/ContnetRender";
import { Counter } from "./Component/basic_qst/Counter";
import DiffContent from "./Component/basic_qst/DiffContent";
import List from "./Component/basic_qst/List";
import Message from "./Component/basic_qst/Message";
import UserFetch from "./Component/basic_qst/UserFetch";

function App() {
  let users = ["sonu", "monu", "geeta"];
  return (
    <div className="App">
      <Message name="Reetu" />
      <Counter />
      <List users={users} />

      <ContnetRender isLogin={false} />

      <Card title="Shpoing  Card 1"
      description="What do you set"
      image="https://thumbs.dreamstime.com/b/lonely-elephant-against-sunset-beautiful-sun-clouds-savannah-serengeti-national-park-africa-tanzania-artistic-imag-image-106950644.jpg"
      />
      
      <DiffContent userType="User"/>
    </div>
  );
}

export default App;
