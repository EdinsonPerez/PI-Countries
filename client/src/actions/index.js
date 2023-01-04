import axios from 'axios';
import ActivityOptions from '../components/Activity';
export const GET_COUNTRIES = 'GET_COUNTRIES'
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION'
export const FILTER_BY_ACTIVITY = 'FILTER_BY_ACTIVITY'
export const POST_ACTIVITY = 'POST_ACTIVITY'
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES'
export const GET_DETAIL = 'GET_DETAIL'



 export function getCountries(){
    return function(dispatch){
     axios.get('http://localhost:3001/api/country/')
    .then((countries) => {
    dispatch({
    type: GET_COUNTRIES,
    payload: countries.data
    })
    })
    .catch((error) => {
      console.log(error)
   })
}
 }


 export function getNameCountries() {
   return async function(dispatch) {
      var info = await axios("http://localhost:3001/api/country/", {

      });
      return dispatch({type:"GET_NAME_COUNTRIES", payload: info.data});
   };
 }

//  export function getNameActivity() {
//    return async function(dispatch) {
//       var info = await ActivityOptions()
    
//       return dispatch({type:"GET_NAME_ACTIVITY", payload: info.data});
//    };
//  }

 

 export function filterCountriesByContinent(payload){
   return {
   type: FILTER_BY_CONTINENT,
   payload
   }
   }

   export function orderByName(payload){
      return {
         type: ORDER_BY_NAME,
         payload
      }
    }

    export function orderByPopulation(payload){
      return {
         type: ORDER_BY_POPULATION,
         payload
      }
    }

    export function filterCountriesByActivity(payload){
      return {
      type: FILTER_BY_ACTIVITY,
      payload
      }
      }
 
      export function postActivity(payload) {
         return async function (dispatch){
      const response = await axios.post("http://localhost:3001/api/activity",payload)
      console.log(response)
      return response;
         }
      }

      export function searchCountries(search) {
         return function(dispatch){
            axios.get('http://localhost:3001/api/country?name=' + search) 
         .then((countries) => {
               dispatch({
                   type: SEARCH_COUNTRIES,
                   payload: countries.data
              })
         })
          .catch((error) => {
               console.log(error)
            })
       }
      }

      export function getDetail(id){
         return async function(dispatch){
         try{
            
            var json = await axios.get(`http://localhost:3001/api/alpha/${id}`);
            return dispatch({
               type: GET_DETAIL,
               payload: json.data
            })
           
         }catch(error){
            console.log(error)
         }
      }
   }