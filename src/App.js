import React from 'react';
import './App.css';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PhoneOutlined
} from '@ant-design/icons';

import Routes from './route/Routes';
import SideBar from './navigation/SideBar';

import {Link} from 'react-router-dom';

import { Layout } from 'antd';
const { Header, Content } = Layout;



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
              {/* <Button type="primary" onClick={this.toggle} style={{ marginBottom: 16}}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button> */}
        
        <Link to='/login' className="login-link">
          <span className="login-button">登陆</span>
        </Link>
        <Link to='/register' className="register-link">
        <span className="register-button">注册</span>
        </Link>

          <span className="phone-icon">
            <PhoneOutlined />
          </span>
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
