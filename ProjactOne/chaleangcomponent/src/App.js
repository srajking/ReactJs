import "./App.css";
import "./css/Main.css";
import Mainc from "./Comp/hed";
import Conten from "./Comp/content";
import Ricont from "./Comp/ricont";

function App() {
  return (
    <div className="App">
      <div>
        <Mainc />
      </div>
      <div className="mainonecon">
        <div className={"mainonr"}>
          <Conten />
          <Conten />
          <Conten />
          <Conten />
          <Conten />
        </div>
        <div>
          <Ricont />
        </div>
      </div>
    </div>
  );
}

export default App;
