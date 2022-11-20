import "./dogCard.css"

function Dog(props) {
    return (
        <div className="dogCard">
            <h3>Name: {props.item.name}</h3>
            <p> Breed: {props.item.breed} </p>
            <p> Sex: {props.item.sex} </p>
            <p> Weeks in shelter: {props.item.time} </p>
            <p> Price: {props.item.price} </p>
            <img src={props.item.image} />
            <button onClick={() => { props.addToCart(props.item) }}>Save for Later</button>
            {/* <button onClick={() => { props.removeFromCart(props.item) }}>Unsave</button> */}
        </div>
    );
}

export default Dog;