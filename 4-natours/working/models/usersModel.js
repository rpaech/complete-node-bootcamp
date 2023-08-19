import crypto from "crypto";
import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Not defined."],
    trim: true,
    validate: {
      validator: function (value) {
        return validator.isAlpha(value, "en-US", { ignore: " -." });
      },
      message: "Can only contain the characters [a-ZA-Z -.].",
    },
  },
  email: {
    type: String,
    required: [true, "Not defined."],
    unique: true,
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, "Must be formatted as 'username@domain'."],
  },
  photo: {
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "guide", "lead-guide", "admin"],
    default: "user",
  },
  password: {
    type: String,
    required: [true, "Not defined."],
    minLength: [8, "Length must be >= 8 characters."],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Not defined."],
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: "Doesn't match the value of 'password'.",
    },
  },
  passwordChangedAt: {
    type: Date,
    default: Date.now(),
  },
  passwordResetToken: {
    type: String,
    select: false,
  },
  passwordResetExpires: {
    type: Date,
    select: false,
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

userSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.methods.correctPassword = async (candidate, actual) =>
  await bcrypt.compare(candidate, actual);

userSchema.methods.passwordChangedAfter = function (JwtTimestamp) {
  const changeTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
  if (JwtTimestamp < changeTimestamp) return true;
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

const User = mongoose.model("User", userSchema);
await User.init();

export default User;
