import { Layout } from 'antd';
import React from 'react';
import { Input } from 'antd';
import MainHeader from '../common/MainHeader';
import { Outlet } from 'react-router';



const MainLayout = ({children}) => {
  const {  Content, Footer  } = Layout;
  const { } = Input;
  
  return(<>
 <Layout>
    <MainHeader/>
    <Content className="site-layout" style={{ padding: '50px 50px', marginTop: "64px" }}>
      {/* <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>خانه</Breadcrumb.Item>
        <Breadcrumb.Item>آرشیو</Breadcrumb.Item>
        <Breadcrumb.Item>نوشته ها</Breadcrumb.Item>
      </Breadcrumb> */}
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        <Outlet/>
        {children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center', background:"#001529", color:"#fff" }}>تمامی حقوق سایت برای وبلاگ من محفوظ میباشد</Footer>
  </Layout>
    </>)
}



export default MainLayout;