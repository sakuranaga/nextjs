import styles from './hoge.module.css'

export default function Hoge({ children }) {
    console.log(children);
    return (
        <>
            <p id={styles.pogepoge} className={styles.poge}>hoge{children}</p>
            <p id={styles.pogepoge} className={styles.poge}>ほほっほおほほｈ{children}</p>
            ほげほげほげほげほげ
        </>
    );
}
