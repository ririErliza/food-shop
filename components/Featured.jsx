import styles from "../styles/Featured.module.css"
import Image from "next/image"

const Featured = () => {
    const images=[
        "/images/featured1.png",
        "/images/featured2.png",
        "/images/featured3.png"
    ]
  return (
    <div className={styles.container}>
        <div className={styles.arrowContainer} style={{left:0}}>
            <Image src="/images/arrow1.png" alt="" layout="fill" />
        </div>

        <div className={styles.wrapper}>
            <div className={styles.imgContainer}>
                {images.map((img, i)=>(
                    <Image src={img} key={i} alt="" layout="fill" objectFit="contain"/>

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