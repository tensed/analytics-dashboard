import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  FaPaperPlane,
  FaTrash,
  FaStar,
  FaAt,
  FaChartPie,
  FaCog,
  FaPencilAlt,
} from "react-icons/fa";
import { Button } from "@material-ui/core";

export const mainMenuItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <FaAt color="grey" />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FaPaperPlane color="grey" />
      </ListItemIcon>
      <ListItemText primary="Sent" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FaPencilAlt color="grey" />
      </ListItemIcon>
      <ListItemText primary="Draft" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FaTrash color="grey" />
      </ListItemIcon>
      <ListItemText primary="Deleted" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FaStar color="grey" />
      </ListItemIcon>
      <ListItemText primary="Favourite" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FaChartPie color="grey" />
      </ListItemIcon>
      <ListItemText primary="Analytics" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FaCog color="grey" />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </div>
);

export const supportItems = (
  <div>
    <ListItem button>
      <Button
        size="large"
        variant="contained"
        color="Primary"
        style={{ textTransform: "none" }}
      >
        Upgrade Plan
      </Button>
    </ListItem>
    <ListItem button>
      <Button
        size="large"
        variant="contained"
        style={{
          color: "blue",
          backgroundColor: "Aliceblue",
          textTransform: "none",
        }}
      >
        Contact Support
      </Button>
    </ListItem>
  </div>
);
