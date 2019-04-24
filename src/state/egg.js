const PAINT = 'egg/PAINT'

export const paintActionCreator = () => ({
    type: PAINT,
    
    
})

const initialState = {
    isPainted: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PAINT:
            return {
                ...state,
                isPainted: !action.isPainted,
                
            }
           

        default:
            return state

    }
}