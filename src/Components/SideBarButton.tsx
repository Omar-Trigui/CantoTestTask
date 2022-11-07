import React, { useState } from "react";
import { Button } from "./Button";
import {Status} from "../types/types"

interface props {
  onStatusChange: (status: Status) => void;
}
export const SideBarButton: React.FC<props> = ({ onStatusChange }) => {
  const [reset, setReset] = useState<boolean>(false);

  const handleClick = (status: Status) => {
    onStatusChange(status);
    setReset(!reset);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        marginTop: "10px",
        height: "90%",
      }}
    >
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
