import React, { useState } from "react";
import { Layout } from "antd";
import { PageHeader } from "./Components/PageHeader";
import { ImageContent } from "./Components/ImageContent";
import { SiderContent } from "./Components/SiderContent";
import { Status } from "./types/types";
import "./styles.css";
const { Content } = Layout;

const IMAGE_CONTAINER = {
  backgroundColor: "White",
  borderStyle: "solid",
  borderWidth: "thin",
};

/**
 * Render a main layout component
 */

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
