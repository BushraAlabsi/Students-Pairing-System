import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Entry from './components/entry.js';
import Students from './components/students.js';
import Pairing from './components/pairing.js';
import History from './components/history.js';

class App extends React.Component {


render(){
return (

    			<Router>
		      		<div>
						<Route exact path='/' component= {Entry}/>
						<Route exact path='/history' component={History}/>
			    		<Route exact path='/pairing'  component={Pairing}/>
			    		<Route exact path='/students'  component={Students}/>
		     		</div>
		      	</Router>
)
		
		
}
}

ReactDOM.render(<App />, document.getElementById('app'));