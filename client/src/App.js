import './App.css';

import { BrowserRouter, Link, Route, Switch, useLocation, withRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import NavOverlay from "./components/nav/NavOverlay";
import MainScreen from "./components/screens/MainScreen/MainScreen";
import FloorPlans from "./components/screens/FloorPlans/FloorPlans";
import Location from "./components/screens/Location/Location";

const client = new ApolloClient({
	uri:"http://localhost:4000/graphql",
	cache: new InMemoryCache(),
});

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="slide" timeout={1000}>
      <Switch location={location}>
        <Route path="/floorplans" component={FloorPlans} />
        <Route path="/location" component={Location} />
        <Route path="/" component={MainScreen} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

//const location = useLocation();

function App() {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<div id="main">
					<div className="mainScreenWrapper">
						<AnimatedSwitch />
						<NavOverlay />
					</div>
				</div>
			</BrowserRouter>
		</ApolloProvider>
	);
}

export default App;
