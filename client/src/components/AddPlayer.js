import React, { useState } from "react";
import useForm from "../components/useFormHook";
import PlayerCard from "./PlayerId";

function AddForm(props) {
  const data = props.players;
  // const [playerList, setPlayerList] = useForm(data);
  // const [formNameValue, setFormNameValue] = useState("");
  // const [formCountryValue, setFormCountryValue] = useState("");
  const [values, changeHandler, handleSubmit] = useForm(
    data
    // console.log("hi")
  );
  console.log(data);
  console.log(values);
  // console.log("here is props.players", players);
  // console.log("testing state", playerList);

  // const handleFormSubmit = event => {
  //   event.preventDefault();
  //   // setPlayerList(formValue);

  //   // console.log("here is the submit console", playerList);
  // };

  // const handleFormNameEvent = e => {
  //   setFormNameValue(e.target.value);
  // };
  // const handleFormCountryEvent = e => {
  //   setFormCountryValue(e.target.value);
  // };
  return (
    <div>
      <form className="new-player-form" onSubmit={handleSubmit}>
        <label>Add New Player Name</label>
        <input
          name="name"
          value={values.name}
          onChange={changeHandler}
          placeholder="Add New Player here"
          className="add-input"
        />
        <label>Add New Player Country</label>
        <input
          name="country"
          value={values.country}
          onChange={changeHandler}
          placeholder="Add New Player's Country Here"
          className="add-country-input"
        />

        <button> Submit</button>
      </form>
      <PlayerCard players={data} />
    </div>
  );
}

export default AddForm;
