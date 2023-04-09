import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Menu as MenuIcon, Home as HomeIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { BiMessageDetail } from "react-icons/bi";
import { IoLogoGameControllerB } from "react-icons/io";
import { ImFileVideo } from "react-icons/im";
import { BsMoon, BsSunFill } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#080402",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: 240,
    backgroundColor: "#080402",
    height: "100vh", // add this line to make the sidebar fill the entire viewport
    position: "fixed", // add this line to fix the position of the sidebar
  },
  paper: {
    background: "#080402", // add this line to set the background color
  },
}));

const handleClick = (event, sectionId) => {
  event.preventDefault();
  console.log("Clicked on menu item", sectionId);
  const element = document.getElementById(sectionId);
  element.scrollIntoView({ behavior: "smooth" });
};


const Header = () => {
  const [open, setOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? "white" : "black";
  };

  

  const drawerContent = (
    <div
      className={classes.drawer}
      style={{ backgroundColor: "#080402", color: "#A57C01" }}
    >
      <List>
        <ListItem button onClick={(event) => handleClick(event, "about")}>
          <ListItemIcon>
            <HomeIcon style={{ color: "#A57C01" }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={(event) => handleClick(event, "contact")}>
          <ListItemIcon>
            <BiMessageDetail style={{ color: "#A57C01" }} />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button onClick={(event) => handleClick(event, "experience")}>
          <ListItemIcon>
            <IoLogoGameControllerB style={{ color: "#A57C01" }} />
          </ListItemIcon>
          <ListItemText primary="Games" />
        </ListItem>
        <ListItem button onClick={(event) => handleClick(event, "portfolio")}>
          <ListItemIcon>
            <ImFileVideo style={{ color: "#A57C01" }} />
          </ListItemIcon>
          <ListItemText primary="Clips" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar
        position={hasScrolled ? "fixed" : "static"}
        className={hasScrolled ? classes.scrolledAppBar : ""}
        style={{ backgroundColor: "#080402", color: "#A57C01" }}
      >
        <Toolbar>
          {isMobile ? (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          ) : null}
          <Typography
            variant="h6"
            className={classes.title}
            style={{ fontSize: "xx-large" }}
          >
            Kintarou
          </Typography>
          {!isMobile ? (
            <React.Fragment>
              <a className="btn-link" href="#about">
                Home
              </a>
              <a className="btn-link" href="#contact">
                Contact
              </a>
              <a className="btn-link" href="#experience">
                Games
              </a>
              <a className="btn-link" href="#portfolio">
                Clips
              </a>
              <Button
                onClick={toggleDarkMode}
                style={{ color: "#A57C01", fontSize: "x-large" }}
              >
                {isDarkMode ? <BsSunFill /> : <BsMoon />}
              </Button>
            </React.Fragment>
          ) : (
            <Button
              onClick={toggleDarkMode}
              style={{ color: "#A57C01", fontSize: "x-large" }}
            >
              {isDarkMode ? <BsSunFill /> : <BsMoon />}
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={handleDrawerClose}>
        {drawerContent}
      </Drawer>
    </div>
  );
};

export default Header;
