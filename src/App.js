import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers";
import Main from "./main";
//initialize your store variable here
const store = createStore(allReducers);

//dont edit the file below this comment
function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
