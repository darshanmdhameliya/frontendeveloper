import mongoose from "mongoose";
import { IGroup } from "../model/IGroup";

const GroupSchema = new mongoose.Schema<IGroup>(
    {
        name: { type: String, required: true, unique: true },
    },
    {
        timestamps: true,
    }   
)

const GroupTable = mongoose.model<IGroup>("group", GroupSchema)
export default GroupTable