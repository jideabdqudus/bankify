import { Provider } from "react-redux";
import { Route, BrowserRouter, Switch } from "react-router-dom";

//Imported Files
import store from "./store";
import { Dashboard } from "./pages";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={Login} /> */}
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
