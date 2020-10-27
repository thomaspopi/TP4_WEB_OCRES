import React from 'react';
import Navigation from '../components/Navigation';

const Claude = () =>{
  return(
    <div>

    	<Navigation />
    	<div className="infoProfil">
	    	<div className="id">
	    		<div className= "idContent">
	    			<img src="./media/claude.jpg" alt="profil-pic"/>
	    			<h3>Informations : </h3>
		            <form>
		                <table>
		                    <tr>
		                        <td className ="title">Prénom : </td>
		                        <td> Claude </td>
		                    </tr>

		                    <tr>
		                        <td className ="title">Nom: </td>
		                        <td> Pilichowski </td>
		                    </tr>
		                    
		                    <tr>
		                        <td className ="title" > Date de naissance: </td>
		                        <td> 12 mars 1977 </td>
		                    </tr>
		                    
		                </table>
		            </form>
	    		</div>
	    	</div>

	    </div>
    </div>

    );
};

export default Claude; 