// import React from "react";

// export default function App() {
//   return React.createContext("h1", null, "This is a new thing in my life");
// }

// const greeting = () => {
//   return <h1>Start learn react js</h1>;
// };

// export default greeting;

import React from "react";

const App = () => {
  return (
    <React.Fragment>
      <Button />
      <Detail />
      <Student />
    </React.Fragment>
  );
};

function Button() {
  return <button>Click me</button>;
}

function Detail() {
  return <p>Lorem ipsum dolor sit amet.</p>;
}

const Person = {
  name: "Toch Ratana",
  age: 19,
};

function Student() {
  return `His name is ${Person.name} and he is ${age} year old`;
}

export default App;
