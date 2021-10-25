import React, { useState } from "react";

const ToDo = () => {
  const [text, setText] = useState("");
  const [currentId, setCurrentId] = useState(0);
  const [data, setData] = useState([]);
  const [reversed, setReversed] = useState(false);

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    let newData = {
      id: currentId,
      text: text
    };
    setText("");
    setCurrentId(currentId + 1);
    setData([...data, newData]);
  };

  const reverseOrder = () => {
    setReversed(!reversed);
  };

  const getData = () => {
    if (reversed) {
      let returner = JSON.parse(JSON.stringify(data));
      return returner.reverse();
    }
    return data;
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChangeText} />
      <button onClick={handleSubmit}>Submit</button>
      <div>{reversed.toString()}</div>

      <div>
        {getData().map((datum) => {
          return (
            <div>
              <div>{datum.id}</div>
              <div>{datum.text}</div>
            </div>
          );
        })}
      </div>

      <button onClick={reverseOrder}>Reverse Order</button>
    </div>
  );
};

export default ToDo;
