import React from 'react'
import './StrenghtBar.css';

const strenght = (password) => {
    var strength = 0;
    if (password.length > 7) {
        strength += 1;
    }


    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
        strength += 1;
    }

    if (password.match(/\d/)) {
        strength += 1;
    }

    if (password.match(/[^a-zA-Z\d]/)) {
        strength += 1;
    }
    const Score = (strength * 25);
    return Score;
}

function colorPicker(score) {
    let score1 = score / 25;
    switch (score1) {
        case 1:
            return "#E22800";
        case 2:
            return "#E28C00";
        case 3:
            return "#F7C703 ";
        case 4:
            return "#1AE505";
        default:
            return "#212121";
    }
}

const StrenghtBar = ({ password }) => {

    const ChangeStyle = () => ({
        width: strenght(password) + '%',
        background: colorPicker(strenght(password)),
        transition: '0.75s'
    })

    return (
        <div className="strenght">
            <div id="strenght_bar" style={ChangeStyle()} ></div>
        </div>

    )
}

export default StrenghtBar
