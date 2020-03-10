import React from 'react';
import {Link} from 'react-router-dom';
import { Menu } from 'antd';
import { Row, Col } from 'antd';


import logo from "../resource/images/logo.png";

import './styles/topNavStyle.css';
const { SubMenu } = Menu;


const TopNav = () => {
    return(
        <div>
            <Row>
                <Col span={16}>
                    <div className = 'nav-logo'>
                        <img src = {logo} className = "logo" alt = "logo" />
                    </div>
                </Col>
                <Col span={8}>
                    <Menu theme="light" mode="horizontal" defaultSelectedKeys={'/index'} style={{lineHeight: '70px'}}>
                        <Menu.Item key='/index' style={{color: '#000', fontWeight: '900', fontSize:'16px'}}>
                            <Link to='/index'>公司首页</Link>
                        </Menu.Item>
                        <Menu.Item key="/service" style={{fontWeight: '800', fontSize:'16px'}}>
                            <Link to='/service'>技术服务</Link>
                        </Menu.Item>
                            <SubMenu  
                                style={{color: '#3A3A3A', fontWeight: '500', fontSize:'16px'}} 
                                title={<span>数据库</span>}>
                                <Menu.Item key="/database">
                                    <Link to='/database'>融合基因数据库</Link>
                                </Menu.Item>
                                <Menu.Item key="/database">
                                    <Link to='/database'>基因数据库</Link>
                                </Menu.Item>
                            </SubMenu>
                        <Menu.Item key="/about" style={{color: '#000', fontWeight: '900', fontSize:'16px'}}>
                            <Link to='/about'>关于我们</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    
    )
}

export default TopNav;