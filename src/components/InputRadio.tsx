import { useReducer } from "react";

type State = { gender: string };
type Action = { type: "CHANGE"; payload: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "CHANGE":
      return { gender: action.payload };
    default:
      return state;
  }
}

export default function InputRadio() {
  const [state, dispatch] = useReducer(reducer, { gender: "Nam" }); // mặc định là Nam

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGE", payload: e.target.value });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Chọn giới tính</h1>

      <label>
        <input
          type="radio"
          name="gender"
          value="Nam"
          checked={state.gender === "Nam"}
          onChange={handleChange}
        />
        Nam
      </label>

      <label style={{ marginLeft: "15px" }}>
        <input
          type="radio"
          name="gender"
          value="Nữ"
          checked={state.gender === "Nữ"}
          onChange={handleChange}
        />
        Nữ
      </label>

      <label style={{ marginLeft: "15px" }}>
        <input
          type="radio"
          name="gender"
          value="Khác"
          checked={state.gender === "Khác"}
          onChange={handleChange}
        />
        Khác
      </label>

      <p>Bạn đã chọn: <b>{state.gender}</b></p>
    </div>
  );
}
