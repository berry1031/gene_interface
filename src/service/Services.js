import React, { Component } from 'react';

import { 
    Row, 
    Col,
    Input,
    Upload, 
    message, 
    Button,
    Modal,
 } from 'antd';
 
import axios from 'axios';

import { UploadOutlined } from '@ant-design/icons';

import 'semantic-ui-css/semantic.min.css';
import './styles/servicesStyle.css';

const { Search } = Input;
const { TextArea } = Input;

const props = {
    name: 'file',
    action: 'http://52.83.65.62:4000/uploads',
    headers: {
      authorization: 'authorization-text',
    },
    accept: ".vcf",
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} 文件上传成功`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 文件上传失败`);
      }
    },
  };
  
export default class Services extends Component {
    constructor(props){
        super(props)

        this.state = {
            geneResult: "匹配到的基因 :",
            diseaseResult: "匹配到的疾病 :",
            symptomRelated:"根据症状匹配到的疾病 :",
            isLoadingOne: false,
            isLoadingTwo:false,
            isLoadingThree: false,
            error:true,

        }
    }

    handleGeneResult = geneResult =>{
        this.setState({geneResult: `匹配到的基因 : ${geneResult}`})
    }

    handleDiseaseResult = diseaseResult =>{
        this.setState({diseaseResult:`匹配到的疾病 : ${diseaseResult}`})
    }

    handleSymptomRelated = symptomRelated =>{
        this.setState({symptomRelated:`根据症状匹配到的疾病 : ${symptomRelated}`})
    }

   
    getGene = value => {
        if (value.length <=0 ) {
            this.warning();
        }
        else{
            this.setState({isLoadingOne: true }, ()=>{
                axios(`http://52.83.65.62:4000/disease2gene/${value}`)
                .then(res => {
                    const data = res.data;
                    console.log(data);
                    if(data.length===0){
                        this.info();
                    }else{
                        this.handleGeneResult(data)
                    }
                    this.setState({isLoadingOne: false });
                })
                .catch(error=>{console.error(error);
                    this.setState({isLoadingOne: false });});  
            });
            }  
    }

    getDisease = value => {
        if (value.length <=0 ) {
            this.warning();
        }else{
            this.setState({isLoadingTwo: true },()=> {
                axios(`http://52.83.65.62:4000/gene2disease/${value}`)
                .then(res => {
                    const data = res.data;
                    console.log(data);
                    if(data.length===0){
                        this.info();
                    }else{
                        this.handleDiseaseResult(data)
                    }
                    this.setState({isLoadingTwo: false });
                    console.log(this.state.isLoadingTwo);
                })
                .catch(error=> console.log(error));
                this.setState({isLoadingTwo: false });

            } )
         
            }  
    }

    getSymptomRelated= value => {
        if (value.length <=0 ) {
            this.warning();
        }else{
            this.setState({isLoadingThree:true},()=>{
                axios(`http://52.83.65.62:4000/symptom2disease/${value}`)
                .then(res => {
                    const data = res.data;
                    console.log(data);
                    if(data.length===0){
                        this.info();
                    }else{
                        this.handleSymptomRelated(data)
                    }
                    this.setState({isLoadingThree: false });

                })
                .catch(error=> console.log(error));
                this.setState({isLoadingThree: false });
            })
          
            }  
}



    download = () => {
        const url = 'http://52.83.65.62:4000/downloads/test.vcf'
        const link = document.createElement('a')
        link.href = url;
        document.body.appendChild(link)
        link.click();
        link.remove();
    };


   info = () => {
        Modal.info({
          title: '提示',
          content: (
            <div>
              <p>查询无结果, 请重新输入</p>
            </div>
          ),
          onOk() {},
        });
      }
      

     warning = ()  => {
        Modal.warning({
          title: '提示',
          content: '请输入后再查询',
        });
      }
      
    

    componentDidMount(){
    }

    render() {
        return (
            
        <div>
            <div className="bg-img">
            {/* <Spin spinning={this.state.isLoading}> */}
                <div className="service-container">
                    <div className="search-box">
                        <Row>
                            <Col span={10}>
                                <div className="search-bar">
                                    <Search
                                        placeholder="请输入疾病匹配基因"
                                        enterButton="开始查询" 
                                        loading={this.state.isLoadingOne}
                                        onSearch={value => this.getGene(value)}                       
                                    />
                                </div>
                            </Col>
                        </Row>
                        <div className="result-display">
                            <TextArea rows={3} value={this.state.geneResult}/>
                        </div>
                    </div>
                    <div className="search-box">
                        <Row>
                            <Col span={10}>
                                <div className="search-bar">
                                    <Search
                                        placeholder="请输入基因匹配疾病"
                                        enterButton="开始查询"
                                        loading={this.state.isLoadingTwo}
                                        onSearch={value => this.getDisease(value)}                       
                                    />
                                </div>
                            </Col>
                        </Row>
                        <div className="result-display">
                            <TextArea rows={3} value={this.state.diseaseResult}/>
                        </div>
                    </div>

                    <div className="search-box">
                        <Row>
                            <Col span={10}>
                                <div className="search-bar">
                                    <Search
                                        placeholder="请输入症状查询相关的疾病"
                                        enterButton="开始查询"
                                        loading={this.state.isLoadingThree}
                                        onSearch={value => this.getSymptomRelated(value)}                       
                                    />
                                </div>
                            </Col>
                        </Row>
                        <div className="result-display">
                            <TextArea rows={3} value={this.state.symptomRelated}/>
                        </div>
                    </div>
                    
                    <div className='upload-box'>
                    <Row>
                    <Col span={4}>
                        <Upload {...props}>
                            <Button>
                            <UploadOutlined /> 文件上传
                            </Button>
                        </Upload>
                        </Col>
                        <Col span={6}>
                        <div className='submit-button'>
                            <Button type="primary" onClick={this.download}>
                                下载结果
                            </Button>
                        </div>
                        </Col>

                    </Row>
                    </div>
                </div>

                {/* </Spin> */}

            </div>      
              </div>

        
    );}


}
