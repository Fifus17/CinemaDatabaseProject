import mongoose, { mongo } from "mongoose";

const dataSchema = new mongoose.Schema({
  normal: {
    "_2d": {
      required: true,
      type: Number
    },
    "_3d": {
      required: true,
      type: Number
    }
  },
  student: {
    "_2d": {
      required: true,
      type: Number
    },
    "_3d": {
      required: true,
      type: Number
    }
  },
  startime: {
    required: true,
    type: Date
  },
  endtime: {
    required: true,
    type: Date
  }

},
  { collection: 'Prices' }
)

export default mongoose.model("Price", dataSchema)