import Login from "@/components/Auth/Login/Login";
import styles from "./page.module.scss";
export default function HomePage() {
  return (
    <div className={styles.layout}>
      <Login />
    </div>
  );
}
