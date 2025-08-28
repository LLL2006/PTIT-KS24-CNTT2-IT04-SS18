import { useReducer } from "react";

type Todo = {
  id: number;
  text: string;
};

type State = {
  todos: Todo[];
  inputText: string;
};

type Action = 
  | { type: "SET_INPUT"; payload: string }
  | { type: "ADD_TODO"; payload: string }
  | { type: "DELETE_TODO"; payload: number };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, inputText: action.payload };
    case "ADD_TODO":
      if (!action.payload.trim()) return state;
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload.trim(),
          }
        ],
        inputText: ""
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
}

export default function TodoApp() {
  const [state, dispatch] = useReducer(reducer, { 
    todos: [], 
    inputText: "" 
  });

  const handleInputChange = (e: any) => {
    dispatch({ type: "SET_INPUT", payload: e.target.value });
  };

  const handleAddTodo = () => {
    dispatch({ type: "ADD_TODO", payload: state.inputText });
  };

  const handleDeleteTodo = (id: number) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div style={{ 
      maxWidth: "600px", 
      margin: "50px auto", 
      padding: "20px",
      fontFamily: "Arial, sans-serif"
    }}>
      <input
        type="text"
        value={state.inputText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Nhập tên công việc"
        style={{
          width: "100%",
          padding: "15px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          fontSize: "16px",
          marginBottom: "15px",
          boxSizing: "border-box",
          outline: "none"
        }}
      />

      <div style={{ 
        border: "1px solid #ccc", 
        borderRadius: "5px",
        backgroundColor: "white"
      }}>
        {state.todos.length === 0 ? (
          <div style={{
            padding: "20px",
            textAlign: "center",
            color: "#999",
            fontSize: "16px"
          }}>
            Chưa có công việc nào
          </div>
        ) : (
          state.todos.map((todo, index) => (
            <div
              key={todo.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "15px 20px",
                borderBottom: index < state.todos.length - 1 ? "1px solid #ccc" : "none",
                fontSize: "16px"
              }}
            >
              <span style={{ color: "#333", flex: 1 }}>{todo.text}</span>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                style={{
                  backgroundColor: "#dc3545",
                  color: "white",
                  padding: "8px 15px",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "14px",
                  cursor: "pointer",
                  marginLeft: "15px"
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#c82333";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#dc3545";
                }}
              >
                Xóa
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}