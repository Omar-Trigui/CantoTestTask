import React from "react";
import Check from "../assets/check.svg";
import Close from "../assets/close.svg";
import { Status } from "../types/types";

interface Props {
  status: Status;
}

const CONTAINER: React.CSSProperties = {
  position: "relative",
};
const ACTIONS: React.CSSProperties = {
  right: "4em",
  top: "1em",
  display: "block",
  position: "absolute",
};
const IMAGE: React.CSSProperties = {
  width: "100%",
  height: "100%",
};

const iconMap = {
  APPROVE: Check,
  REJECT: Close,
};

const testImage = require("../assets/testimage.jpeg");

/**
 * Render the main content container
 */

export const ImageContent: React.FC<Props> = ({ status }) => {
  return (
    <div style={CONTAINER}>
      {status !== "RESET" && (
        <div style={ACTIONS}>
          <div id="rectangle">
            <img
              src={iconMap[status]}
              height={100}
              width={100}
              className={status === "APPROVE" ? "approveImage" : undefined}
              alt={`${status} icon`}
            />
          </div>
        </div>
      )}
      <div style={{ margin: "35px", border: "1px solid black" }}>
        <img src={testImage} style={IMAGE} alt="testImage" />
      </div>
    </div>
  );
};
