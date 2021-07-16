import React, { useEffect } from "react";
import Prism from "prismjs";
import "../style/prism.css";

const CodeBlock = (props: CodeBlockProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre>
      <code className={`language-${props.language}`}>{props.children}</code>
    </pre>
  );
};

interface CodeBlockProps {
  children: React.ReactNode;
  language: string;
}

export default CodeBlock;
