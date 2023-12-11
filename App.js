const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc"},
    "Hello yhere from react js"
);

const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        { id : "child"},
        React.createElement( "h1", {}, "I am in h1")
    )

);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);