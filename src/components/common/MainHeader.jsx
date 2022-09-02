import { Col, Layout, Menu, Row,Button } from 'antd';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Input } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux/es/exports';

const MainHeader = () => {
    const { Header  } = Layout;
    const { Search } = Input;
    const onSearch = (value) => console.log(value);
    const username = localStorage.getItem("username");

  
    const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 992px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  
    const menuFunc = () => {
      var x = document.querySelector(".myLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }
    return(<>
    {isDesktopOrLaptop ?
     <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
     <Row>
       <Col md={6}>
         <div className='logo' style={{fontSize:"26px",color:"white"}}>وبلاگ من</div>
       </Col>
       <Col md={8}>
       <Menu mode="horizontal" theme="dark" defaultSelectedKeys={['one']}>
     <Menu.Item key="one">
       <Link to="/">
       خانه
       </Link>
     </Menu.Item>
     <Menu.Item key="two">
      <Link to="/posts">
      همه مقالات
      </Link>
     </Menu.Item>
     <Menu.Item key="three">
     <Link to="/category/1">
      فرهنگ و هنر
     </Link>
     </Menu.Item>
     <Menu.Item key="four">
     <Link to="/category/3">
      آموزش
     </Link>
     </Menu.Item>
     <Menu.Item key="five">
     <Link to="/category/4">
      تکنولوژی
     </Link>
     </Menu.Item>
     <Menu.Item key="six">
     <Link to="/category/5">
      سرگرمی 
     </Link>
     </Menu.Item>
   </Menu>
       </Col>
       <Col md={6} style={{textAlign:"left", display:"flex", alignItems:"center"}}>
       <Search
       placeholder="جستوجو کنید..."
       allowClear
       onSearch={onSearch}
       enterButton 
       style={{ width: 300}}
     />
       </Col>
       <Col md={4} style={{textAlign:"left"}}>
        {username? (<NavLink to="/my-account">
        <Button type="primary" size='large'>سلام {username}</Button>
        </NavLink>) : (<NavLink to="/login">
        <Button type="primary" size='large'>ثبت نام / ورود</Button>
        </NavLink>)}
       </Col>
     </Row>
     </Header>
     : 
     <div className="topnav">
         <a className="active">وبلاگ من</a>
          <div className="myLinks">
          <Link to="/">
            خانه
          </Link>           
          <Link to="/posts">
          همه مقالات
          </Link>          
          <Link to="/category/3">
           فرهنگ و هنر
          </Link>
          <Link to="/category/4">
           آموزش
          </Link>
          <Link to="/category/5">
           تکنولوژی
          </Link>
          <Link to="/category/6">
            سرگرمی 
          </Link>
          {username? (<NavLink to="/login">
        <Button type="primary" size='large'>سلام {username}</Button>
        </NavLink>) : (<NavLink to="/login">
        <Button type="primary" size='large'>ثبت نام / ورود</Button>
        </NavLink>)}
          </div>
         <a className="icon" onClick={menuFunc}>
           <i className="fa fa-bars"></i>
         </a>
      </div>
     }</>)
}

export default MainHeader;