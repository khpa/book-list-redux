//state is not the app state but the stat this reducer is responsable for

export default function (state = null, action) {
    
    switch (action.type) {
        case 'BOOK_SELECTED':
        return action.payload;
        default: return state;
        
    }
    
    return state
}