import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPositions = async () => {
      setLoading(true);
      setError("");
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:3002/api/allPositions", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPositions(res.data || []);
      } catch (err) {
        console.error("Error fetching positions:", err);
        setError("Failed to fetch positions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPositions();
  }, []);

  if (loading) return <div className="positions-loading">Loading positions...</div>;
  if (error) return <div className="positions-error">{error}</div>;
  if (positions.length === 0) return <div className="positions-empty">No positions available.</div>;

  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((stock) => {
              const qty = stock.qty ?? 0;
              const avg = stock.avg ?? 0;
              const price = stock.price ?? 0;
              const dayChange = stock.day ?? 0;

              const curValue = price * qty;
              const pl = curValue - avg * qty;
              const profClass = pl >= 0 ? "profit" : "loss";
              const dayClass = dayChange >= 0 ? "profit" : "loss";

              return (
                <tr key={stock.symbol || stock.id}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{qty}</td>
                  <td>{avg.toFixed(2)}</td>
                  <td>{price.toFixed(2)}</td>
                  <td className={profClass}>{pl.toFixed(2)}</td>
                  <td className={dayClass}>{dayChange}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
