import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Student from './student.js';



class Students extends React.Component {

	constructor(){
		super();
		this.state = {
			students:[],
			name: '',
			level:0
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
	
	addStudent(){
		$.ajax({
			method: 'POST',
			url: '/api/student',
			data: {"name": this.state.name , "level": this.state.level},
			success: (students) => {
				this.getStudents();
			},
			error: (data) => {
			    console.error('Failed to get students', data);
			}
  		})
	}
	

	render(){
	return (
				<div>
					<input 
					  	type="text" 
					    value={this.state.name} 
					    onChange={ (e) => {this.setState({name:e.target.value}) } }
					    placeholder="student full name"
					/>
					<input 
					  	type="text" 
					    value={this.state.level} 
					    onChange={ (e) => {this.setState({level:e.target.value}) } }
					    placeholder="Level (1-5)"
					/>					
					<button onClick= {() => {this.addStudent()}}>Add</button>
					<table>
					<th>
						<td>Student Name</td>
						<td>Student Level</td>
					</th>
					{ this.state.students.map( (student) => {
												return(
														<Student student={student}
														 getStudents = {()=> {this.getStudents()}} />	
														
												)
											}
								)
					}
					
		    	</table>
		    	</div>		
	)
			
			
	}
}

export default Students;