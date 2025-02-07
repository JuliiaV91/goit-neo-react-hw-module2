import css from './Options.module.css';

function Options({ onChangeFeedback, resetAll, totalFeed }) {
  return (
    <div className={css.btnstyle}>
      <button onClick={() => onChangeFeedback('good')}>Good</button>
      <button onClick={() => onChangeFeedback('neutral')}>Neutral</button>
      <button onClick={() => onChangeFeedback('bad')}>Bad</button>
      {totalFeed > 0 && <button onClick={resetAll}>Reset</button>}
    </div>
  );
}
export default Options;
