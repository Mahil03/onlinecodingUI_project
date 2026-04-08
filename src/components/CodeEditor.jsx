import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";

const CodeEditor = ({ problem, setOutput }) => {
  const [code, setCode] = useState("");

  useEffect(() => {
    setCode(problem?.starterCode || "");
  }, [problem]);

  const runCode = () => {
    try {
      const result = eval(code);
      setOutput(String(result));
    } catch (err) {
      setOutput(err.message);
    }
  };

  return (
    <div className="editor-container">
      <h3>{problem?.title}</h3>
      <p>{problem?.description}</p>

      <Editor
        height="300px"
        defaultLanguage="javascript"
        value={code}
        onChange={(value) => setCode(value)}
      />

      <button onClick={runCode} className="run-btn">
        Run Code
      </button>
    </div>
  );
};

export default CodeEditor;