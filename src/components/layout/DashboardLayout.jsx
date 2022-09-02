import {
    ArrowRightOutlined,
    EditOutlined,
    HomeOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Button, Layout, Menu } from 'antd';
  import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { getCategories } from '../../redux/action/categoryAction';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux/es/exports';
  const { Header, Sider, Content } = Layout;
  
  const DashboardLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo' style={{fontSize:"22px",color:"white", padding:"20px"}}>خوش آمدید!</div>
        <Menu mode="vertical" theme="dark" defaultSelectedKeys={['one']} className="dashboard-menu">
                <Menu.Item key="one">
                <HomeOutlined />
                  <Link to="/my-account">
                  پیشخوان
                  </Link>
                </Menu.Item>
                <Menu.Item key="two">
                 <Link to="/my-account/posts">
                 <EditOutlined />
                 نوشته ها
                 </Link>
                 </Menu.Item>
                 <Menu.Item key="three">
                 <UserOutlined />
                 <Link to="/my-account/info">
                  حساب من
                </Link>
                </Menu.Item>
                 <Menu.Item key="/logout">
                 <Link to="/logout">
                 <ArrowRightOutlined />
                  خروج
                 </Link>
                 </Menu.Item>
         </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background dashboard-header"
            style={{
              padding: 0,
            }}
          >
            <NavLink to="/">
            <Button type="primary" size='large'>مشاهده سایت</Button>
            </NavLink>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
    );
  };
  
  export default DashboardLayout;