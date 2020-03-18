import React from 'react';
import './App.css';


import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import Routes from './route/Routes';
import TopNav from './navigation/TopNav';
import SideBar from './navigation/SideBar';

import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;



class App extends React.Component {
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
      <Layout>
        <SideBar
        collapsed={this.state.collapsed}
        />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{paddingLeft:'20px'}}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content style={{ margin: '24px 16px 0', minHeight: 900}}>
        {/* <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}> */}
        <Routes />        
        {/* </div> */}
      </Content>
        </Layout>

      </Layout>
    );
  }
}

export default App;
