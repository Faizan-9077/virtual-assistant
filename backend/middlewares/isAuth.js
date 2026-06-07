import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token || token === "undefined" || token === "null") {
      return res.status(401).json({
        message: "Authentication token not found",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    console.log("Decoded token:", decoded);

    req.userId = decoded.userId;

    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error);

    if (
      error.name === "JsonWebTokenError" ||
      error.name === "TokenExpiredError"
    ) {
      return res.status(401).json({
        message: "Invalid or expired token",
      });
    }

    return res.status(500).json({
      message: "Authentication error",
    });
  }
};

export default isAuth;