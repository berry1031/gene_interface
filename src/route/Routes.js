import React from "react";
import { Redirect, Route,Switch } from 'react-router-dom';

import Services from '../service/Services';
import Symptom from '../symptom/Symptom';
import DiseaseDetail from '../symptom/DiseaseDetail';
import File from '../file/File';
import Gene from '../gene/Gene';
import Home from '../home/Home';
import Login from '../enter/Login';
import RegistrationForm from '../enter/RegistrationForm';



const Routes =()=>{
    return(
    <React.Fragment>
        <Switch>
        <Redirect exact from ='/' to='/symptom' />
        <Route exact path='/login' component = {Login} />
        <Route exact path='/register' component = {RegistrationForm} />
        <Route exact path='/index' component = {Home} />
        <Route exact path='/service' component = {Services}/>
        <Route exact path='/symptom' component = {Symptom}/>  
        <Route exact path='/disease' component = {DiseaseDetail}/>  
        <Route exact path='/disease/:id' component = {DiseaseDetail}/>  
        <Route exact path='/gene' component = {Gene}/>
        <Route exact path='/file' component = {File}/>

        </Switch>

    </React.Fragment>
    )
}

export default Routes;