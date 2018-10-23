import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Link} from 'react-router-dom'



class Entry extends React.Component {

render(){
return (
			<div>
				<Link to="/students"><button >Add Student</button></Link>
				<Link to="/pairing"><button >Pairing</button></Link>
				<Link to="/history"><button >History</button></Link>
	    	</div>		
)
		
		
}
}

export default Entry;