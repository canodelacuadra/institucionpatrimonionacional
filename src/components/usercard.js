// src/components/UserCard.js
import React from "react";

const UserCard = ({ name, age, isOnline }) => {
    return (
        <div className="user-card">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Status: {isOnline ? "Online" : "Offline"}</p>
        </div>
    );
};

export default UserCard;