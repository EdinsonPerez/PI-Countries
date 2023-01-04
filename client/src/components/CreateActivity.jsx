import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import { postActivity, getNameCountries } from '../actions';

export default function ActivityCreate(){
    const dispatch = useDispatch()
    const history = useHistory()
    const namecountries = useSelector((state)=> state.namecountries)
    //const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name:"",
        description:"",
        difficulty:"",
        duration:"",
        season:"",
        country: []
     })
     
     function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })

console.log(input)
    }

    // function handleCheck(e){
    //     if (e.target.ckecked){
    //         setInput({
    //             ...input,
    //             season : e.target.value
    //         })
    //     }
    // }

    function handleSelectSeason(e){
          setInput({
                ...input,
                season : e.target.value
            })
        }
    


    function handleSelect(e){
        setInput({
           ...input,
           country: [...input.country, e.target.value]
            })
    }





    function handleSubmit(e){
        e.preventDefault();
        console.log(input)
        dispatch(postActivity(input))
        alert("Activity creado!!!")
        setInput({
            name:"",
        description:"",
        difficulty:"",
        duration:"",
        season:"",
        country: []
    
        })
        history.push('/home')
    }
      
    useEffect(()=> {
        dispatch(getNameCountries());
    },[]);
    
    
    return(
    <div>
            <Link to= '/home'><button>Volver</button></Link>
            <h1>Crear Activity</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <label>Nombre:</label>
                    <input 
                    type="text" 
                    value= {input.name}
                    name= "name"
                   onChange={(e)=> handleChange(e)}
                    />
                    
                </div>
                <div>
                    <label>Description:</label>
                    <input 
                    type="text" 
                    value= {input.description}
                    name= "description"
                    onChange={(e)=> handleChange(e)}
                    />
                    
                </div>
                <div>
                    <label>Difficulty:</label>
                    <input 
                    type="text" 
                    value= {input.difficulty}
                    name="difficulty"
                   onChange={(e)=> handleChange(e)}
                    />
                </div>
                <div>
                    <label>Duration:</label>
                    <input 
                    type="num" 
                    value= {input.duration}
                    name="duration"
                   onChange={(e)=> handleChange(e)}
                    />
                </div>
                <div>
                <select onChange={e => handleSelectSeason(e)}>
<option value="All">SELECT SEASON</option>
<option value='Primavera'>Primavera</option>
<option value='Verano'>Verano</option>
<option value= 'Otoño'>Otoño</option>
<option value= 'Invierno'>Invierno</option>
    </select>


                    {/* <label>Season:</label>
                    <label><input 
                    type="checkbox" 
                    name="Verano"
                    value= "Verano"
                  onChange={(e)=> handleCheck(e)}
                  />Verano</label>
                  <label><input 
                    type="checkbox" 
                    name="Otoño"
                    value= "Otoño"
                   onChange={(e)=> handleCheck(e)}
                  />Otoño</label>
                  <label><input 
                    type="checkbox" 
                    name="Invierno"
                    value= "Invierno"
                   onChange={(e)=> handleCheck(e)}
                  />Invierno</label>
                  <label><input 
                    type="checkbox" 
                    name="Primavera"
                    value= "Primavera"
                   onChange={(e)=> handleCheck(e)}       
                  />Primavera</label>   */}
                </div>
                
                     <select onChange={(e)=> handleSelect(e)}>
                        {namecountries.map((coun)=> (
                            <option key={coun.id} value={coun.name}>{coun.name}</option>
                            ))}
                    </select>
                     <ul><li >{input.country.map(e => e + " ,")}</li ></ul>
                    <button type='submit'>Crear Activity</button>
            </form>
       
    </div>
    )
        }


     
     
     
     
     
     
    