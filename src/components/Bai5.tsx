import { useReducer } from "react";

type State = { value: string };
type Action = { type: "CHANGE"; payload: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "CHANGE":
      return { value: action.payload };
    default:
      return state;
  }
}

export default function Bai5() {
  const [state, dispatch] = useReducer(reducer, { value: "" });

  const handleChange = (e: any) => {
    dispatch({ type: "CHANGE", payload: e.target.value });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{state.value}</h1>
      <input
        type="text"
        placeholder="Input change"
        value={state.value}
        onChange={handleChange}
        style={{ padding: "5px", width: "200px" }}
      />
    </div>
  );
}
