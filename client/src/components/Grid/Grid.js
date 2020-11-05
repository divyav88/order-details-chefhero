import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { getOrderDetails } from "../../store/actions";
import Tag from "../Tag";
import { dateFormat } from "../../utils/utils";
import "./Grid.scss";

class Grid extends Component {
  constructor(props) {
    super(props);
    props.getOrderDetails(); //this is possible because of the connect below
  }
  render() {
    const tagDetails = {
      //b0fcc8//a2f887
      paid: { style: { background: "#9ccfbe" }, shape: "capsule" },
      delivered: { style: { background: "#beaff1" }, shape: "capsule" },
      market: {
        style: { background: "#3a3838", color: "#ffffff" },
        shape: "default",
      },
      "1st": {
        style: { background: "#ecf59c", color: "#000000" },
        shape: "capsule",
      },
    };
    //filter the orders based on the combo box then show all the data in grid
    const orderData = this.props.gridData.orderDetails
      .filter(
        (order) =>
          this.props.gridData.filterBy.value === "NONE" ||
          order[this.props.gridData.filterBy.type] ===
            this.props.gridData.filterBy.value
      )
      .map((order) => {
        const status = order.orderBuyerStatus.toLowerCase();
        let tagSupplier = [];
        let tags = [];
        tags.push(!order.isBYOS ? "market" : null);
        tags.push(order.isPendingVendorOnboarding ? "1st" : null);
        tags = tags.filter((tag) => tag); //removing null or undefined values
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
              {dateFormat(order.deliveryDay)}
            </div>
            <div className="grid-table-cell" data-title="Supplier">
              {order.vendorName} {tagSupplier}
            </div>
            <div className="grid-table-cell" data-title="Total">
              {(order.total && `$${order.total}`) || ""}
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
  gridData: propTypes.object.isRequired,
  getOrderDetails: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  gridData: state.orderDetails,
});

// const fn = connect(mapStateToProps, { getOrderDetails }); //mapDispatchToProps getOrderDetails: getOrderDetails -- object //mapStateToProp function
// export default fn(Grid);
export default connect(mapStateToProps, { getOrderDetails })(Grid);
