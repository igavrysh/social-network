import "./App.css"
import React, { Component } from "react"
import Navbar from "./components/Navbar/Navbar"
import { 
  BrowserRouter, 
  Redirect, 
  Route, 
  Switch, 
  withRouter 
} from "react-router-dom";
import { UsersPage } from "./components/Users/UsersContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import LoginPage from "./components/Login/Login"
import { connect } from "react-redux"
import { initializeApp } from "./redux/app-reducer"
import Preloader from "./components/common/Preloader/Preloader"
import { Provider } from "react-redux"
import store, { AppStateType } from "./redux/redux-store"
import { withSuspense } from "./hoc/withSuspense"
import { compose } from "redux"

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
  initializeApp: () => void
}

const SuspendedDialogs = withSuspense(DialogsContainer)

const SuspendedProfile = withSuspense(ProfileContainer)

class App extends Component<MapPropsType & DispatchPropsType> {
  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    alert('Some error occured');
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        {/* <Profile /> */}
        <div className="app-wrapper-content">
          <Switch>
            <Route exact path="/" render={() => <Redirect to={"/profile"} />} />

            <Route path="/dialogs" render={() => <SuspendedDialogs />} />

            <Route
              path="/profile/:userId?"
              render={() => <SuspendedProfile />}
            />

            <Route
              path="/users"
              render={() => {
                return <UsersPage pageTitle={'SAMURAI'} />;
              }}
            />

            <Route
              path="/login"
              render={() => {
                return <LoginPage />;
              }}
            />
            <Route path="*" render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    initialized: state.app.initialized,
  };
};

let AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default SamuraiJSApp;
/*
export default compose(
  connect(null, {getAuthUserData})
)(App);
*/
