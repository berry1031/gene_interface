import React from 'react';
import {Link} from 'react-router-dom';

import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  CustomerServiceOutlined,
  FileSearchOutlined,
  UploadOutlined,
  ZoomInOutlined 
} from '@ant-design/icons';

import './styles/sideBarStyle.css';

const { SubMenu } = Menu;
const { Sider } = Layout;

class SideBar extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
      return (
          <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
            <div className="logo" />
            <div className = 'side-bar-container'>

            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="/index">
                <Link to='/index' className='link-item'>
                <HomeOutlined style={{fontSize:'18px'}}/>
                  <span className="link-span">
                    首页
                  </span>
                </Link>
              </Menu.Item>
              <SubMenu
                key="/gene"
                title={
                  <Link to='/gene' className='link-item'>
                    <span>
                      <FileSearchOutlined className="link-span" style={{fontSize:'18px'}}/>
                      <span> 基因查询</span>
                    </span>
                  </Link>
                }
              >
                {/* <Menu.Item key="/">
                  基因搜索
                </Menu.Item> */}
                <Menu.Item key="/gene">
                  <Link to='/gene' className='link-item'>
                    基因匹配疾病              
                  </Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="/disease">
                <Link to='/disease' className='link-item'>
                <ZoomInOutlined style={{fontSize:'18px'}}/>
                  <span className="link-span">
                    疾病查询
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/symptom">
                <Link to='/symptom' className='link-item'>
                  <CustomerServiceOutlined style={{fontSize:'18px'}}/>
                  <span className="link-span">
                    症状诊断
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/file">
                <Link to='/file' className='link-item'>
                  <UploadOutlined style={{fontSize:'18px'}}/>
                  <span className="link-span">
                    文件上传
                  </span>
                </Link>
              </Menu.Item>
            </Menu>
            </div>

          </Sider>
           
      );
    }
  }
  

export default SideBar;
