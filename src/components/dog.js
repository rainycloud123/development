function Dog(props) {
    return (
    <div>
        <h3>Name: {props.item.name}</h3>
        <p> Breed: {props.item.breed} </p>
        <p> Sex: {props.item.sex} </p>
        <img src = {props.item.image} />
        {/* <button onClick={() => {props.addToCart(props.item)}}>add to cart</button> */}
    </div>
    );
}

export default Dog;