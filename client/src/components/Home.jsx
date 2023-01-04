import React from "react";
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getCountries, filterCountriesByContinent, orderByName, orderByPopulation, filterCountriesByActivity } from '../actions';
import {Link } from "react-router-dom";
import Paginado from './Paginado';
import ActivityOptions from "./Activity";
import SearchBar from "./SearchBar";
import Card from './Card';

export default function Home(){

const nameactivity = useSelector((state)=> state.nameactivity)
const distpach = useDispatch()
const allCountries = useSelector ((state) => state.countries)
const allActivity = useSelector((state)=> state.activity);
const [orden, setOrden]= useState('')
const [currentPage,setCurrentPage] = useState(1)
const [charactersPerPage,setCharactersPerPage] = useState(10)
const indexOfLastCharacter = currentPage * charactersPerPage //10
const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage //0
const currentCharacters = allCountries.slice(indexOfFirstCharacter, indexOfLastCharacter)

const paginado = (pageNumber) => {
setCurrentPage(pageNumber)
}


useEffect (()=>{
    distpach(getCountries());
},[distpach])
console.log(allCountries)

function handleOnClick(e){
    e.preventDefault();
    distpach(getCountries());
}

function handleSort(e){
    e.preventDefault();
    distpach(orderByName(e.target.value))
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`)
};


function handleSortByPopulation(e){
    e.preventDefault();
    distpach(orderByPopulation(e.target.value))
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`)
};

function handleFilterContinent(e){
    distpach(filterCountriesByContinent(e.target.value));
};

function handleFilterActivity(e){
    distpach(filterCountriesByActivity(e.target.value));
}

return (
<div>
    <Link to= '/activity'>Crear Activity</Link>
    <h1>COUNTRIES OF THE WORLD</h1>
    <button onClick={handleOnClick}>Recargar Countries</button>
        
    

<div>
    <select onChange={e => handleFilterContinent(e)}>
<option value="All">Filtered by Continent</option>
<option value='North America'>America del Norte</option>
<option value='South America'>America del Sur</option>
<option value= 'Africa'>Africa</option>
<option value= 'Asia'>Asia</option>
<option value= 'Oceania'>Oceania</option>
<option value= 'Europe'>Europa</option>
<option value= 'Antarctica'>Antartica</option>
    </select>

   
    <select onChange={e => handleSort(e)}>
<option value="All">Order by Alphabetical</option>
<option value="asc">ASCENDENTE</option>
<option value="desc">DESCENDENTE</option>
    </select>

    <select onChange={e => handleSortByPopulation(e)}>
<option value="All">Order by Population</option>
<option value="High">Menor a Mayor</option>
<option value="Low">Mayor a Menor</option>
    </select>

               
<select>
<option value="activity">All Activity</option>
<ActivityOptions allActivity={allActivity}/>
</select>
    
<select onChange={(e)=> handleFilterActivity(e)}>
     {nameactivity.map((act)=> (
    <option key={act.id} value={act.name}>{act.name}</option>
     ))}
</select>
    


    <Paginado
          charactersPerPage={charactersPerPage}
          allCountries={allCountries.length}
          paginado = {paginado}
          />

<SearchBar/>  
{currentCharacters?.map((el) => {
    return(
        <div key={el.id}>
            <Link to={"/home/"}>
            <Card flags={el.flags} name={el.name} id={el.id}/>
            </Link>
        </div>
    );
})

}

</div>
</div>


)

} 