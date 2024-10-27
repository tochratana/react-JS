import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeDisplay() {
  const codeString = `const add = (a, b) => a + b;`;

  // Customize background color
  const customStyle = {
    ...solarizedlight,
    'code[class*="language-"]': {
      ...solarizedlight['code[class*="language-"]'],
      backgroundColor: "#e2e8f0", // light grey background
    },
    'pre[class*="language-"]': {
      ...solarizedlight['pre[class*="language-"]'],
      backgroundColor: "#e2e8f0",
      width: "300px",
    },
  };

  return (
    <SyntaxHighlighter language="javascript" style={customStyle}>
      {codeString}
    </SyntaxHighlighter>
  );
}

export default CodeDisplay;
