import React from 'react';
import Navigation from '../components/Navigation';
 import '/Users/thomaspopielski/Desktop/tp4/src/styles/infoProfil.css';

const Jeanne = () =>{
  return(
    <div>

    	<Navigation />

    	<div className="infoProfil">
	    	<div className="id">
	    		<div className= "idContent">
	    			<img src="./media/jeanne.jpg" alt="profil-pic"/>
	    			<h3>Informations : </h3>
		            <form>
		                <table>
		                    <tr>
		                        <td className ="title">Prénom : </td>
		                        <td> Jeanne </td>
		                    </tr>

		                    <tr>
		                        <td className ="title">Nom: </td>
		                        <td> Dupont </td>
		                    </tr>
		                    
		                    <tr>
		                        <td className ="title" > Date de naissance: </td>
		                        <td> 20 juin 1989 </td>
		                    </tr>

		                    <tr>
					
								<td className="PageStyle"> Changer de Style</td>
							</tr>
		                    
		                </table>
		            </form>
	    		</div>
	    	</div>
	    </div>


    </div>

    );
};

export default Jeanne; 