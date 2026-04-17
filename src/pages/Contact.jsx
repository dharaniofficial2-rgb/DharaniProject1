import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function Contact() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = () => {
    alert("Message Sent Successfully!");
    dispatch({ type: "RESET" });
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>

      <input
        placeholder="Name"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_FIELD", field: "name", value: e.target.value })
        }
      />

      <input
        placeholder="Email"
        value={state.email}
        onChange={(e) =>
          dispatch({ type: "SET_FIELD", field: "email", value: e.target.value })
        }
      />

      <textarea
        placeholder="Message"
        value={state.message}
        onChange={(e) =>
          dispatch({ type: "SET_FIELD", field: "message", value: e.target.value })
        }
      />

      <button className="btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Contact;