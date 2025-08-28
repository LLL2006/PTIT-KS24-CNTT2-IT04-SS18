import { useReducer } from "react";

interface IFormState {
    count: number;
}

const initialState: IFormState = {
    count : 0,
};

type ActionForm = {type: "INCREMENT"};
const reducer = (state: IFormState, action: ActionForm) => {
    switch(action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1,
            }
        default: 
            return state;
    }
}

export default function Increase() {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{margin: "0 1em"}}>
        <span>{state.count}</span><br />
        <button onClick={() => dispatch({type: "INCREMENT"})}>Increase</button>
    </div>
  )
}
