import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{},"React H1")

// () for writing in multiple lines

const JSXHeading = <h1>React JSX</h1>;

//
const ReactFunctionalComponent = () => {
  return (
    <div>
      <h1>helllooo</h1>
    </div>
  );
};

const ReactFunctionalComponent2 = () => (
  <div>
    <h1>helllooo test</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ReactFunctionalComponent2 />);


