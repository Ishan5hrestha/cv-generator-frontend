import React from 'react';
import { AppstoreOutlined, MailOutlined, MessageOutlined, PlusOutlined, QuestionOutlined, SettingOutlined, UserDeleteOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './Dashboard.css';
import { Route, Routes, useNavigate } from 'react-router';
import AddQuestion from './AddQuestion';
import RemoveUser from './RemoveUser';
import UserResponses from './UserResponses';
import Languages from './Languages';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Manage Questions', 'manageQuestions', <QuestionOutlined />, [
    getItem('Add Questions', '/dashboard/add-question', <PlusOutlined />),
  ]),
  {
    type: 'divider',
  },
  getItem('Manage Users', 'manageUsers', <UserOutlined />, [
    getItem('Remove users', '/dashboard/remove-user', <UserDeleteOutlined />),
  ]),
  getItem('User responses', 'manageResponses', <MessageOutlined />, [
    getItem('User responses', '/dashboard/user-responses', <MessageOutlined />),
  ]),
  getItem('Languages', 'manageLanguages', <SettingOutlined />, [
    getItem('Languages', '/dashboard/languages', <SettingOutlined />),
  ]),
];
const Dashboard = () => {
  const navigate = useNavigate();
  const onClick = ({key}) => {
    navigate(key);
  };
  return (
    <div className='dashboard-container'>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        // defaultSelectedKeys={['/dashboard/add-question']}
        defaultOpenKeys={['manageQuestions']}
        mode="inline"
        items={items}
      />
      <Routes>
        <Route path="add-question" element={<AddQuestion />} />
        <Route path="remove-user" element={<RemoveUser />} />
        <Route path="user-responses" element={<UserResponses />} />
        <Route path="languages" element={<Languages />} />
      </Routes>
    </div>
  );
};
export default Dashboard;