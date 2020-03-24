import React from 'react';

import './styles/fileStyle.css';

import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

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

class File extends React.Component {
   

      render(){

        return (
            <div className='file-upload-part'>
   
   <Upload {...props}>
    <Button>
      <UploadOutlined /> Click to Upload
    </Button>
  </Upload>
   
            </div>
   
       )

      }
    
  
    
}

export default File;