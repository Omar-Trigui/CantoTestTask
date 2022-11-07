import React, { useState } from "react";
import { Layout } from "antd";
import { PageHeader } from "./Components/PageHeader";
import "./styles.css";
import { ImageContent } from "./Components/ImageContent";
import { SiderContent } from "./Components/SiderContent";
import { Status } from "./types/types";
const { Content } = Layout;

const IMAGE_CONTAINER = { backgroundColor: "White", borderStyle: "solid" };

const App: React.FC = () => {
  const [status, setStatus] = useState<Status>("RESET");

  return (
    <Layout className="layout">
      <PageHeader />
      <Layout>
        <SiderContent onStatusChange={setStatus} />
        <Content style={IMAGE_CONTAINER}>
          <ImageContent status={status} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
