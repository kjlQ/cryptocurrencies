import Image from "next/image";
import styles from "../styles/style.module.scss";

export default function Coin({icon,name,symbol,price,priceChange1d,volume,websiteUrl}) {
    return(
        <tr>
            <td className={styles.img}><Image src={icon} width="20px" height="20px" /></td>
            <td className={styles.start}>{name}<span>{symbol}</span></td>
            <td className={priceChange1d > 0 ? styles.green : styles.red }>{price}</td>
            <td className={priceChange1d > 0 ? styles.green : styles.red}>{priceChange1d}%</td>
            <td>{volume}</td>
            <td><a target={"_blank"} href={websiteUrl}>Info</a></td>
        </tr>
    )
}