// middleware/authmiddleware.js
import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id }; // store only user ID
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default protect;
