import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { createElement } from 'react';
const { Header, Content, Footer, Sider } = Layout;
function MainLayout() {


    const items = [  
      {
        key: 1,
        label: 'Dashboard'
      },
      {
        key: 2,
        label: 'Profile'
      },
      {
        key: 3,
        label: 'User Management'
      },
    ]


  return (
    <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
    </Sider>
    <Layout>
      <Header style={{ padding: 0, background: 'white' }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: 'white',
            borderRadius: '10px',
          }}
        >
          The Main Content should go there
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
  )
}

export default MainLayout