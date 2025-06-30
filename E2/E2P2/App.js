// const heading = React.createElement("h1",{id:"headingid"},"Using React Heading")

//nesting

// const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"Nested H1 tag")))

//siblings

// const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"Nested H1 tag"),React.createElement("h2",{},"Sibling H2 tag")]))

//what happens if we have multiple siblings

import React from "react";
import ReactDOM from "react-dom/client"

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "child-1" }, [
    React.createElement("h1", { key: "h1-1" }, "Nested H1 tag"),
    React.createElement("h2", { key: "h2-1" }, "Sibling H2 tag"),
  ]),
  React.createElement("div", { id: "child2", key: "child-2" }, [
    React.createElement("h1", { key: "h1-2" }, "Nested H1 tag"),
    React.createElement("h2", { key: "h2-2" }, "Sibling H2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
