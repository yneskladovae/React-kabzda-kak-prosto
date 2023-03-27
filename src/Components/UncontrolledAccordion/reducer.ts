export type StateType = {
    collapsed: boolean
}

const reducer = (state: StateType, action: ActionsTypes): StateType =>  {
    switch (action.type) {
        case "TOGGLE-COLLAPSED": {
            return {...state, collapsed: !action.payload.collapsed}
        }
        default:
            return state;
    }
}

export  type ActionsTypes = ReturnType<typeof toggleCollapsedAC>

export const toggleCollapsedAC = (collapsed: boolean) => {
    return {
        type: "TOGGLE-COLLAPSED",
        payload: {
            collapsed
        }
    } as const
}


export default reducer;
