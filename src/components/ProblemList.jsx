const ProblemList = ({ problem, onSelect }) => {
  return (
    <div className="problem-list">
      <h3>Problems</h3>

      {problem && problem.length > 0 ? (
        problem.map((p) => (
          <div
            key={p.id}
            onClick={() => onSelect(p)}
            className="problem-item"
          >
            {p.title}
          </div>
        ))
      ) : (
        <p>No Problems Found</p>
      )}
    </div>
  );
};

export default ProblemList;