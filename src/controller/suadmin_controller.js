require("dotenv").config();
var path = require("path");
var scriptName = path.basename(__filename);
const filename = scriptName.split("_");
const service = require("../services/" + filename[0] + "_service");
const { requestResponse } = require("../utils");
const logger = require("../utils/logger");
const fs = require("fs-extra")
const { v4, validate: isUuid } = require("uuid");

let response;

const create = async (req, res) => {
    try {
        req.body.GUID = v4();
        const user = await service.create(req.body);
        response = { ...user };
    }catch (error) {
        logger.error(error);
        response = { ...requestResponse.server_error};
    }
    res.json(response);
};

const getByStatusAll = async (req, res) => {
    try {
        const data = await service.getByStatusAll( );
        response = { ...requestResponse.success, data };
    } catch (error) {
        logger.error(error);
        response = { ...requestResponse.success, data };
    }
    res.json(response);
}

const getById = async (req, res) => {
    try {
        const data = await service.getById({ GUID: req.params.guid });
        response = { ...requestResponse.success, data };
        console.log(res)
    } catch (error) {
        logger.error(error);
        response = { ...requestResponse.server_error }; 
    }
    res.json(response);
}

const updateOne = async (req, res) => {
    try {
        req.body.UPDATED_AT = new Date();
        const data = await service.updateOne({ GUID: req.params.guid }, req.body);
        response = { ...requestResponse.success, data };
    } catch (error) {
        logger.error(error);
        response = { ...requestResponse.server_error };
    }
    res.json(response);
}

const deleteOne = async (req, res) => {
    try {
        const data = await service.deleteOne({ GUID: req.params.id });
        response = { ...requestResponse.success, data };
    } catch (error) {
        logger.error(error);
        response = { ...requestResponse.server_error };
    }
    res.json(response);
}

module.exports = {
    create,
    getByStatusAll,
    getById,
    updateOne,
    deleteOne
};