import { useEffect } from "react";
import { useState } from "react";
import Bottal from "../Bottal/Bottal";
import './Bottals.css'

const Bottals = () => {
    const [ bottles, setBottales] = useState([])
    const [cart, setCart] = useState([])



    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottales(data))
    },[])

    const handleaddtocard = bottle =>{
         const newCard = [...cart, bottle];
         setCart(newCard);
    }




    return (
        <div>
            <h1>Bottale head : {bottles.length}</h1>
            <h3>Cart: {cart.length}</h3>
            <div className="bottole-item">
                {
                    bottles.map(bottle => <Bottal
                        key={bottle.id}
                        bottle={bottle}
                        handleaddtocard = {handleaddtocard}
                    ></Bottal>)
                }
            </div>
        </div>
    );
};

export default Bottals;