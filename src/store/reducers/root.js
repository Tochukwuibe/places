import { Types } from '../actions/root.actions';
const initialState = {
    places: [],
    selectedPlace: null
}



export const placesReducer = (state = initialState, { type, payload }) => {



    switch (type) {
        case Types.AddPlace: {
            return {...state, places: state.places.concat(payload)}
        }

        case Types.deletePlace: {
            return {...state, selectedPlace: null, places: state.places.filter(place => place.key !== payload)}
        }

        case Types.selectPlace: {
            return {...state,  selectedPlace: payload}
        }

        default: {
            return state;
        }
    }
}