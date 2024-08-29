import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";

var react = ReactDOM.createRoot(document.getElementById("root"));

const Main = () =>
{
    return(
        <>
        <Header />
        <Body />
        </>
    );
}

react.render(<Header />);
react.render(<Body />)

export default Main;