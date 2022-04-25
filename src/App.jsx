import "./style/App.css";
import Header from "./components/header";
import Ide from "./components/ide";
import Question from "./components/question";

function App() {
  return (
    <div className="App">
    	<Header />
    	<div className="mainWrapper">
			<Question />
			<Ide  />
		</div>
    </div>
  );
}

export default App;
