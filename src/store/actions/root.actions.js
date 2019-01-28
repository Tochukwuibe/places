export const Types = {
    AddPlace: 'Add Place',
    deletePlace: 'Delete Place',
    selectPlace: 'Select Place'
}




export const Actions =  {
    addPlace: (name) => ({type: Types.AddPlace, payload: name}),
    deletePlace: (key) => ({type: Types.deletePlace, payload: key}),
    selectPlace: (place) => ({type: Types.selectPlace, payload: place})
}