
import "./App.css";
import { getData } from "./components/service/service";

function App() {
  const data = () => {
    getData()
      .then(employees => console.log(employees))
      .catch(err => console.log(err));
  };
  return (
    <div className="App">
      <button onClick={data}>send</button>
    </div>
  );
}
export default App;
