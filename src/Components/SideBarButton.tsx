import React, { useState } from "react";
import { Button } from "./Button";
import { Status } from "../types/types";

interface props {
  onStatusChange: (status: Status) => void;
}

/**
 * Contains the buttons in the  side layout component
 */

export const SideBarButton: React.FC<props> = ({ onStatusChange }) => {
  const [reset, setReset] = useState<boolean>(false);

  const handleClick = (status: Status) => {
    onStatusChange(status);
    setReset(!reset);
  };

  const SIDE_BAR: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    marginTop: "10px",
    height: "90%",
  };

  return (
    <div style={SIDE_BAR}>
      {reset ? (
        <Button handleClick={() => handleClick("RESET")} label={"Reset"} />
      ) : (
        <>
          <Button
            type="PRIMARY"
            handleClick={() => handleClick("APPROVE")}
            label={"Approve"}
          />
          <Button
            type="DANGER"
            handleClick={() => handleClick("REJECT")}
            label={"Reject"}
          />
        </>
      )}
    </div>
  );
};
