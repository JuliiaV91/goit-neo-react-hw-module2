function Options({ onChangeFeedback }) {
  return (
    <>
      <button onClick={() => onChangeFeedback('good')}>Good</button>
      <button onClick={() => onChangeFeedback('neutral')}>Neutral</button>
      <button onClick={() => onChangeFeedback('bad')}>Bad</button>
    </>
  );
}
export default Options;
