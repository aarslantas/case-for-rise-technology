import styles from "./NewJob.module.css";

const NewTask = () => {
  return (
    <div className={styles.newJob}>
      <h2>Create New Job</h2>
      <form className={styles.form}>
        <div className={styles["form-controls"]}>
          <label htmlFor="jobname">Job Name</label>
          <input type="text" name="jobname" />
        </div>
        <div className={styles["form-controls"]}>
          <label htmlFor="jobname">Job Priority</label>
          <select value="Radish">
            <option value="Orange">Orange</option>
            <option value="Radish">Radish</option>
            <option value="Cherry">Cherry</option>
          </select>
        </div>
        <div className={styles["form-actions"]}>
          <button>+Create</button>
        </div>
      </form>
    </div>
  );
};

export default NewTask;
