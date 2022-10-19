import React from "react";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHouse, faCode } from "@fortawesome/free-solid-svg-icons";
import GitHubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TemporaryDrawer from "@mui/material/Drawer";
import Navbar from "./Navbar"
function LandingPage() {
  return (
    <div className="container">
      <Container maxWidth="xxxl" style={{ height: "80vh" }}>
        <Box
          sx={{
            bgcolor: "rgb(76, 40, 102)",
            height: "calc(100vh - 48px)",
            color: "#f4f4f4d1",
            marginTop: "24px",
          }}
        >
          <Navbar />
          <TemporaryDrawer></TemporaryDrawer>

          <div className="presentation-text">
            <div className="inside-presentation-text">
              <span className="my-name">I'm Paolo Cannistraro.</span>
              <p>
                A Full Stack <br /> Web Developer.
              </p>
              <div className="icons">
                <Link color="inherit" href="https://github.com/Mandrake091">
                  <IconButton
                    style={{ zIndex: "1" }}
                    size="large"
                    edge="start"
                    color="inherit"
                  >
                    <GitHubIcon
                      className="gitHub-icon"
                      style={{ fontSize: "1em" }}
                    />
                  </IconButton>
                </Link>
                <Link
                  color="inherit"
                  href="https://www.linkedin.com/in/paolo-cannistraro-167955242/"
                >
                  <IconButton
                    style={{ zIndex: "1" }}
                    size="large"
                    edge="start"
                    color="inherit"
                  >
                    <LinkedInIcon
                      className="linkedIn-icon"
                      style={{ fontSize: "1em" }}
                    />
                  </IconButton>
                </Link>
                <Link
                  color="inherit"
                  href="https://www.instagram.com/cannistraro_paolo/"
                >
                  <IconButton
                    style={{ zIndex: "1" }}
                    size="large"
                    edge="start"
                    color="inherit"
                  >
                    <InstagramIcon
                      className="instagram-icon"
                      style={{ fontSize: "1em" }}
                    />
                  </IconButton>
                </Link>
              </div>
            </div>
          </div>
          <div className="font">
            <div className="inside">Ciao</div>
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default LandingPage;
