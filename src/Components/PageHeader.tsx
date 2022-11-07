import { Typography } from "antd";
import { Layout } from "antd";
const { Title } = Typography;
const { Header } = Layout;
export const PageHeader = () => {
  return (
    <Header
      style={{
        backgroundColor: "White",
        borderStyle: "solid",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Title level={3} className="titleHeader">Poc approving Tool</Title>
    </Header>
  );
};
