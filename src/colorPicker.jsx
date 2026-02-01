import React, {useState} from 'react';
import './ColorPicker.css';
function ColorPicker() {
    const [color, setColor] = useState("#000000ff");

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return (

        <>
            <div className="container">
                <h1>Color Picker</h1>
                <div className="colorPalet" style={{ backgroundColor: color}}>
                    <p>Color Code: {color}</p>
                </div>

                <label> Select a Color</label>
                <input type="color" value ={color} onChange={handleColorChange} />




            </div>

        </>
    );
}
export default ColorPicker;