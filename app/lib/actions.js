"use server";

import { revalidatePath } from "next/cache";
import { Surveys, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

export const addUser = async (formData) => {
  try {
    connectToDB();

    const { username, email, password, phone, address } = Object.fromEntries(formData);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/login");
  redirect("/login");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/profile");
  redirect("/dashboard/profile");
};

export const addSurvey = async (formData) => {
  const { name, summary, owner, ageRange } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newSurvey = new Surveys({
      name,
      summary,
      owner,
      ageRange,
    });

    await newSurvey.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product!");
  }

  revalidatePath("/dashboard/surveys");
  redirect("/dashboard/surveys");
};

export const updateSurvey = async (formData) => {
  const { id, name, summary, owner, ageRange } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      name,
      summary,
      owner,
      ageRange,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Surveys.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product!");
  }

  revalidatePath("/dashboard/surveys");
  redirect("/dashboard/surveys");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/products");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Surveys.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/surveys");
};

export const authenticate = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    return "Wrong Credentials!";
  }
};
