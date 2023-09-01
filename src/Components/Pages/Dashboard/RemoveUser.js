import React, { useEffect, useState } from "react";
import DataTable from "./dataTable";
import "./AddQuestion.css";
import FormDrawer from "./formDrawer";
import { Button, Popconfirm, Typography } from "antd";
import { useFormHandler } from "./formHook";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import importedQuestions from "../../../Questions";
import { useLanguage } from "../../../context/Language";
import { toSentenceCase, toCamelCase } from "../../../utils";

const { Title } = Typography;

const dtConfig = [
  {
    title: "index",
    dataIndex: "index",
    textFilter: true,
    sorter: (a, b) => a.index - b.index,
  },
  {
    title: "Name",
    dataIndex: "name",
    textFilter: true,
  },
  {
    title: "Email",
    dataIndex: "email",
    textFilter: true,
  },
  {
    title: "Image",
    dataIndex: "image",
    textFilter: true,
  },
];

const apiService = { props: {} };
const title = "Users";
const roleLevel = "props";
const RemoveUser = (props) => {
  // Data
  const [users, setUsers] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(()=> {
    // Fetch users and set Users
    setUsers([{
      index: 1,
      name: "Basanta Niraula",
      email: "subashniraula6@mail.com",
      image: "http://www.basanta.com.np"
    }]);
  }, [])

  useEffect(() => {
    setItems(users.map(user => user));
  }, [users]);
  
  const handleItemDelete = (e) => {

  }

  useEffect(() => {
    if (roleLevel === "role admin") {
      //    dispatch(datatableActions.getAll(apiService));
    } else if (roleLevel === "role manager") {
      //    dispatch(datatableActions.getByGroupId(apiService, localStorage.getItem('groupId')));
    } else {
      //    dispatch(datatableActions.getByUserId(apiService, localStorage.getItem('userId')));
    }
  }, []);

  const handleTableChange = (pagination, filters, sorter, extra) => {
    // console.log("params", pagination, filters, sorter, extra);
  };

  const dtConfigColumns = [
    ...dtConfig,
    {
      title: "Actions",
      dataIndex: "Actions",
      align: "center",
      render: (text, record) => {
        return (
          <Button.Group>
            <Popconfirm
              title="Sure to Delete?"
              onConfirm={() => handleItemDelete(record.id)}
            >
              <Button
                type="danger"
                shape="circle"
                icon={<DeleteOutlined />}
                size="large"
              />
            </Popconfirm>
          </Button.Group>
        );
      },
    },
  ];
  
  return (
    <div className="table-container">
      <Title level={3}>{title}</Title>
      <DataTable
        items={items}
        dtConfigColumns={dtConfigColumns}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default RemoveUser;
