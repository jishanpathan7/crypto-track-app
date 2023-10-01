//* Styles Imports */
import "./App.css";

//* Packages Imports */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import React, {lazy, Suspense} from "react";

//* Component Imports */
import Alert from "./component/Banner/Alert"
import Header from "./component/Header";

//* Lazy Imports */
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
