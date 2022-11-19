const create = (data, Model) => {
  const newObj = new Model(data);
  return newObj
    .save()
    .then((res) => res)
    .catch((err) => {
      console.log("ERROR==>services=>crud=>create:::", err);
      return null;
    });
};

const get = (id = null, Model) => {
  if (id) {
    return Model.findById(id)
      .then((res) => res)
      .catch((err) => {
        console.log("ERROR==>services=>crud=>get:::", err);
        return null;
      });
  } else {
    return Model.find()
      .then((res) => res)
      .catch((err) => {
        console.log("ERROR==>services=>crud=>get:::", err);
        return null;
      });
  }
};

export default {
  create,
  get,
};
