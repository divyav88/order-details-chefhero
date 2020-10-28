import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { filterOrderDetails } from "../../store/actions/orderDetailsAction";
import "./Filter.scss";

class Filter extends Component {
  render() {
    const filterChange = (e) => {
      this.props.filterOrderDetails({
        type: e.target.id,
        value: e.target.value,
      });
    };

    const resetFilter = (e) => {
      e.target.value = "NONE";
      filterChange(e);
    };

    const uniqueSuppliers = this.props.gridData.orderDetails.map(
      (order) => order.vendorName
    );
    const suppliersArray = [...new Set(uniqueSuppliers)];

    const suppliers = suppliersArray.map((supplier) => (
      <option key={supplier} value={supplier}>
        {supplier}
      </option>
    ));

    return (
      <div className="filter-container">
        <div className="filter">
          <span className="display-text">Supplier</span>
          <select
            id="vendorName"
            className="dropdown"
            onChange={filterChange}
            value={this.props.gridData.filterBy.value}
          >
            <option key="NONE" value="NONE">
              All Suppliers
            </option>
            {suppliers}
          </select>
          <button className="reset-btn" onClick={resetFilter}>
            <i className="fa fa-close"></i> Reset Filters
          </button>
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  gridData: propTypes.object.isRequired,
  filterOrderDetails: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  gridData: state.orderDetails,
});

export default connect(mapStateToProps, { filterOrderDetails })(Filter);
