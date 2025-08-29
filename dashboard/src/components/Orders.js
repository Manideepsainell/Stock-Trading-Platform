import React, { useEffect, useState } from "react";
import axios from "axios";


const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders")
      .then(res => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching orders:", err);
        setLoading(false);
      });
  }, []);

  const toggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  if (loading) {
    return <div className="orders-loading">Loading your orders...</div>;
  }

  if (orders.length === 0) {
    return (
      <div className="orders-empty">
        <p>You haven't placed any orders today</p>
      </div>
    );
  }

  return (
    <div className="orders-container">
      <h2 className="orders-title">Your Orders</h2>
      <div className="orders-list">
        {orders.map(order => (
          <div
            className={`order-card ${expandedId === order._id ? "expanded" : ""}`}
            key={order._id}
            onClick={() => toggleExpand(order._id)}
          >
            <div className="order-header">
              <h3 className="order-name">{order.name}</h3>
              <span className={`order-mode ${order.mode === "BUY" ? "buy" : "sell"}`}>
                {order.mode}
              </span>
            </div>
            <div className="order-details">
              <p><strong>Quantity:</strong> {order.qty}</p>
              <p><strong>Price:</strong> ₹{order.price}</p>
              <p className="order-date">
                {new Date(order.createdAt).toLocaleString()}
              </p>
            </div>

            {expandedId === order._id && (
              <div className="order-extra">
                <p><strong>Order ID:</strong> {order._id}</p>
                <p><strong>Created:</strong> {new Date(order.createdAt).toString()}</p>
                <p><strong>Last Updated:</strong> {new Date(order.updatedAt).toString()}</p>
                {/* Add future details like status, fees, etc. */}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;