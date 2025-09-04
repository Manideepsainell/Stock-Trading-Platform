import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHoldings = async () => {
      setLoading(true);
      setError("");
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:3002/allHoldings", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAllHoldings(res.data || []);
      } catch (err) {
        console.error("Error fetching holdings:", err);
        setError("Failed to fetch holdings. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchHoldings();
    const interval = setInterval(fetchHoldings, 5000); // refresh every 5 seconds
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="holdings-loading">Loading holdings...</div>;
  if (error) return <div className="holdings-error">{error}</div>;
  if (allHoldings.length === 0) return <div className="holdings-empty">No holdings available.</div>;

  // Totals
  const totalInvested = allHoldings.reduce((acc, s) => acc + (s.avg ?? 0) * (s.qty ?? 0), 0);
  const currentValue = allHoldings.reduce((acc, s) => acc + (s.price ?? 0) * (s.qty ?? 0), 0);
  const totalPL = currentValue - totalInvested;

  // Graph data
  const chartData = {
    labels: allHoldings.map((stock) => stock.name),
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price ?? 0),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock) => {
              const qty = stock.qty ?? 0;
              const avg = stock.avg ?? 0;
              const price = stock.price ?? 0;
              const curValue = price * qty;
              const pl = curValue - avg * qty;
              const profClass = pl >= 0 ? "profit" : "loss";
              const dayClass = (stock.day ?? 0) >= 0 ? "profit" : "loss";

              return (
                <tr key={stock.symbol || stock.id}>
                  <td>{stock.name}</td>
                  <td>{qty}</td>
                  <td>{avg.toFixed(2)}</td>
                  <td>{price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>{pl.toFixed(2)}</td>
                  <td className={profClass}>{stock.net ?? "-"}</td>
                  <td className={dayClass}>{stock.day ?? "-"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row totals">
        <div className="col">
          <h5>{totalInvested.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>{currentValue.toFixed(2)}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>{totalPL.toFixed(2)}</h5>
          <p>P&L</p>
        </div>
      </div>

      <VerticalGraph data={chartData} />
    </>
  );
};

export default Holdings;
