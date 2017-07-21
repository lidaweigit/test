function reducer(state, action) {
    switch(action.type) {
    	
    	//更改标题
        case "CHANGE_TITLE":
            return Object.assign({}, state, {
                title: action.title
            })
        default:
            return state;
    }
}

export default reducer;
