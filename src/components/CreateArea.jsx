import React, { useState } from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const {value, name} = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    });
  }

  return (
    <div>
      <form onSubmit={(event) => {event.preventDefault();}}>
        <input 
          name="title" 
          placeholder="Title" 
          value={note.title}
          onChange={handleChange}
        />
        <textarea 
          name="content" 
          placeholder="Take a note..." 
          rows="3" 
          value={note.content}
          onChange={handleChange}
        />
        <button onClick={() => {
            props.onAdd(note);
            setNote({
              title: "",
              content: ""
            });
          }}
        >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;