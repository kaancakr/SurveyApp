import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const surveySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    summary: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    ageRange: {
      type: String,
      requried: true,
    },
  },
  { timestamps: true }
);

const surveyPlusSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    summary: {
      type: String,
      required: true,
      unique: true,
    },
    owner: {
      type: String,
      required: true,
    },
    ageRange: {
      type: String,
      requried: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Surveys =
  mongoose.models.Surveys || mongoose.model("Surveys", surveySchema);
export const SurveysPlus =
  mongoose.models.SurveysPlus || mongoose.model("SurveysPlus", surveyPlusSchema);
