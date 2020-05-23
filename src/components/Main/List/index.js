import React from "react";
import axios from "axios";

import "./List.scss";

import Placeholder from "../../../assets/images/Raspberry_in_Bowl.jpg";
import { apiKey } from "../../../apiKey";

const apiLink =
  "https://test-places-response.s3.eu-west-3.amazonaws.com/response.json";

export class List extends React.Component {
  constructor() {
    super();
    this.state = {
      rests: [],
    };
  }
  async componentDidMount() {
    axios
      .get(apiLink)
      .then((res) => {
        this.setState({ rests: res.data.results });
        console.log(res.data.results[0].opening_hours.open_now);
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <main>
        {this.state.rests.map((rest) => (
          <li className="ListItem" key={rest.id}>
            <div className="textbox">
              <h2>{rest.name}</h2>
              <p className="adress">{rest.formatted_address}</p>
              <p>
                Open now?
                {rest.opening_hours.open_now ? (
                  <span style={{ fontWeight: "bold" }}> Yes</span>
                ) : (
                  <span style={{ fontWeight: "bold" }}> No</span>
                )}
              </p>
            </div>
            <img
              src={
                "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" +
                rest.photos[0].photo_reference +
                "&key=" +
                apiKey
              }
              alt="restaurant"
            />
          </li>
        ))}
      </main>
    );
  }
}

export default List;
