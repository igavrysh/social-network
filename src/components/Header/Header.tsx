import { Layout, Menu, Row, Col, Button } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUserLogin, selectIsAuth } from '../../redux/auth-selectors'
import { logout } from '../../redux/auth-reducer'
import { Link } from 'react-router-dom'

export type MapPropsType = {
}
const { SubMenu } = Menu
const { Header} = Layout

export const AppHeader: React.FC<MapPropsType> = (props) => {

  const isAuth = useSelector(selectIsAuth)
  const login = useSelector(selectCurrentUserLogin)
  const dispatch = useDispatch()

  const logoutCallback = () => {
    dispatch(logout())
  }

  return (

    <Header className="header">
      <div className="logo" />
      <Row>
        <Col span={18}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">
              <Link to='/developers'>
                Developers
              </Link>
            </Menu.Item>
          </Menu>
        </Col>

          {
            isAuth 
              ? <>
                  <Col span={1}>
                      <Avatar
                        alt={login || ''}
                        style={{backgroundColor: '#87d068'}} 
                        icon={<UserOutlined />} />
                  </Col>
                  <Col span={5}>
                        <Button onClick={logoutCallback}>
                          Log out
                        </Button>
                  </Col>
                </>
              : <Col span={6}>
                  <Button>
                    <Link to={'/login'}>
                      Login
                    </Link>
                  </Button>
                </Col>
          }
        
        
      </Row>
      
    </Header>


/*
    <header className={s.header}>
      <img src='https://s2.logaster.com/static/v3/img/products/logo.png' alt='' />
      <div className={s.loginBlock}>
        {
          props.isAuth
            ? <div>
                {props.login} - <button onClick={props.logout}>Log out</button>
              </div>
            : <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
    */
  );
}