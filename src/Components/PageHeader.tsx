import { Typography } from "antd";
import { Layout } from "antd";
const { Title } = Typography;
const { Header } = Layout;

const HEADER: React.CSSProperties = {
  backgroundColor: "White",
  borderStyle: "solid",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

/**
 * Render the page Header component
 */

export const PageHeader = () => {
  return (
    <Header style={HEADER}>
      <Title level={3} className="titleHeader">
        Poc approving Tool
      </Title>
    </Header>
  );
};
