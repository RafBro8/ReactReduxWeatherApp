import { FETCH_WEATHER } from "../actions/index";

export default function (state = [], action) {
    //console.log('Action received', action);

    switch (action.type) {
        case FETCH_WEATHER:
            return state.concat([action.payload.data]);
            //concat returns new Array state
            // ES6 Syntax  return [action.payload.data, ...state];
            //we mainly care about 'payload.data' in return values
    }

    return state;
}