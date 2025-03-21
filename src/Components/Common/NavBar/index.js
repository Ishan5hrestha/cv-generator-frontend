import React from "react";
import { Dropdown, Avatar, Popconfirm, Button, notification } from "antd";
import {
  DashboardOutlined,
  DeleteOutlined,
  LogoutOutlined,
  UserDeleteOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { PageHeader } from "@ant-design/pro-layout";
import { Link } from "react-router-dom";
import { useFirebase } from "../../../context/Firebase";
import { useLanguage } from "../../../context/Language";
import { useNavigate } from "react-router-dom";
import LanguageSelect from "./LanguageSelect";
import { useLocation } from "react-router-dom";
import PopConfirm from "../PopConfirm";
import axios from "../../../axios/axios";

const routes = [
  {
    path: "index",
    breadcrumbName: "First-level Menu",
  },
];

let navBarStyle = {
  backgroundColor: "red !important",
};

function handleLogout(logout) {
  try {
    logout();
  } catch (e) {
    console.log(e.message);
  }
}

function handleUserDelete(uid, navigate) {
  axios
    .post(
      "delete_user",
      JSON.stringify({
        u_id: uid,
      })
    )
    .then((res) => {
      notification.success({
        title: "Deactivate Success",
        description:
          "Deactivate Success. Now you can no longer access to our system",
      });
      navigate("/login");
    })
    .catch((err) => {
      notification.error({
        message: "Deactivate error",
        description: err.message,
      });
    });
}

const getItems = (user, logout, t, navigate) => [
  ...(user.user_role.toLowerCase() === "admin" ||
  user.user_role.toLowerCase() === "superadmin"
    ? [
        {
          key: "1",
          label: (
            <Link to="/dashboard">
              <Button icon={<DashboardOutlined />}>
                {t("menu.dashboard")}
              </Button>
            </Link>
          ),
        },
      ]
    : []),
  ...(user.user_role.toLowerCase() !== "superamdin"
    ? [
        {
          key: "2",
          label: (
            <Popconfirm
              title="Sure to Deactivate your account? This cannot be undone"
              onConfirm={() => handleUserDelete(user.uid, navigate)}
            >
              <Button icon={<UserDeleteOutlined />}>Deactivate</Button>
            </Popconfirm>
          ),
        },
      ]
    : []),
  {
    key: "3",
    // danger: true,
    label: (
      <Button icon={<LogoutOutlined />} onClick={(e) => handleLogout(logout)}>
        {t("menu.logout")}
      </Button>
    ),
  },
];

const DropdownMenu = () => {
  let { logout, user } = useFirebase();
  let { t } = useLanguage();
  let navigate = useNavigate();

  return (
    <Dropdown
      menu={{
        items: getItems(user, logout, t, navigate),
      }}
    >
      <Avatar
        style={{ backgroundColor: "#87d068" }}
        size={35}
        icon={<UserOutlined />}
      />
    </Dropdown>
  );
};

const NavBar = () => {
  const { pathname: location } = useLocation();
  let { t } = useLanguage();
  let { user } = useFirebase();
  let navigate = useNavigate();
  if (location === "/") return null;
  return (
    <PageHeader
      title="KNEG"
      className="site-page-header"
      subTitle={t("app.intro")}
      extra={[<LanguageSelect />, user ? <DropdownMenu key="more" /> : null]}
      avatar={{
        src: "logo-kneg.png",
        onClick: () => {
          navigate("/app");
        },
      }}
      breadcrumb={{ routes }}
      style={navBarStyle}
    />
  );
};

export default NavBar;
