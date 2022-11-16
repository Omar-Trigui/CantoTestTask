import { Typography } from "antd";
import { Layout } from "antd";
const { Title } = Typography;
const { Header } = Layout;

const HEADER: React.CSSProperties = {
  backgroundColor: "White",
  borderStyle: "solid",
  borderWidth: "thin",
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
        PoC Approving Tool
      </Title>
    </Header>
  );
};
