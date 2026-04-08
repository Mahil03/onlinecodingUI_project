import { useState } from "react";
import ProblemList from "../components/ProblemList";
import CodeEditor from "../components/CodeEditor";
import ResultPanel from "../components/ResultPanel";
import problem from "../data/problem"; 

const Practice = () => {
  const [selectedProblem, setSelectedProblem] = useState(problem[0]);
  const [output, setOutput] = useState("");

  return (
    <div className="container">
      <ProblemList problem={problem} onSelect={setSelectedProblem} />
      <CodeEditor problem={selectedProblem} setOutput={setOutput} />
      <ResultPanel output={output} />
    </div>
  );
};

export default Practice;