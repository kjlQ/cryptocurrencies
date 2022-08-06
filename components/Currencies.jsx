import React, {useEffect} from "react";
import styles from '../styles/style.module.scss'
import Coin from "./Coin";
import {useDispatch, useSelector} from "react-redux";

const Currencies = () => {
    const {count,currencies} = useSelector(state=>state)
    const dispatch = useDispatch()
    useEffect(()=> {
        const fetchData = async () => {
            await fetch('https://api.coinstats.app/public/v1/coins?limit=10&currency=USD')
                .then(response => response.json())
                .then(response => dispatch({type:'CURRENCIES',payload:response.coins}))
                .catch(err => console.error(err));
        }
        fetchData()
        setTimeout(() => {
            dispatch({type: "COUNTER", payload: 1})
        }, 10000);
    },[count,dispatch])
    return(
       <>
           <div className={styles.table}>
               <div className={styles.table__container}>
                   <table className={styles.table__items}>
                       <thead>
                       <tr>
                           <th></th>
                           <th>Name</th>
                           <th>Price</th>
                           <th>Change 1d</th>
                           <th>Market Cap</th>
                           <th></th>
                       </tr>
                       </thead>
                       <tbody>
                       {currencies && currencies.map(item=><Coin key={item.id} {...item} />)}
                       </tbody>
                   </table>
               </div>
           </div>
       </>
    )
}
export default Currencies