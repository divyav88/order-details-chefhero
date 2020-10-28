import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { getOrderDetails } from "../../store/actions";
import Tag from "../Tag";
import "./Grid.scss";

class Grid extends Component {
  constructor(props) {
    super(props);
    props.getOrderDetails(); //this is possible because of the connect below
  }
  render() {
    const tagDetails = {
      paid: { style: { background: "#b0fcc8" }, shape: "capsule" },
      delivered: { style: { background: "#bfaff8" }, shape: "capsule" },
      market: {
        style: { background: "#000000", color: "#ffffff" },
        shape: "default",
      },
      "1st": {
        style: { background: "#f1f8af", color: "#000000" },
        shape: "capsule",
      },
    };
    const orderData = this.props.orderDetails.map((order) => {
      const status = order.orderBuyerStatus.toLowerCase();
      let tagSupplier = [];
      let tags = [];
      tags.push(!order.isBYOS ? "market" : null);
      tags.push(order.isPendingVendorOnboarding ? "1st" : null);
      tags = tags.filter((tag) => tag);
      tagSupplier = tags.map((tag, i) => (
        <Tag
          key={i}
          tagStyle={tagDetails[tag].style}
          shape={tagDetails[tag].shape}
        >
          {tag}
        </Tag>
      ));

      return (
        <div key={order.id} className="grid-table-row">
          <div className="grid-table-cell" data-title="Status">
            <Tag tagStyle={tagDetails[status].style}>{status}</Tag>
          </div>
          <div className="grid-table-cell" data-title="Delivery Day">
            {order.deliveryDay}
          </div>
          <div className="grid-table-cell" data-title="Supplier">
            {order.vendorName} {tagSupplier}
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
