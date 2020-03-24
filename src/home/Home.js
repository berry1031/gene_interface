import React from 'react';
import { Carousel } from 'antd';


import './styles/homeStyle.css';


class Home extends React.Component{
    onChange(a, b, c) {
        console.log(a, b, c);
      }
      
      render(){
            return (
            <div className="home-container">
                <Carousel afterChange={this.onChange}>
            <div>
            <h3>Gene and Disease</h3>
            </div>
            <div>
            <h3>Upload File to Asnalysis </h3>
            </div>
            <div>
            <h3>Symptom to Disease</h3>
            </div>
        
        </Carousel>

            </div>
            )
            
      }

}

export default Home;