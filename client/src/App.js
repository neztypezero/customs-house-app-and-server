import './App.css';

import { BrowserRouter, Link, Route, Switch, withRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import MainScreen from "./components/MainScreen";
import FloorPlanCarosel from "./components/FloorPlanCarosel";

const client = new ApolloClient({
	uri:"http://localhost:4000/graphql",
	cache: new InMemoryCache(),
});

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="slide" timeout={10000}>
      <Switch location={location}>
        <Route path="/floorplans" component={FloorPlanCarosel} />
        <Route path="/" component={MainScreen} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

function App() {
	return (
		<ApolloProvider client={client}>
			<div id="main">
				<BrowserRouter>
					<AnimatedSwitch />
				</BrowserRouter>
			</div>
		</ApolloProvider>
	);
}

export default App;
