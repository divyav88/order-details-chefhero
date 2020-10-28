import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { getOrderDetails } from "../../store/actions";
import "./Grid.scss";

class Grid extends Component {
  constructor(props) {
    super(props);
    props.getOrderDetails(); //this is possible because of the connect below
  }
  render() {
    const orderData = this.props.orderDetails.map((order) => {
      return (
        <div key={order.id} className="grid-table-row">
          <div className="grid-table-cell" data-title="Status">
            {order.orderBuyerStatus}
          </div>
          <div className="grid-table-cell" data-title="Delivery Day">
            {order.deliveryDay}
          </div>
          <div className="grid-table-cell" data-title="Supplier">
            {order.vendorName}
          </div>
          <div className="grid-table-cell" data-title="Total">
            {order.total}
          </div>
        </div>
      );
    });
    return (
      <div className="grid-table">
        <div className="grid-table-row">
          <div className="grid-table-cell">Status</div>
          <div className="grid-table-cell">Delivery Day</div>
          <div className="grid-table-cell">Supplier</div>
          <div className="grid-table-cell">Total</div>
        </div>
        {orderData}
      </div>
    );
  }
}

Grid.propTypes = {
  orderDetails: propTypes.array.isRequired,
  getOrderDetails: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  orderDetails: state.orderDetails.orderDetails,
});

// const fn = connect(mapStateToProps, { getOrderDetails }); //mapDispatchToProps getOrderDetails: getOrderDetails -- object //mapStateToProp function
// export default fn(Grid);
export default connect(mapStateToProps, { getOrderDetails })(Grid);
