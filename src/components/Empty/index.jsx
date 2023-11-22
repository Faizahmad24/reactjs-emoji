import { ReactPropTypes } from "react";

import styles from './Empty.module.css'

const Empty = ({text}) => {
    return (
        <div className={styles.empty}>
            {text}
        </div>
    )
}

Empty.ReactPropTypes = {
    text: ReactPropTypes
}

export default Empty