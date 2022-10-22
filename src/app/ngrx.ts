import { Action } from "@ngrx/store";

class maximum implements Action {
    readonly type = "add";
}

class minimum implements Action {
    readonly type = "remove";
}

const INITIAL_STATE = {
    counter: 0
};

export const reducer = (state = INITIAL_STATE, action: Action) => {

    switch (action.type) {
        case "add":
            return { ...state, counter: state.counter + 1 }
        case "remove":
            return { ...state, counter: state.counter - 1 }
        default:
            return state
    }
}