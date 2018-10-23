import React from 'react';
import ReactDOM from 'react-dom';
//import Starter from './components/starter.jsx';
import $ from 'jquery';


// const App = (props) => <Starter num={ props.number } />;
class App extends React.Component {

insert(){
	//var number = this.state.number;

	$.ajax({
		method: 'POST',
		url: '/api/student/',
		data: {"name":"xyz","level": 4},
		success: function (data) {
			alert("added successfully!")
			console.log("success",data)
		}
	})
	
}


put(){
	//var number = this.state.number;

	$.ajax({
		method: 'POST',
		url: '/api/history',
		data: {"table":[{student1:'hanan', student2:'bushra'},{student1:'Alaa', student2:'besslan'}]},
		success: function (data) {
			alert("added successfully!")
			console.log("success",data)
		}
	})
	
}

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
render(){
return (
	<div>
<button onClick = {this.insert.bind(this)}>ADD student!</button>
<button onClick = {this.put.bind(this)}>add history! </button>
<button onClick = {this.delete.bind(this)}>DELETE! </button>

</div>
)
		
		
}
}

ReactDOM.render(<App />, document.getElementById('app'));