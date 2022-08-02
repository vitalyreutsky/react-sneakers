import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Search from "./components/Search";
import Card from "./components/Card";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="wrapper clear">
          <Drawer />
          <Header />
          <div className="content">
            <div className="contentInfo">
              <h1 className="contentTitle">Все кроссовки</h1>
              <Search />
            </div>

            <div className="contentCards">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
