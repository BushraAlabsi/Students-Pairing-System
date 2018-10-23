import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';



class Pairing extends React.Component {

	constructor(){
		super();
		this.state = {
			students:[],
			paired:[]
		};
	}

	componentDidMount() {
		this.getStudents();
	}

	getStudents(){
		$.ajax({
			method: 'GET',
			url: '/api/student',
			success: (students) => {
				this.setState({students:students})
			},
			error: (data) => {
			    console.error('Failed to get students', data);
			}
  		})
	}

	save(){
		console.log(this.state.paired);
		$.ajax({
		method: 'POST',
		url: '/api/history',
		data: {"table": this.state.paired},
		success: function (data) {
			alert("added successfully!")
			console.log("success",data)
		}
		
		})
	}
	pair(){
		//this.getStudents();
		var obj,c;
		var arr2 = []; 
		while(this.state.students.length>1) {
		obj= {};
		c = Math.floor(Math.random() * (this.state.students.length));
		obj.student1 = this.state.students[c].name;
		this.state.students.splice(c,1);
		c = Math.floor(Math.random() * (this.state.students.length));
		obj.student2 = this.state.students[c].name;
		this.state.students.splice(c,1);
		arr2.push(obj)
		}
		if(this.state.students.length) arr2.push({student1: student1[0].name , student2 :'solo'})
		this.setState({paired:arr2});
	}


	render(){
		return(
		<div>
		<button onClick= {() => {this.pair()}}>Pair</button>
		<button onClick= {() => {this.save()}}>Save</button>
		<table>
			<th>
				<td>Student1</td>
				<td>Student2</td>
			</th>
			{ this.state.paired.map( (pair) => {
												return(
														<tr>
															<td>{pair.student1}</td>
															<td>{pair.student2}</td>
														</tr>	
														
												)
											}
								    )  
			}
		</table>
		
		</div>
		)	
	}
}

export default Pairing;