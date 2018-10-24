import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Student extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			name: '',
			level:0,
			editFlag: false
		};
	}
deleteStudent(id){
		$.ajax({
			method: 'DELETE',
			url: `/api/student/${id}`,
			success: (students) => {
				this.props.getStudents();
				console.log("success");
			},
			error: (data) => {
			    console.error('Failed to get students', data);
			}
  		})
	}
editStudent(id,name,level){
		if(!this.state.editFlag){
			this.setState({editFlag: true})

		}
		else {
			$.ajax({
		method: 'PUT',
		url: `/api/student/${id}`,
		data: {"name":name,"level": level},
		success:  (data) => {
			alert("added successfully!")
			console.log("success",data);
			this.setState({editFlag: false});
			this.props.getStudents();
		}
	})

		}

	
	}

render() {
	
		
		if(!this.state.editFlag){
			return (
<tr>
			<td>{this.props.student.name}</td>
			<td>{this.props.student.level}</td>

			<button onClick= {() => {this.deleteStudent(this.props.student._id)}}>Delete</button>
			<button onClick= {() => {this.editStudent(this.props.student._id, this.state.name,this.state.level)}}>Edit</button>
		</tr>
		)
		}else {
			return (
				<tr><td><input 
					type="text" 
					value={this.state.name} 
					onChange={ (e) => {this.setState({name:e.target.value}) } }
					placeholder="Edit student name"
				/></td>
				<td><input 
					      			type="text" 
					      			value={this.state.level} 
					      			onChange={ (e)=> {this.setState({level:e.target.value}) } }
					      			placeholder="Edit student level"
					      		/></td>

			<button onClick= {() => {this.deleteStudent(this.props.student._id)}}>Delete</button>
			<button onClick= {() => {this.editStudent(this.props.student._id, this.state.name,this.state.level)}}>Edit</button>
		</tr>
			)		
		}

	
}
}
export default Student;

