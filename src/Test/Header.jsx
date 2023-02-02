import { Card } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTimer } from "react-timer-hook";
import { timer } from "../Redux/action";

export const Header = () => {
  /* -----------------------------------------------------------------------------------------
                            Using Dispatch to call the Store             
      -----------------------------------------------------------------------------------------*/
  const dispatch = useDispatch();
  /* -----------------------------------------------------------------------------------------
                            Getting Email ID by using Hooks
      -----------------------------------------------------------------------------------------*/
  const emailID = useSelector((state) => state?.email);

  /**
   * @description Timer code start from here and when login is successful it will take current time and adds 1hr to it,
   * on completing 1hr it will dispatch timer(true)
   * @param we created current time and date using new Date method
   */

  const time = new Date();

  time.setSeconds(time.getSeconds() + 10);

  const expiryTimestamp = time;

  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => dispatch(timer(true)),
  });

  return (
    <Card
      variant="outlined"
      color="text.secondary"
      style={{
        height: 65,
        backgroundSize: "cover",
        backgroundColor: "#003060",
      }}
    >
      <div>
        <h3 className="email">Login Mail Id : {emailID}</h3>
        <div className="displayTime">
          <div style={{ fontSize: "30px" }}>
            <span>Count Down :</span> <span>{days}</span>:<span>{hours}</span>:
            <span>{minutes}</span>:<span>{seconds}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
