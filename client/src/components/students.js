import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';



class Student extends React.Component {

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
	editStudent(){

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
	deleteStudent(id){
		$.ajax({
			method: 'DELETE',
			url: `/api/student/${id}`,
			success: (students) => {
				this.getStudents();
				console.log("success");
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
														<tr>
															<td>{student.name}</td>
															<td>{student.level}</td>
															<button onClick= {() => {this.deleteStudent(student._id)}}>Delete</button>
															<button onClick= {() => {this.editStudent(student._id)}}>Edit</button>
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

export default Student;