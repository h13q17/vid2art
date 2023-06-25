import styles from "./File.module.scss";

const File = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h4>{props.text}</h4>
        <a href={props.link} className={styles.link}>
          <p>download</p>
        </a>
      </div>
    </div>
  );
};

export default File;
