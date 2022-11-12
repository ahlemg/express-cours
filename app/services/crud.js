
const create = (data, Model) => {
    const newObj =  new Model(data);
    return newObj.save()
    .then ( (res) => res)
    .catch( (err)=> {
        console.log("ERROR==>services=>crud=>create:::",err);
        return null;
    })

}

export default {
    create
}