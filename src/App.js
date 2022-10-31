import { Route, Switch, Redirect } from "react-router-dom";
import { Products } from "./pages/Products";
import { Welcome } from "./pages/Welcome";

import { MainHeader } from "./components/MainHeader";

const App = () => {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to="/welcome"></Redirect>
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
        </Switch>
        <Route exact path="/products">
          <Products />
        </Route>
      </main>
    </div>
  );
};

export default App;
