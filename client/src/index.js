import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Entry from './components/entry.js';
import Students from './components/students.js';
import Pairing from './components/pairing.js';
import History from './components/history.js';
// const App = (props) => <Starter num={ props.number } />;
class App extends React.Component {


delete(){
	//var number = this.state.number;

	$.ajax({
		method: 'PUT',
		url: '/api/student/5bcf50a3fd7aee2f37b0174a',
		data: {"name":"xyz","level": 3},
		success:  (data) => {
			alert("added successfully!")
			console.log("success",data)
		}
	})
	
}

pairingWrap(){
	return (
			<History />
		)
}

render(){
return (

    			<Router>
		      		<div>
						<Route exact path='/' component= {Entry}/>
						<Route exact path='/history' render={() => this.pairingWrap()}/>
			    		<Route exact path='/pairing'  component={Pairing}/>
			    		<Route exact path='/students'  component={Students}/>
		     		</div>
		      	</Router>
)
		
		
}
}

ReactDOM.render(<App />, document.getElementById('app'));