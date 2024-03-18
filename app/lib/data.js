import { User } from "./models";
import { connectToDB } from "./utils";
import { Surveys } from "./models";
import { SurveysPlus } from "./models";

export const fetchUsers = async (q) => {
  const regex = new RegExp(q, "i");
  try {
    connectToDB();
    const user = await User.find({ username: { $regex: regex } });
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user");
  }
};

export const fetchUser = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchSurveys = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;
  try {
    connectToDB();
    const count = await Surveys.find({ name: { $regex: regex } }).count();
    const survey = await Surveys.find({ name: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
    return {count, survey};
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch surveys");
  }
};

export const fetchSurveysPlus = async (q, page) => {
    const regex = new RegExp(q, "i");
  
    const ITEM_PER_PAGE = 5;
    try {
      connectToDB();
      const count = await SurveysPlus.find({ name: { $regex: regex } }).count();
      const surveysPlus = await SurveysPlus.find({ name: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
      return {count, surveysPlus};
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch surveys");
    }
  };
