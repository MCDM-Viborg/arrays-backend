import dbConnect from "../db/dbConnect.mjs";
import userModelModel from "../db/models/userModel.model.mjs";

export const users = async (req, res) => {
  await dbConnect();
  let result = await userModelModel.find({});

  return result;
};
