import React from 'react';
import {
  Row, 
  Col,
  List,
  TreeSelect,
  Typography,
  Button, 
  Tooltip
} 
from 'antd';

import {Link} from 'react-router-dom';

import { SearchOutlined } from '@ant-design/icons';

import {
  Nervous_System,
  Eye,
  Ear,
  Digestive_System,
  Cardiovascular,
  Metabolism_Laboratory_abnormality,
  Blood_and_bloodforming_tissues,
  Growth,
  Musculature,
  Endocrine,
  Prenatal_and_Birth,
  Head_and_neck,
  Inheritance,
  Skin_Hair_and_Nails,
  Connective_tissue,
  Neoplasm,
  Genitourinary_system,
  Constitutional_Symptom,
  Immunology,
  Respiratory_System,
  Skeletal_system,
  Limbs,
  Breast,
  Voice,
  Cellular_phenotype,
  Thoracic_cavity,
} from '../symptom/components/OptionData';


import './styles/symptomStyle.css';


import { Select } from 'antd';


const { Option } = Select;
const { Text } = Typography;



  const data = [
    '疾病A.................',
    '疾病B.................',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
  ];
  
  
class Symptom extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
          value:'',
          selectedItems: [],
          OPTIONS:[]
        };

    }
  
  
   
  
    onClassifyChange  = (value) => {
      console.log(`selected ${value}`);
      if(value==='Nervous_System'){
        this.setState({OPTIONS:Nervous_System()})
      } else if(value==='Eye'){
        this.setState({OPTIONS:Eye()})
      } else if(value==='Ear'){
        this.setState({OPTIONS:Ear()})
      } else if (value==='Digestive_System'){
        this.setState({OPTIONS: Digestive_System()})
      } else if (value==='Cardiovascular'){
        this.setState({OPTIONS: Cardiovascular()})
      } else if (value==='Metabolism_Laboratory_abnormality'){
        this.setState({OPTIONS: Metabolism_Laboratory_abnormality()})
      } else if (value==='Blood_and_bloodforming_tissues'){
        this.setState({OPTIONS: Blood_and_bloodforming_tissues()})
      } else if (value==='Growth'){
        this.setState({OPTIONS: Growth()})
      } else if (value==='Musculature'){
        this.setState({OPTIONS: Musculature()})
      } else if (value==='Endocrine'){
        this.setState({OPTIONS: Endocrine()})
      } else if (value==='Prenatal_and_Birth'){
        this.setState({OPTIONS: Prenatal_and_Birth()})
      } else if (value==='Head_and_neck'){
        this.setState({OPTIONS: Head_and_neck()})
      } else if (value==='Inheritance'){
        this.setState({OPTIONS: Inheritance()})
      } else if (value==='Skin_Hair_and_Nails'){
        this.setState({OPTIONS: Skin_Hair_and_Nails()})
      } else if (value==='Connective_tissue'){
        this.setState({OPTIONS: Connective_tissue()})
      } else if (value==='Neoplasm'){
        this.setState({OPTIONS: Neoplasm()})
      } else if (value==='Genitourinary_system'){
        this.setState({OPTIONS: Genitourinary_system()})
      } else if (value==='Constitutional_Symptom'){
        this.setState({OPTIONS: Constitutional_Symptom()})
      } else if (value==='Immunology'){
        this.setState({OPTIONS: Immunology()})
      } else if (value==='Respiratory_System'){
        this.setState({OPTIONS: Respiratory_System()})
      } else if (value==='Skeletal_system'){
        this.setState({OPTIONS: Skeletal_system()})
      } else if (value==='Limbs'){
        this.setState({OPTIONS: Limbs()})
      } else if (value==='Breast'){
        this.setState({OPTIONS: Breast()})
      } else if (value==='Voice'){
        this.setState({OPTIONS: Voice()})
      } else if (value==='Cellular_phenotype'){
        this.setState({OPTIONS: Cellular_phenotype()})
      } else if (value==='Thoracic_cavity'){
        this.setState({OPTIONS: Thoracic_cavity()})
      }         
    }

  
    
    handleSymptomChange = selectedItems => {
      this.setState({ selectedItems });
      console.log(selectedItems);
    };
   
      
    render(){
      const { selectedItems } = this.state;
      const filteredOptions = this.state.OPTIONS.filter(o => !selectedItems.includes(o));

        return (
            <div className='diagnose-main-part'>
                <div className='select-symptom'>
                  <div className="symotom-hint">
                    <Text strong>请选择相关症状</Text>
                  </div>
                  <Row gutter={24}>
                <Col span={20}>
                  <div className='select-box'>
                      <Select
                        showSearch
                        style={{ width: 280 }}
                        placeholder="请选择症状分类"
                        optionFilterProp="children"
                        onChange={this.onClassifyChange}
                        filterOption={(input, option) =>
                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="Nervous_System">Nervous System</Option>
                        <Option value="Eye">Eye</Option>
                        <Option value="Ear">Ear</Option>
                        <Option value="Digestive_System">Digestive System</Option>
                        <Option value="Cardiovascular">Cardiovascular</Option>
                        <Option value="Metabolism_Laboratory_abnormality">Metabolism/Laboratory abnormality</Option>
                        <Option value="Blood_and_bloodforming_tissues">Blood and blood-forming tissues</Option>
                        <Option value="Growth">Growth</Option>
                        <Option value="Musculature">Musculature</Option>
                        <Option value="Endocrine">Endocrine</Option>
                        <Option value="Prenatal_and_Birth">Prenatal and Birth</Option>
                        <Option value="Head_and_neck">Head and neck</Option>
                        <Option value="Inheritance">Inheritance</Option>
                        <Option value="Skin_Hair_and_Nails">Skin, Hair, and Nails</Option>
                        <Option value="Connective tissue">Connective tissue</Option>
                        <Option value="Neoplasm">Neoplasm</Option>
                        <Option value="Genitourinary_system">Genitourinary system</Option>
                        <Option value="Constitutional_Symptom">Constitutional Symptom</Option>
                        <Option value="Immunology">Immunology</Option>
                        <Option value="Respiratory_System">Respiratory System</Option>
                        <Option value="Skeletal_system">Skeletal system</Option>
                        <Option value="Limbs">Limbs</Option>
                        <Option value="Breast">Breast</Option>
                        <Option value="Voice">Voice</Option>
                        <Option value="Cellular_phenotype">Cellular phenotype</Option>
                        <Option value="Thoracic_cavity">Thoracic cavity</Option>
                      </Select>             
                      </div>
                    {/* </Col>
                    <Col span={16}> */}
                      <Select
                          mode="multiple"
                          placeholder="请选择您的症状"
                          value={selectedItems}
                          onChange={this.handleSymptomChange}
                          style={{ width: '100%' }}
                      >
                          {filteredOptions.map(item => (
                          <Select.Option key={item} value={item}>
                              {item}
                          </Select.Option>
                          ))}
                      </Select>

                    </Col>
                    <Col span={2}>
                    <div className='search-button'>
                    <Tooltip title="search">
                      <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    </div>
                    </Col>
                    </Row>

                  </div>
                    <div className='symptom-to-disease-result'>
                      <h3 style={{ marginBottom: 16 }}>查询结果</h3>
                      <Link to='/symptom/detail'>

                        <List
                          header={<div>匹配到的相关疾病</div>}
                          footer={<div>Footer</div>}
                          bordered
                          dataSource={data}
                          renderItem={item => (
                            <List.Item>
                              <Typography.Text mark>疾病</Typography.Text> {item}
                            </List.Item>
                          )}
                      />
                      </Link>
                    </div>
            </div>

          );

        
    }
}

export default Symptom;



