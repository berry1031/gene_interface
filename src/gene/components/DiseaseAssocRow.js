import React from 'react';


import '../styles/termAssocRowStyle.css';

export const DiseaseAssocRow = props  => {
	let db_label = " DB :     "
	let diseaseName_label = " Disease Name :     "
	let diseaseId_label = " DiseaseId :     "
	let dbId_label = " DB ID :     "

	return (
		<div className='gene-term-association' style={{color:'rgb(63, 62, 62)',fontSize:'16px',lineHeight:'2'}}>
			<div >
				<span style={{color:'rgb(124, 171, 221)',fontSize:"17px", fontWeight:"bold"}}>
					{db_label}
				</span>
				<span>
					{props.db}
				</span>
				</div>
				<div>

				<span style={{color:'rgb(124, 171, 221)',fontSize:"17px", fontWeight:"bold"}}>
					{diseaseName_label}
				</span>
				<span>
					{props.diseaseName}
				</span>
			</div>
			<div >
				<span style={{color:'rgb(124, 171, 221)',fontSize:"17px", fontWeight:"bold"}}>
					{diseaseId_label}
				</span>
				<span >
					{props.diseaseId}
				</span>
			</div>
			<div >
				<span style={{color:'rgb(124, 171, 221)',fontSize:"17px", fontWeight:"bold"}}>
					{dbId_label}
				</span>
				<span >
					{props.dbId}
				</span>
			</div>
	
		</div>
	);
}



