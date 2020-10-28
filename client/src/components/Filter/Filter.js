import React, { Component } from "react";
import "./Filter.scss";

class Filter extends Component {
  render() {
    return (
      <div className="filter-container">
        <div className="filter">
          <span className="display-text">Supplier</span>
          <select className="dropdown">
            <option value="0">All Suppliers</option>
            <option value="1">Audi</option>
            <option value="2">BMW</option>
            <option value="3">Citroen</option>
            <option value="4">Ford</option>
            <option value="5">Honda</option>
            <option value="6">Jaguar</option>
            <option value="7">Land Rover</option>
            <option value="8">Mercedes</option>
            <option value="9">Mini</option>
            <option value="10">Nissan</option>
            <option value="11">Toyota</option>
            <option value="12">Volvo</option>
          </select>
          <button className="reset-btn">
            <i className="fa fa-close"></i> Reset Filters
          </button>
        </div>
      </div>
    );
  }
}

export default Filter;
