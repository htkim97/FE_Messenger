import styles from "./Logo.module.scss";
export default function Logo() {
  return (
    <div>
      <div className={styles.first}>
        <div className={styles.point}>운</div>
        <div className={styles.font}>나쁜날도 웃으면,</div>
      </div>
      <div className={styles.second}>
        <div className={styles.point}>빨</div>
        <div className={styles.font}>리 좋은일이 생겨!</div>
      </div>
    </div>
  );
}
