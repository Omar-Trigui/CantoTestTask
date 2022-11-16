import { Button as ButtonAntd } from "antd";

interface Props {
  type?: "PRIMARY" | "DANGER";
  label: string;
  handleClick: () => void;
}

const buttonColorsMap = {
  PRIMARY: "#4ac865",
  DANGER: "#fc0733",
};

/**
 * Render a reusable button component
 */
export const Button: React.FC<Props> = ({ type, label, handleClick }): JSX.Element => {
  const BUTTON = {
    borderColor: "white",
    marginTop: "10px",
    backgroundColor: type && buttonColorsMap[type],
  };

  return (
    <ButtonAntd
      type="primary"
      shape="round"
      size={"large"}
      style={BUTTON}
      block
      onClick={handleClick}
    >
      {label}
    </ButtonAntd>
  );
};
