const createError = require("http-errors");

const sendEmail = require("./sendMail");
const successResponse = require("./successResponse");
const User = require("../models/userModel");

const handleEmailSend = async (emailData, res, verificationCode) => {
  await sendEmail(emailData);
  try {
    return successResponse(res, {
      statusCode: 200,
      message: "Email sent successfully, please check your email to verify your account",
      payload: {
        verificationCode,
      },
    });
  } catch (error) {
    // if it is violating the schema error
    if (error.name === "validationError") {
      throw createError(422, error.message);
    }
    throw error;
  }
};

module.exports = handleEmailSend;
