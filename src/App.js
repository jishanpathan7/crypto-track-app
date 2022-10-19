import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
// import Homepage from "./pages/Homepage";
// import CoinPage from "./pages/CoinPage";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "./component/Banner/Alert"
import React, {lazy, Suspense} from "react";

const Homepage = lazy(() => import("./pages/Homepage"));
const CoinPage = lazy(() => import("./pages/CoinPage"));

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
          <Suspense fallback= {<div>
            Loadng...</div>}> 
          <Routes>
            <Route path="/" element={<Homepage/>} exact />
            <Route path="/coins/:id" element={<CoinPage/>} exact/>
          </Routes>
          </Suspense>
        </div>
       <Alert/>
      </BrowserRouter>
    </>
  );
}

export default App;
