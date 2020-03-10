import React from 'react';
import { Button } from 'antd';
import { Row, Col } from 'antd';



import './styles/topMenuStyle.css';


const TopMenu = () => {
    return(
        <div className ='top-menu'>
        <div>
            <Row> 

                <Col span={18} >   
                </Col>
                <Col span={6} >               
                <Button type="link" style={{color: '#000', fontWeight: '400' ,fontSize:'14px'}}>登陆</Button>
                <Button type="link" style={{color: '#000', fontWeight: '400' ,fontSize:'14px'}}>注册</Button>
                <Button type="link" style={{color: '#000', fontWeight: '400' ,fontSize:'14px'}}>联系电话:11110000</Button>

                </Col>
            </Row>

        </div>
        </div>
    
    )
}

export default TopMenu;