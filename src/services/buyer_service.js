const bcrypt = require("bcrypt");
var path = require("path");
var scriptName = path.basename(__filename);
const filename = scriptName.split("_");
let model = require("../model/" + filename[0] + "_model");
const { requestResponse } = require("../utils");

let response;

const create = async (data) => {
    await model.create(data);
    console.log(data)
    return { ...requestResponse.success, data: model };
};

const getByStatusAll = async (condition) => {

    return model.find(condition, { _id: false }, { lean: true }).sort({CREATED_AT: -1});
};

const getById = async (condition) => {
    return model.findOne(condition, { _id: false }, { lean: true });
};

const updateOne = async (condition, body) => {
    await model.updateOne(condition, body);
    const user = await model.findOne({GUID: condition.GUID}, {id: false }, { lean: true });
    const result =  { ...requestResponse.success, data:{
        user: { ...user }
    }};
    return result;
}

const deleteOne = async (condition) => {
    return model.deleteOne(condition);
};

module.exports = {
    create,
    getByStatusAll,
    getById,
    updateOne,
    deleteOne
};