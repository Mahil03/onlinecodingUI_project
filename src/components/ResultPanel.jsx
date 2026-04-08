const ResultPanel = ({ output }) => {
  return (
    <div className="result-panel">
      <h3>Output</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default ResultPanel;
