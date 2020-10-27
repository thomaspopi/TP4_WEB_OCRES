import React from 'react';
import Navigation from '../components/Navigation';

const Martine = () =>{
  return(
    <div>

    	<Navigation />
    	<div className="infoProfil">
	    	<div className="id">
	    		<div className= "idContent">
	    			<img src="./media/martine.jpg" alt="profil-pic"/>
	    			<h3>Informations : </h3>
		            <form>
		                <table>
		                    <tr>
		                        <td className ="title">Prénom : </td>
		                        <td> Martine </td>
		                    </tr>

		                    <tr>
		                        <td className ="title">Nom: </td>
		                        <td> Loiseau </td>
		                    </tr>
		                    
		                    <tr>
		                        <td className ="title" > Date de naissance: </td>
		                        <td> 06 novembre 1986 </td>
		                    </tr>
		                    
		                </table>
		            </form>
	    		</div>
	    	</div>

	    </div>
    </div>

    );
};

export default Martine; 