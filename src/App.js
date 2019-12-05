import React, { Component } from 'react';
import CatComponent from './CatComponent.js';
import  EinsteinQuoteComponent  from './EinsteinQuoteComponent';


class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
	              	<CatComponent />
	              	<MouseComponent />	
		           	<EinsteinQuoteComponent />
			           
			</div>
		);
	}
}

export default App;
