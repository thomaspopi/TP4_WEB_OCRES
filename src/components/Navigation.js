 import React from 'react';
 import { NavLink } from 'react-router-dom';
 import '/Users/thomaspopielski/Desktop/tp4/src/styles/navigation.css';

const Navigation = () =>{
  return(

  	<>

  		 <div className="TopBar">
	    	<div className="navigation">
	    		<ul>
	    			<li>
		    			<NavLink exact to="/jeanne" activeClassName="navActive">
		    				<i className="fas fa-jeanne"></i>
		    				<span> Jeanne </span>

		    			</NavLink>
		    		</li>
		    		<li>
		    			<NavLink exact to="/claude" activeClassName="navActive">
		    				<i className="fas fa-claude"></i>
		    				<span> Claude </span>

		    			</NavLink>
		    		</li>
		    		<li>
		    			<NavLink exact to="/martine" activeClassName="navActive">
		    				<i className="fas fa-martine"></i>
		    				<span> Martine </span>
 
		    			</NavLink>
		    		</li>
	    		</ul>
	    	</div>


	    </div>

    </>
    );
};

export default Navigation; 