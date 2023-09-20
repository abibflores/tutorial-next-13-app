import styles from "./page.module.css"

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <div className={styles.Container}>
        <span className={styles.loader}></span>
    </div>
  }
  