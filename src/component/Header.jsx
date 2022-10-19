import {
  AppBar,
  Container,
  createTheme,
  makeStyles,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CryotoState } from "../CryptoContext";
import AuthModal from "./authentication/AuthModal";
import USerSidebar from "./authentication/USerSidebar";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Poppins",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const Header = () => {
  const navigate = useNavigate();
  const {currency,setCurrency,user} = CryotoState()
  console.log(currency)
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Typography
                onClick={() => navigate("/")}
                className={classes.title}
                variant="h6"
              >
                Crypto Hunter
              </Typography>
              <Select
              value={currency}
              onChange={(e) => {
                setCurrency(e.target.value)
              }}
                variant="outlined"
                style={{
                  width: 100,
                  height: 40,
                 
                }}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>
             {user ? <USerSidebar/>:  <AuthModal/>}
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default Header;
