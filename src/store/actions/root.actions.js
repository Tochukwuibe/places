import { DATABASE_ENDPOINT } from "../../utils/config";
import firebase from 'react-native-firebase';

export const Types = {
    AddPlace: 'Add Place',
    deletePlace: 'Delete Place',
    selectPlace: 'Select Place'
}




export const Actions = {
    addPlace: (place, cb) => {


        return async (dispatch) => {

            console.log('in diapatch new place', place)
            let uri = place.image.uri;

            if (!!uri) {
                console.log
                const ref = firebase.storage().ref(`places/images`)
                await ref.putFile(uri);
                uri = await ref.getDownloadURL();
            }

            const newPlace = {...place, image: {uri: uri}}

            await firebase.database().ref(`places`).push(newPlace)
            cb();
            dispatch({ type: Types.AddPlace, payload: newPlace })

        }
    },
    deletePlace: (key) => ({ type: Types.deletePlace, payload: key }),
    selectPlace: (place) => ({ type: Types.selectPlace, payload: place })
}