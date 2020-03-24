import React from 'react';
import {Link} from 'react-router-dom';


export const DiseaseInfo = (props)  => {
	return (
		<div className="disease-result-row">
			<Link to={props.to}>
                <div>
                    {props.disease}
                </div>  
           </Link>
			
		</div>
	);
}


