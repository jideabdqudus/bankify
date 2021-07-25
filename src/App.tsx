import { Provider } from "react-redux";
import { Route, BrowserRouter, Switch } from "react-router-dom";

//Imported Files
import store from "./store";
import { Login } from "./pages";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
