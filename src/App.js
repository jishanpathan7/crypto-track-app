import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Homepage from "./pages/Homepage";
import CoinPage from "./pages/CoinPage";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "./component/Banner/Alert"


const useStyles = makeStyles({
  root: {
    backgroundColor: "#14161a",
    color: (props) => props.color,
    color: "white",
    minHeight: "100vh",
  },
});

function App(props) {
  const classes = useStyles(props);
  return (
    <>
      <BrowserRouter>
        <div className={classes.root}>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage/>} exact />
            <Route path="/coins/:id" element={<CoinPage/>} />
          </Routes>
        </div>
       <Alert/>
      </BrowserRouter>
    </>
  );
}

export default App;
