import React from "react";
import axios from "axios";

import "./List.scss";

import Placeholder from "../../assets/images/Raspberry_in_Bowl.jpg";

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
              <p className="address">{rest.formatted_address}</p>
              <p className="isOpen">
                {rest.opening_hours.open_now ? (
                  <span className="open">Open</span>
                ) : (
                  <span className="closed">Closed</span>
                )}
              </p>
            </div>
            <img src={Placeholder} alt="restaurant" />
          </li>
        ))}
      </main>
    );
  }
}

export default List;