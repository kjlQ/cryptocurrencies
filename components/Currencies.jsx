import React , {useEffect , useState} from "react";

export default function Currencies() {
    const [currency , setCurrency] = useState([])

    useEffect( ()=> {
        const fetchData = async () => {
            await fetch('https://api.coinstats.app/public/v1/coins?&limit=5&currency=USD')
                .then(response => response.json())
                .then(response => setCurrency(response.coins))
                .catch(err => console.error(err));
        }
        fetchData()
    },[])


    if(!currency.length) {
        return (
            <div>
                wait
            </div>
        )
    }

    return(
        <div>
            {currency.map(item=><li>{item.name}</li>)}
        </div>
    )
}