import React from 'react';


import '../styles/termAssocRowStyle.css';

export const TermAssocRow = props  => {
	let name_label = " Name :     "
	let ontologyId_label = " OntologyId :     "
	let definition_label = " Definition :     "

	return (
		<div className='gene-term-association' style={{color:'rgb(63, 62, 62)',fontSize:'16px',lineHeight:'2'}}>
			<div >
				<span style={{color:'rgb(124, 171, 221)',fontSize:"17px", fontWeight:"bold"}}>
					{name_label}
				</span>
				<span>
					{props.name}
				</span>
				</div>
				<div>

				<span style={{color:'rgb(124, 171, 221)',fontSize:"17px", fontWeight:"bold"}}>
					{ontologyId_label}
				</span>
				<span>
					{props.ontologyId}
				</span>
			</div>
			<div >
				<span style={{color:'rgb(124, 171, 221)',fontSize:"17px", fontWeight:"bold"}}>
					{definition_label}
				</span>
				<span >
					{props.definition}
				</span>
			</div>
	
		</div>
	);
}



