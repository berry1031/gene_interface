import React, { Component } from 'react';

import './styles/servicesStyle.css';

import { Input, Layout} from 'antd';
import axios from 'axios';
import { Upload, message, Button,Row} from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const { Search } = Input;

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  
export default class Services extends Component {
    constructor(props){
        super(props)

        this.state = {
            result: "请输入后查看结果"
        }
    }

    handleChange = result =>{
        this.setState({result})
    }

    getDataOnHttp = value => {
        if (value.length < 1) {
            return;
        }

        axios(`http://localhost:4000/${value}`)
			.then(res => {
                const data = res.data;
                this.handleChange(data)
            });
    }

    componentDidMount(){
    }

    render() {
        return (<div>
            <div className="bg-img">
                <div className="service-container">
                    <div className="search-box">
                        <Search
                            placeholder="请输入基因的entrez-id"
                            enterButton="开始查询"
                            onSearch={value => this.getDataOnHttp(value)}                       
                        />
                    </div>
                    <div className="result-display">
                        {this.state.result}
                    </div>
                    <div className='upload-box'>
                        <Upload {...props}>
                            <Button>
                            <UploadOutlined /> 文件上传
                            </Button>
                        </Upload>
                        <div className='file-button'>
                            <Row>
                                <Button type="primary">开始匹配</Button>
                                <Button>重新上传</Button>
                            </Row>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        
    );}


}
