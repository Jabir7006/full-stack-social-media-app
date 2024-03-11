const User = require("../models/userModel");
const createJwt = require("../utils/createJwt");
const handleEmailSend = require("../utils/handleEmailSend");
const successResponse = require("../utils/successResponse");
const createError = require("http-errors");
const bcrypt = require("bcrypt");

const handleGetAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    if (!users) {
      return res.status(404).json({ message: "No user found" });
    }

    successResponse(res, { payload: users });
  } catch (error) {
    next(error);
  }
};

const handleCreateUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, gender, dateOfBirth } = req.body;

    const checkUser = await User.findOne({ email });

    if (checkUser) {
      throw createError(409, "User already exists");
    }


  
    const fromName = "Facebook";

    const verificationCode = Math.floor(100000 + Math.random() * 900000);
    const hashedVerificationCode = await bcrypt.hash(verificationCode.toString(), 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      gender,
      dateOfBirth,
      verificationCode: hashedVerificationCode,
      verificationCodeExpiresAt: Date.now() + 60 * 60 * 1000, // 1 hour in milliseconds
    });

    await newUser.save();


    const emailData = {
      email,
      subject: "Account Verification",
      html: `<h2>Verification Code</h2> <p>Enter the following verification code when prompted:</p> <h1>${verificationCode}</h1> <p>To protect your account, do not share this code.</p>`,
      from: `${fromName} <${process.env.SMTP_EMAIL}>`,
    };
    await handleEmailSend(emailData, res, verificationCode);
  } catch (error) {
    next(error);
  }
};

const handleVerifyUser = async (req, res, next) => {
  try {
    const { email, verificationCode } = req.body;

    const user = await User.findOne({ email });

    if (!user || user.verified) {
      throw createError(400, "Invalid verification attempt");
    }

    if (user.verificationCodeExpiresAt < Date.now()) {
      throw createError(400, "Verification code expired");
    }

    const isValid = await bcrypt.compare(verificationCode, user.verificationCode);

    if (isValid) {
      user.verified = true;
      user.verificationCode = null; 
      user.verificationCodeExpiresAt = null;
      await user.save();
      successResponse(res, { message: "User verified successfully", payload: user });
    } else {
      throw createError(400, "Invalid verification code");
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { handleGetAllUsers, handleCreateUser, handleVerifyUser };
