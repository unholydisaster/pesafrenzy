import bcrypt from "bcryptjs";
import { UserModel } from "@/backend/models/users";
import jwt from "jsonwebtoken"
import dbConnect from "@/backend/utils/dbConnect";

dbConnect()

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const { username, email, password } = req.body;
        const emailExistingsh = await UserModel.findOne({ email });
        if (emailExistingsh) {
          return res.status(409).json({
            success: false,
            message: "User with this email already exists.",
          });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new UserModel({
          username,
          email,
          password: hashedPassword,
        });
        
        const response = await user.save();
                
        if(response){
          console.log("user successfully create")
        }
        res.status(200).json(response);

      } catch (error) {
        console.log(error);
        res.status(400).json("an error occured");
      }
      break;
      case "PUT":
      try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });

        if (!user) {
          return res.status(401).json({
            success: false,
            message: "Authentication failed. User not found.",
          });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          return res.status(401).json({
            success: false,
            message: "Authentication failed. Invalid password.",
          });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        res.status(200).json({ token, userID: user._id });
      } catch (error) {
        console.log(error);
        res.status(400).json("an error occurred");
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

