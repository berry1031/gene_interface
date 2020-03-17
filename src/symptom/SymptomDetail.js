import React from 'react';
import {
 
  Typography,
  Descriptions,
} 

from 'antd';

import {Link} from 'react-router-dom';

import { DoubleLeftOutlined } from '@ant-design/icons';


import './styles/symptomDetailStyle.css';

const { Text } = Typography;



  
class SymptomDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          };
        }
    
    render(){
        return (
            <div className='diagnose-main-part'>
                <div className='symptom-detail'>
                <Link to='/symptom'>
                <DoubleLeftOutlined />
                </Link>
                <br/>

                <Descriptions
                    title="ORPHA:88661"
                    bordered
                    column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                >
                    <Descriptions.Item label="Classification">Disorder</Descriptions.Item>
                    <Descriptions.Item label="Prevalence">Unknow</Descriptions.Item>
                    <Descriptions.Item label="Mesh">D000567</Descriptions.Item>
                    <Descriptions.Item label="GARD">5791</Descriptions.Item>
                    <Descriptions.Item label="MedDRA">-</Descriptions.Item>
                    <Descriptions.Item label="UMLS">C0002452</Descriptions.Item>
                    <Descriptions.Item label="Inheritance">
                    Autosomal
                    <br />
                    recessive or Autosomal
                    <br />
                    dominant or X-linked dominant
                    <br />
                    dominant or X-linked dominant
                    <br />
                    dominant or X-linked dominant
                    <br />
                    dominant or X-linked dominant
                    </Descriptions.Item>
                </Descriptions>
            </div>
            </div>

          );

        
    }
}

export default SymptomDetail;



