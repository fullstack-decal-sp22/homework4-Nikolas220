import React, {useState} from "react";
import './styles/Square.css';

function Square(props) {
    const [square, setSquare] = useState('');
    function clicked() {
        setSquare({value: 'X'});
    }
    return (
        <button className="square" onClick = {props.onClick}>
            {props.value}
        </button>
    )
}

export default Square;