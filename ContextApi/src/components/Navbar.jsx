import { useState, useContext } from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import { Input, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const [username, setUsername] = useState("");
  const { isAuth } = useContext(AuthContext);
  const onSubmit = (e) => {
    e.preventDefault();
    isAuth(username);
  };
  return (
    <div>
      <form style={{ marginTop: "20px" }}>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "250px", height: "30px" }}
          size="small"
          placeholder="default size"
          prefix={<UserOutlined />}
        />
        <br />
        <br />
        <Space direction="vertical">
          <Input.Password
            style={{ width: "250px", height: "30px" }}
            placeholder="input password"
            onChange={(e) => e.target.value}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Space>

        <br />
        <br />
        <Button type="primary" onClick={onSubmit}>
          Login{" "}
        </Button>
      </form>
    </div>
  );
};
