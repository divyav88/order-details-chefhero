import "./App.scss";
import Header from "../Header";
import Filter from "../Filter";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Filter />
      </div>
    </div>
  );
}

export default App;
