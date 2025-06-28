// const heading = React.createElement("h1",{id:"headingid"},"Using React Heading")

//nesting

// const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"Nested H1 tag")))

//siblings

// const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"Nested H1 tag"),React.createElement("h2",{},"Sibling H2 tag")]))

//what happens if we have multiple siblings

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Nested H1 tag"),
    React.createElement("h2", {}, "Sibling H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Nested H1 tag"),
    React.createElement("h2", {}, "Sibling H2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
