import React from "react";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Write from "../pages/Write";
import Edit from "../pages/Edit";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as userActions } from "../redux/modules/user";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(postActions.setpostDB());
    // dispatch(userActions.asd());
  }, []);

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/" exact component={Home} />
        <Route path="/detail" exact component={Detail} />
        <Route path="/detail/:postId" exact component={Detail} />
        <Route path="/write" exact component={Write} />
        <Route path="/detail/write/:postId" exact component={Edit} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
