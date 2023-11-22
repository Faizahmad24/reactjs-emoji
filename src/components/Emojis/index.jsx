import styles from './Emoji.module.css'
import EmojiBox from '../EmojiBox'
import { useState } from 'react'
import { filterEmojis } from '../../utils/filterEmojis'
import { useEffect } from 'react'
import Empty from '../Empty'

const Emojis =  ({emojisData, searchText}) => {
    const [filteredEmojis, setFilteredEmojis] = useState([])

    useEffect(() => {
        setFilteredEmojis(filterEmojis({
            emojisData: emojisData,
            searchText: searchText
        }))
    }, [emojisData, searchText])

    if (filteredEmojis.length > 0 ) {
        return (
            <div className={styles.emojisGrid}>
            {filteredEmojis.map((data, index) => (
                // <div key={data.title}>
                //     {/* untuk menghandle sebuah string menjadi sebuah elemnt html */}
                //     <p dangerouslySetInnerHTML={{ 
                //         __html: `&#${data.symbol.codePointAt(0)}`
                //      }}/>
                // </div>
                <EmojiBox key={index} title={data.title} symbol={data.symbol}/>
            ))}
        </div>
        )
    } else {
        return (
            <Empty text="Oops, zero finding. Let's try another keyword!"/>
        )
    }

}

export default Emojis