import styles from "../styles/Featured.module.css"
import Image from "next/image"

const Featured = () => {
    const images=[
        "/images/lele.png",
        "/images/ikan.png",
        "/images/ayamgoreng.png"
    ]
  return (
    <div className={styles.container}>
        <div className={styles.arrowContainer} style={{left:0}}>
            <Image src="/images/arrow1.png" alt="" layout="fill" />
        </div>

        <div className={styles.wrapper}>
            <div className={styles.imgContainer}>
                {images.map((img, i)=>(
                    <Image src={img} key={i} alt="" width="300" height="300" style={{borderRadius:120}} />

                ))}

            </div>

        </div>

        <div className={styles.arrowContainer} style={{right:0}}>
            <Image src="/images/arrow2.png" alt="" layout="fill" />
        </div>
    </div>
  )
}

export default Featured