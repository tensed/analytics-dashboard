import React from "react";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "../theme";

export default function ButtonClick(status) {
  const [flag, setFlag] = React.useState(true);

  const handleClick = () => {
    setFlag(!flag);
  };

  let buttonContent = (
    <Button
      onClick={handleClick}
      variant="contained"
      color={flag ? "primary" : "secondary"}
    >
      Stopped
    </Button>
  );

  if (status.text === "Active") {
    buttonContent = (
      <MuiThemeProvider theme={theme}>
        {" "}
        <Button onClick={handleClick} variant="contained" color="primary">
          Active
        </Button>
      </MuiThemeProvider>
    );
  } else if (status.text === "Paused") {
    buttonContent = (
      <Button onClick={handleClick} variant="contained" color="secondary">
        Paused
      </Button>
    );
  }

  return buttonContent;
}
