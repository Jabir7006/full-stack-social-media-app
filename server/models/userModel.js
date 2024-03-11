const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },

    profilePic: {
      type: String,
    },

    coverPic: {
      type: String,
    },

    dateOfBirth: {
      type: Date,
      required: true,
    },

    bio: {
      type: String,
    },

    verificationCode: String,
    verificationCodeExpiresAt: Date,

    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.pre;

const User = model("User", userSchema);

module.exports = User;
