import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import  { getDetail} from "../actions";
import { useEffect, useState} from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";
import style from './card.css';


export default function Detail() {

const [character, setCharacter] = useState(null)
let {id} = useParams()
useEffect(() => {
    axios.get('http://localhost:3001/api/country/' + id)
    .then((response)=>{
        setCharacter(response.data)
    })
    return () => {
        setCharacter(null)
    }
},[] )




return <div>
    {
        character ?
<>
        <Link to= '/home'><button>Volver</button></Link>
<h3>{character[0].name.common}</h3>
<h3>{character[0].cca3}</h3>
<img src={character[0].flags[0]} className={style.card}/>
</> :
<div>Loading</div>
}
</div>


}

 //export default function Detail(props) {
//     const dispatch = useDispatch();
//     useEffect(()=> {
//         dispatch(getDetail(props.match.params.id));
//     },[dispatch]);
//     const details = useSelector ((state)=> state.detail);
//     console.log(details)
    
//     return (
//         <div>
//             {
//           details.length>0 ?
//         <div>
//             <h1>Es {details[0].name.common}</h1>
//             <h2>id:{details[0].id}</h2>
//             {/* <img src={myCountry[0].flags}/>
//             <h2>id:{myCountry[0].cca3}</h2>
//             <h2>continente:{myCountry[0].continents}</h2>
//             <h2>poblacion:{myCountry[0].poppulation}</h2> */}
//           </div> : <p>Loading...</p>
//             } 
//             <Link to='/home'>
//                 <button>Volver</button>
//             </Link>
//         </div>
//     )


//}