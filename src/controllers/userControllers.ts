import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  const { emailOrPhone, password } = req.body;
  try {
    const existingUser = await User.findOne({ emailOrPhone });
    if (!existingUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    const isPasswordMatched = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordMatched) {
      res.status(404).json({ message: "Invalid Password" });
      return;
    }
    const token = jwt.sign(
      { userId: existingUser._id },
      process.env.JWT_SECRET_KEY!,
      { expiresIn: "15s" }
    );
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong while logging in" });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { emailOrPhone, password, name } = req.body;
    const existingUser = await User.findOne({
      emailOrPhone,
    });
    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ emailOrPhone, password: hashedPassword, name });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong while registering user" });
  }
};
