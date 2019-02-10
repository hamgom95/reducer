// combine reducer functions from object
const combineReducers = (...reducers) => (state = {}, action) =>
    Object.entries(reducers).reduce(
        (nextState, [key, val]) => (nextState[key] = val(state[key], action), nextState),
        {}
    );

const createReducer = (handlers, initialState = {}) => (
    state = initialState,
    action
) => {
    if (handlers.hasOwnProperty(action.type)) {
        return handlers[action.type](state, action, initialState);
    } else if (handlers.hasOwnProperty("DEFAULT")) {
        return handlers.DEFAULT(state, action, initialState);
    } else {
        return state;
    }
};

module.exports = {
    createReducer,
    combineReducers
}
