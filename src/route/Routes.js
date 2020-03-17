import React from "react";
import { Redirect, Route,Switch } from 'react-router-dom';

import Services from '../service/Services';
import Symptom from '../symptom/Symptom';
import SymptomDetail from '../symptom/SymptomDetail';
import About from '../about/About';
import Home from '../home/Home';
import Login from '../enter/Login';
import RegistrationForm from '../enter/RegistrationForm';



const Routes =()=>{
    return(
    <React.Fragment>
        <Switch>
        <Redirect exact from ='/' to='/service' />
        <Route exact path='/login' component = {Login} />
        <Route exact path='/register' component = {RegistrationForm} />
        <Route exact path='/index' component = {Home} />
        <Route exact path='/service' component = {Services}/>
        <Route exact path='/symptom' component = {Symptom}/>  
        <Route exact path='/symptom/detail' component = {SymptomDetail}/>  
        <Route exact path='/about' component = {About}/>

        </Switch>

    </React.Fragment>
    )
}

export default Routes;