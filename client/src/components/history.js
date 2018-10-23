import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';



class History extends React.Component {

	constructor(){
		super();
		this.state = {
			history:[]
		};
	}

	componentDidMount() {
		this.getHistory();
	}

	getHistory(){
		$.ajax({
			method: 'GET',
			url: '/api/history',
			success: (history) => {
				this.setState({history:history})
			},
			error: (data) => {
			    console.error('Failed to get students', data);
			}
  		})
	}
	
	render(){
		return (
		<div>
	    	<ul>
	    		<li>
	    		{ this.state.history.map( (table) => {
												return(
										    			<table>
										    				<th>
										    					<td>Student1</td>
										    					<td>Student2</td>
										    				</th>
										    				{ table.table.map( (entry) => {
										    					return (<tr>
										    					<td>{entry.student1}</td>
										    					<td>{entry.student2}</td>>
										    				</tr>
										    				)} )}
										    				
										    			</table>
										    			)
											}
											)}
	    		</li>
	    	</ul>
	    </div>
	    )
	}
}

export default History;