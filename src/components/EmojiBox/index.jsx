import styles from './EmojiBox.module.css'
import { useState, useEffect } from 'react'

const EmojiBox = ({title, symbol}) => {
    const [selected, setSelected] = useState(false)

    // useEffect akan ergantung pada value selected yang aka mentrigger useEffect jika ada perubahan value pada state selected
    useEffect(() => {
        const timer = setTimeout(() => setSelected(false), 600)

        return () => clearTimeout(timer)
    },[selected])
    
    return (
        //function di sini berfungsi untuk mengcopy to clipboard emoji yg dipilih
        <div onClick={() => {navigator.clipboard.writeText(symbol)
            setSelected(true)
            }}
         className={styles.emojiBox}>
            <p dangerouslySetInnerHTML={{ 
            __html: `&#${symbol.codePointAt(0)};`
                     }}/>        
            <p className={styles.emojiText}>
                {/* {title} */}
                {selected ? 'Copied!' : title}
            </p>
        </div>
    )
}

export default EmojiBox