import { DATABASE_ENDPOINT } from "../../utils/config";

export const Types = {
    AddPlace: 'Add Place',
    deletePlace: 'Delete Place',
    selectPlace: 'Select Place'
}




export const Actions = {
    addPlace: (place, cb) => {

    
        return (dispatch) => {

            console.log('in diapatch', place)
            const body = JSON.stringify(place);
            const method = 'POST';

            fetch(`${DATABASE_ENDPOINT}/places.json`, { method, body })
            .then((res) => res.json())
            .then((data) => {
                console.log('the data ', data);
                cb();
                dispatch({ type: Types.AddPlace, payload: place })
            })
            .catch((err) => console.log('the error ', err));

        }
    },
    deletePlace: (key) => ({ type: Types.deletePlace, payload: key }),
    selectPlace: (place) => ({ type: Types.selectPlace, payload: place })
}