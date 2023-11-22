import { ReactPropTypes } from "react";

import styles from './Container.module.css'

const Container = ({children}) => {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}

Container.ReactPropTypes = {
    children: ReactPropTypes
}

export default Container