import React from "react";
import { Redirect, Route,Switch } from 'react-router-dom';

import Services from '../service/Services';
import Database from '../database/Database';
import About from '../about/About';



const Routes =()=>{
    return(
    <React.Fragment>
        <Switch>
        <Redirect exact from ='/' to='/service' />
        <Route exact path='/service' component = {Services}/>
        <Route exact path='/database' component = {Database}/>  
        <Route exact path='/about' component = {About}/>

        </Switch>

    </React.Fragment>
    )
}

export default Routes;