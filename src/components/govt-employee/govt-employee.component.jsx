import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import { isMobileOnly } from "react-device-detect";
import { toDataURL } from "qrcode";

class GovtEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      weight: "",
      quality: "",
      type: "", /*Hybrid of Jawari*/
      pricePerKg: "",
      latitude: "",
      longitude: "",
      timestamp: "",
      qrUrl: "",
    };
  }

  generateQr = () => {
    const { name, weight, quality, type, pricePerKg } = this.state;
    const data = { name, weight, quality, type, pricePerKg };

    toDataURL(data, (err, src) => {
      this.setState({ qrUrl: src });
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  getLocation = async () => {
    await navigator.geolocation.getCurrentPosition((x) => {
      this.setState(
        {
          latitude: x.coords.latitude,
          longitude: x.coords.longitude,
          timestamp: x.timestamp,
        },
      );
    });
  };

  render() {
    this.getLocation();
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Government Employee enters data here</h1>

        <form
          style={{ width: (isMobileOnly) ? "70%" : "30%" }}
          onSubmit={this.handleSubmit}
        >
          <FormInput
            type="text"
            name="text"
            value={this.name}
            handleChange={this.handleChange}
            label="Name of the seed"
            required
          />
          <FormInput
            type="text"
            name="text"
            value={this.quality}
            handleChange={this.handleChange}
            label="Quality of seed"
            required
          />
          <FormInput
            type="text"
            name="text"
            value={this.weight}
            handleChange={this.handleChange}
            label="Weight of seed bag"
            required
          />
          <FormInput
            type="text"
            name="text"
            value={this.type}
            handleChange={this.handleChange}
            label="jawari/hybrid"
            required
          />
          <FormInput
            type="text"
            name="text"
            value={this.pricePerKg}
            handleChange={this.handleChange}
            label="price per kg"
            required
          />
        </form>
      </div>
    );
  }
}

export default GovtEmployee;
