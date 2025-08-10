import styles from "./CounterApp.module.css";

const CounterApp = ({
  count,
  incrementHandler,
  decrementHandler,
  resetHandler,
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.appName}>Counter App</h1>
      <p className={styles.counter}>{count}</p>
      <button
        className={`btn btn-success ${styles.button}`}
        onClick={incrementHandler}
      >
        Increment
      </button>
      <button
        className={`btn btn-secondary ${styles.button}`}
        onClick={decrementHandler}
      >
        Decrement
      </button>
      <br />
      <button
        className={`btn btn-danger ${styles.resetButton}`}
        onClick={resetHandler}
      >
        Reset
      </button>
    </div>
  );
};

export default CounterApp;
