import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import useStyles from "../styles/FooterStyles";

function Footer() {
  const classes = useStyles();

  return (
    <AppBar position="absolute" color="primary" className={classes.footer}>
      <Toolbar className={classes.footerIcons}>
        <div>
          <Link
            href="https://github.com/RamjithRamadas"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <IconButton
              aria-label="Github"
              aria-haspopup="true"
              color="inherit"
            >
              <GitHubIcon />
            </IconButton>
          </Link>
          <Link
            href=""
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <IconButton
              aria-label="Github"
              aria-haspopup="true"
              color="inherit"
            >
              <TwitterIcon />
            </IconButton>
          </Link>
          <Link
            href=""
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <IconButton
              aria-label="Github"
              aria-haspopup="true"
              color="inherit"
            >
              <EmailIcon />
            </IconButton>
          </Link>
        </div>
        <div>
          <Link
            href="https://github.com/covid19india/api"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <Button
              variant="contained"
              color="secondary"
              disableElevation
              className={classes.button}
              endIcon={<OpenInNewIcon />}
            >
              API
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
