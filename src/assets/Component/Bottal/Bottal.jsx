import './Bottal.css'

const Bottal = ({bottle , handleaddtocard}) => {
    const { name, img, price} = bottle;
    return (
        <div className='bottal'>
            <div>
                <h3>Bottal Name: {name}   </h3>
                <img src={img} alt="" />
                <h3>Bottles Price: {price} </h3>  
                <button onClick={() => handleaddtocard()}>Purchase</button>              
            </div>

        </div>
    );
};

export default Bottal;