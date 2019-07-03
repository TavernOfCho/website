import React from "react";
import SavedCharForm from "../components/form/SavedCharForm";

export default class ProfileScreen extends React.Component {

  render() {

    return (
      <div className="CharScreen">
        <SavedCharForm/>
      </div>
    );
  }
}
