const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "admin" } // Optional: Useful for role-based access
});

module.exports = mongoose.model("Admin", AdminSchema);
