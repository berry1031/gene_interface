import React from 'react';
import {Link} from 'react-router-dom';
import { Menu, Layout } from 'antd';
import { Row, Col } from 'antd';
import { Input } from 'antd';



import logo from "../resource/images/logo.png";

import './styles/topNavStyle.css';
const { Search } = Input;

const TopNav = () => {
    return(
        <div className='top-nav'>
            <Row>
             
                <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                    <div className ='menu-left'>
                    <Menu theme="light" mode="horizontal" defaultSelectedKeys={'/'} style={{lineHeight: '70px'}}>
                        <Menu.Item key='/index' style={{color: '#000', fontWeight: '900', fontSize:'15px'}}>
                            <Link to='/index'>公司首页</Link>
                        </Menu.Item>
                        <Menu.Item key="/service" style={{fontWeight: '800', fontSize:'15px'}}>
                            <Link to='/service'>技术服务</Link>
                        </Menu.Item>
                        <Menu.Item key="/symptom'" style={{fontWeight: '800', fontSize:'15px'}}>
                            <Link to='/symptom'>症状诊断</Link>
                        </Menu.Item>

                            {/* <SubMenu  
                                style={{color: '#3A3A3A', fontWeight: '500', fontSize:'15px'}} 
                                title={<span>数据库</span>}>
                                <Menu.Item key="/database">
                                    <Link to='/database'>融合基因数据库</Link>
                                </Menu.Item>
                                <Menu.Item key="/database">
                                    <Link to='/database'>基因数据库</Link>
                                </Menu.Item>
                            </SubMenu> */}
                        <Menu.Item key="/about" style={{color: '#000', fontWeight: '900', fontSize:'15px'}}>
                            <Link to='/about'>关于我们</Link>
                        </Menu.Item>
                    </Menu>
                    </div>
                </Col>
                <Col xs={0} sm={0} md={4} lg={4} xl={4}>

                {/* <Col span={4}> */}
                    <div className ='nav-logo'>
                        <img src = {logo} className = "logo" alt = "logo" />
                    </div>
                </Col>
                <Col xs={0} sm={0} md={5} lg={5} xl={5}>
                    <div className="menu-search">
                        <Search
                        placeholder="查询"
                        onSearch={value => console.log(value)}
                        />
                    </div>
                </Col>
                <Col xs={0} sm={0} md={5} lg={5} xl={5}>
                    <div className='menu-right'>
                        <Menu theme="light" mode="horizontal" style={{lineHeight: '70px'}}>
                            <Menu.Item key='/login' style={{color: '#000',fontWeight: '800',  fontSize:'15px'}}>
                                <Link to='/login'>登陆</Link>
                            </Menu.Item>
                            <Menu.Item key="/register" style={{fontWeight: '800', fontSize:'15px'}}>
                                <Link to='/register'>注册</Link>
                            </Menu.Item>
                           
     
                        </Menu>
                        
                    </div>
                </Col>
           
            </Row>
        </div>

    
    )
}

export default TopNav;