import {
  Container,
  createTheme,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CoinList } from "../config/api";
import { CryotoState } from "../CryptoContext";

const CoinsTabe = () => {
  const [coins, setcoins] = useState([]);
  const [loading, setloading] = useState(false);
  const [search, setsearch] = useState("")
  const { currency } = CryotoState();
  const fecthCoins = async () => {
    setloading(true);
    const { data } = await axios.get(CoinList(currency));
    setcoins(data);
  };
  console.log(coins);
  useEffect(() => {
    fecthCoins();
  }, [currency]);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Container
          style={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            style={{
              margin: 18,
            }}
          >
            Cryptocurrency Prices by Market Cap
          </Typography>
          <TextField
            label="Search For a Crypto Currency..."
            variant="outlined"
            style={{
                marginBottom:20,
                width:"100%"
            }}
          ></TextField>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default CoinsTabe;
