import {FILTER_BY_CONTINENT, GET_COUNTRIES, ORDER_BY_NAME, ORDER_BY_POPULATION, FILTER_BY_ACTIVITY, SEARCH_COUNTRIES, POST_ACTIVITY, GET_DETAIL} from "../actions";


const initialState = {
    countries: [],
    allCountries: [],
    filteredCountries: [],
    activity: [],
    namecountries: [],
    detail: [],
    nameactivity: []
}

export default function reducer(state= initialState, action) {
    switch(action.type){
        case GET_COUNTRIES:
         return {
            ...state,
            countries: action.payload,
            allCountries: action.payload
         }

         case FILTER_BY_CONTINENT:
            const allCountries = state.allCountries
            const statusFiltered = action.payload === 'All' ? allCountries : allCountries.filter(el => el.continent === action.payload)
         return {
            ...state,
            countries: statusFiltered
         }

         case ORDER_BY_NAME:
            let orderedCountries = action.payload === 'asc' ?
            state.countries.sort(function (a, b) {
                if (a.name.toLowerCase() > b.name.toLowerCase() ) {
                return 1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase() ) {
                return -1;
              }
              return 0;
            }) :
            state.countries.sort(function (a, b) {
                if (a.name.toLowerCase() > b.name.toLowerCase() ) {
                return -1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase() ) {
                return 1;
            }
            return 0;
          })
          return {
            ...state,
            countries: orderedCountries
          }

          case ORDER_BY_POPULATION:
            let orderedPopulation = action.payload === 'High' ?
            state.countries.sort(function (a, b) {
                if (a.population > b.population ) {
                return 1;
              }
              if (b.population > a.population ) {
                return -1;
              }
              return 0;
            }) :
            state.countries.sort(function (a, b) {
                if (a.population > b.population ) {
                return -1;
              }
              if (b.population > a.population ) {
                return 1;
            }
            return 0;
          })
          return {
            ...state,
            countries: orderedPopulation
          }

      case FILTER_BY_ACTIVITY:
        return {
          ...state,
          activity: action.payload
       }

       case SEARCH_COUNTRIES:
        return{
            ...state,
            countries: action.payload
        }

        case 'GET_NAME_COUNTRIES':
          return{
            ...state,
            namecountries: action.payload
          }

          case 'GET_NAME_ACTIVITY':
          return{
            ...state,
            nameactivity: action.payload
          }

        case POST_ACTIVITY:
          return{
              ...state,
          }

          case  GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            }

         default:
             return state
    }
}




