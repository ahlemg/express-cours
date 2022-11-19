import mongoose from "mongoose";

const fileSchema = mongoose.Schema({
  image: {
    type: String,
  },
});

const File = mongoose.model("File", fileSchema);

export default File;
