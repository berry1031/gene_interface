import React from 'react';

import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';


const { Header, Sider, Content } = Layout;

class SideBar extends React.Component {
    constructor(props) {
        super(props);

    this.state = {
      collapsed: false,
    };
}


    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };
  
    render() {
      return (
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <UserOutlined />
                <span>nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <VideoCameraOutlined />
                <span>nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <UploadOutlined />
                <span>nav 3</span>
              </Menu.Item>
            </Menu>
          </Sider>
           
      );
    }
  }
  

export default SideBar;
