import { useState } from "react";
// import React {useState} from "react";

function MyComponent(){
    const [name, setName] = useState("Surojit");
    const [Comment, setComment] = useState("");
    const [Payment, setPayment] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }








    return(

        <>
        
        <input value={name} onChange={handleNameChange} />
        <h2>Your name is: {name}</h2>

        <input type="text" value={Comment} onChange={handleCommentChange} />
        <p>Comment: {Comment}</p>

        <select value={Payment} onChange={handlePaymentChange} id="">
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>

            <option value="MasterCard">MasterCard</option>
            <option value="PayPal">PayPal</option>

        </select>
        <p>Payment Method: {Payment}</p>



        </>


    );









}

export default MyComponent;





