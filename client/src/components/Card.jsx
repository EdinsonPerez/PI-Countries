import { Link } from 'react-router-dom';
import React from "react";
import style from './card.css';


export default function Card({name, id, flags}) {
    return(
        <div className={style.card}>
            <Link to={`/${id}`}>
            <img src={flags} className={style.card}/>
            <h3>{name}</h3>
            </Link>
        </div>
    );
}