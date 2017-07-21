import React, {	Component } from 'react';

import Header from './components/Header.js';

//import './lib/hotcss.js';
//import './css/reset.css';
//import './css/header.css';


class App extends Component {
	render() {
		return(
			<div className="App">
        		<Header />	
      		</div>
		);
	}
}

export default App;