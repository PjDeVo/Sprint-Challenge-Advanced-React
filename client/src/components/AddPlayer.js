import React, { useState } from "react";
import useForm from "../components/useFormHook";
import PlayerCard from "./PlayerId";

function AddForm(props) {
  const data = props.players;
  const [playerList, setPlayerList] = useState(data);
  // const [formNameValue, setFormNameValue] = useState("");
  // const [formCountryValue, setFormCountryValue] = useState("");

  const [values, changeHandler] = useForm(data);
  // console.log(data);
  // console.log("here are the values", values);
  // console.log("here is props.players", players);
  // console.log("testing state", playerList);

  const handleFormSubmit = event => {
    event.preventDefault();
    setPlayerList(values);
  };

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
      <form className="new-player-form" onSubmit={handleFormSubmit}>
        <label>Add New Player Name</label>
        <input
          data-testid="name-input"
          name="name"
          value={values.name}
          onChange={changeHandler}
          placeholder="Add New Player here"
          className="add-input"
        />
        <label>Add New Player Country</label>
        <input
          data-testid="country-input"
          name="country"
          value={values.country}
          onChange={changeHandler}
          placeholder="Add New Player's Country Here"
          className="add-country-input"
        />

        <button> Submit</button>
      </form>

      <PlayerCard players={playerList} />
    </div>
  );
}

export default AddForm;
