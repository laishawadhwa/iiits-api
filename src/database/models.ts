import { Document, Schema, Model, model} from "mongoose";
import { IUser } from "../interfaces/user";

export interface IUserModel extends IUser, Document {
}

export var UserSchema: Schema = new Schema({
  group: String,
  email: String,
  clientSecret: String,
  callback: String
});


export const User: Model<IUserModel> = model<IUserModel>("User", UserSchema);