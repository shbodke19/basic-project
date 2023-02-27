import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");

  const getList = () => {
    fetch("http://localhost:3200/Lists").then((result) => {
      result.json().then((resp) => {
        // console.log("Resp", resp);
        setData(resp);
        setTitle(resp[0].title);
        setColor(resp[0].color);
        setPrice(resp[0].price);
      });
    });
  };
  useEffect(() => {
    getList();
  }, []);

  // console.log(data);

  const deleteUser = (id) => {
    fetch(`http://localhost:3200/Lists/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        console.log("resp", res);
        getList();
      });
    });
  };

  const selectUser = (id) => {
    // console.log(data[id - 1]);
    setTitle(data[id - 1].title);
    setColor(data[id - 1].color);
    setPrice(data[id - 1].price);
  };
  return (
    <>
      <h1>Get API Call</h1>
      <table border={"2px solid red"} cellPadding={"5px"}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Color</td>
            <td>Price</td>
            <td>Remove</td>
            <td>Update</td>
          </tr>
        </thead>
        {data.map((val) => (
          <tbody key={val.id}>
            <tr>
              <td>{val.title}</td>
              <td>{val.color}</td>
              <td>{val.price}</td>
              <td>
                <button onClick={() => deleteUser(val.id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => selectUser(val.id)}>Update</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <br />
      <br />
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
      <button type="button">Submit</button>
    </>
  );
};

export default FetchData;
