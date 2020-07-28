import React from 'react';
import { Layout, Menu, Avatar } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined
} from '@ant-design/icons';
import Route from '../main/Routes';
import MasterHeader from './header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faFolderOpen, faPowerOff, faCogs } from '@fortawesome/free-solid-svg-icons'

const { Header, Sider, Content } = Layout;

export default class LayoutCore extends React.Component {
    constructor(props) {
        super(props);
        this.state = { collapsed: false };
        this.toggle = this.toggle.bind(this);
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div>
                        <Avatar style={{ backgroundColor: '#87d068', margin: '6px' }} icon={<UserOutlined />} />
                    </div>

                    <Menu theme="dark">
                        <ul className="list-group list-group-flush">
                            <li style={{ 'background': 'transparent' }} className="list-group-item" >
                                <a style={{ color:'#CBCACB', textDecoration: 'none'}} href='#/dashboard'>
                                <FontAwesomeIcon icon={faDesktop} /> {!this.state.collapsed? 'Home': ''}</a>
                            </li>
                            <li style={{ 'background': 'transparent' }} className="list-group-item">
                                <a style={{ color:'#CBCACB', textDecoration: 'none'}} href='#/reports'>
                                <FontAwesomeIcon icon={faFolderOpen} /> {!this.state.collapsed? 'Reports': ''}</a>
                            </li>
                            <li style={{ 'background': 'transparent' }} className="list-group-item">
                                <a style={{ color:'#CBCACB', textDecoration: 'none'}}>
                                <FontAwesomeIcon icon={faCogs} /> {!this.state.collapsed? 'Enginnering': ''}</a>
                            </li>
                            <li style={{ 'background': 'transparent' }}className="list-group-item">
                                <a style={{ color:'#CBCACB', textDecoration: 'none'}}>
                                <FontAwesomeIcon icon={faPowerOff} /> {!this.state.collapsed? 'LogOut': ''}</a>
                            </li>

                        </ul>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <MasterHeader/>
                  
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background-content"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: '488px',
                        }}
                    >  <Route></Route>

                    </Content>
                    <div style= {{fontSize: '11px'}} className="card-footer text-muted">
                        AWT Airworthiness ©2020 Created by Re44e
                    </div>
                </Layout>

            </Layout>
        );
    }
}
