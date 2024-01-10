import React, { useState } from "react";

const Home = () => {
  const [lista, setLista] = useState([]);
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function handleKeyPress(e) {
    if (e.key == "Enter") {
      3;
      e.preventDefault();
      setLista((prev) => prev.concat([inputText]));
      setInputText("");
    }
  }

  return (
    <div className="text-center d-flex justify-content-center">
      <div className="flex-column d-flex justify-content-center col-5">
        <h1 className="text-center mt-5">La Listilla</h1>
        <form className="control">
          <div>
            <input
              onChange={handleChange}
              value={inputText}
              onKeyDown={handleKeyPress}
              type="text"
              className="form-control"
            />
          </div>
        </form>

        <ul className="list-group m-1 paper rounded-0">
          {lista.length == 0 ? (
            <li className="list-group-item d-flex align-items-center">
              A llenar la lista
            </li>
          ) : (
            lista.map((nombre, i) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={i}
              >
                {nombre}
                <button
                  onClick={() =>
                    setLista(lista.filter((l, index) => i != index))
                  }
                  className="btn"
                >
                  <i id="trash" className="fas fa-trash-alt text-white"></i>
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Home;
