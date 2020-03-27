import React from 'react';
import {Link} from 'react-router-dom';


export const DiseaseInfo = (props)  => {
	return (

		<div className="disease-result-row" style={{color:'#2780d3',fontSize:"16px",marginTop:'20px'}}>
			<Link to={props.to}>
                <div>
                    {props.disease}
                </div>  
           </Link>
			
		</div>
	);
}


