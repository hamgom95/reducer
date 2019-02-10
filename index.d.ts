type Reducer<S, A> = (state: S, action: A) => S;

type HandlerCallback<S, A> = (state: S, action: A, initialState: S) => S;

interface Handlers<S, A> {
    [key: string]: HandlerCallback<S, A>;
    "DEFAULT"?: HandlerCallback<S, A>;
}

interface Action<T extends string> {
    type: T;
}

interface ActionWithPayload<T extends string, P extends Object> extends Action<T> {
    payload: P;
}


export function combineReducers<S, A>(...reducers: Array<Reducer<S, A>>): Reducer<S, A>;

export function createReducer<S, T extends string, A extends Action<T>>(handlers: Handlers<S, A>, initialState: S): Reducer<S,A>;
