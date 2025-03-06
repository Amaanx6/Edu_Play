const jwt = require("jsonwebtoken")

exports.authMiddleware = (req, res, next) => {
  // Get token from header
  const token = req.header("x-auth-token")

  // Check if no token
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" })
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // Add user from payload
    req.user = decoded
    next()
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" })
  }
}

exports.adminMiddleware = (req, res, next) => {
  // First run auth middleware to set req.user
  exports.authMiddleware(req, res, () => {
    // Check if user is admin
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied, admin privileges required" })
    }
    next()
  })
}

