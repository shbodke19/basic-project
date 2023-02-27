import React, { useState } from "react";

const FetchForm = () => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");

  const saveUser = () => {
    console.log({ title, color, price });
    let data = { title, color, price };
    fetch("http://localhost:3200/Lists", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.log("result", result);
      result.json().then((resp) => {
        console.log("resp", resp);
      });
    });
  };

  return (
    <>
      <h1>POST API </h1>
      <input
        type="text"
        value={title}
        name="title"
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <br />
      <br />
      <input
        type="text"
        value={color}
        name="color"
        onChange={(e) => setColor(e.target.value)}
      />{" "}
      <br />
      <br />
      <input
        type="text"
        value={price}
        name="price"
        onChange={(e) => setPrice(e.target.value)}
      />{" "}
      <br />
      <br />
      <button type="button" onClick={saveUser}>
        Submit
      </button>
    </>
  );
};

export default FetchForm;
