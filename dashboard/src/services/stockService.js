// Local development
const BASE_URL = "https://stock-trading-platform-en0s.onrender.com";

// Fetch all Sensex stocks
export const fetchSensex = async () => {
  const res = await fetch(`${BASE_URL}/api/stocks/sensex/all`);
  return await res.json();
};

// Fetch all Nifty 50 stocks
export const fetchNifty = async () => {
  const res = await fetch(`${BASE_URL}/api/stocks/nifty/all`);
  return await res.json();
};

// Fetch single stock by symbol
export const fetchStock = async (symbol) => {
  const res = await fetch(`${BASE_URL}/api/stocks/${symbol}`);
  return await res.json();
};
