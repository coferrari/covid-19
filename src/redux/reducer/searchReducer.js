const initialState = {
    search: {}
}

const searchReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "Hola":
            return {
                ...state
            }
            
    
        default:
            return state;
    }
}

export default searchReducer;