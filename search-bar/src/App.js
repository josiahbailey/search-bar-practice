import React from 'react';
import Container from './components/container'
import Home from './components/home'
import { Route, NavLink } from 'react-router-dom'

function App() {
  return (
	<div className="App">
	<NavLink to='/home' >Home</NavLink>
	<NavLink to='/chars' >Characters</NavLink>
		<Route exact path='/home'>
			<Home/>
		</Route>
		<Route exact path='/chars'>
			<Container/>
		</Route>
    </div>
  );
}

export default App;
