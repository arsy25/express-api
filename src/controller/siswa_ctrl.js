require("dotenv").config();
const service = require("../services/siswa_srvs");
const { requestResponse } = require("../utils");
const logger = require("../utils/logger");
const fs = require("fs-extra")
const { v4, validate: isUuid } = require("uuid");
// const Promise = require("bluebird");
// const formidable = Promise.promisifyAll(require("formidable"), { multiArgs: true });
// const form = formidable();

let response;

const create = async (req, res) => {
    try {
        req.body.GUID = v4();
        const user = await service.create(req.body);
        response = { ...user };
    } catch (error) {
        logger.error(error);
        response = { ...requestResponse.server_error };
    }
    res.json(response);
};

const getByStatusAll = async (req, res) => {
    try {
        const data = await service.getByStatusAll( );
        response = { ...requestResponse.success, data };
    } catch (error) {
        logger.error(error);
        response = { ...requestResponse.server_error };
    }
    res.json(response);
}

const getById = async (req, res) => {
    try {
        const data = await service.getById({ ROLE: req.params.guid });
        response = { ...requestResponse.success, data };
    } catch (error) {
        logger.error(error);
        response = { ...requestResponse.server_error };
    }
    res.json(response);
}

// const getByStatus = async (req, res) => {
//     try {
//         const data = await service.getByStatus({ STATUS: req.params.status });
//         response = { ...requestResponse.success, data };
//     } catch (error) {
//         logger.error(error);
//         response = { ...requestResponse.server_error };
//     }
//     res.json(response);
// }

// const getCountBloodType = async (req, res) => {
//     try {
//       const data = await service.getCountBloodType(req.body);
//       response = { ...data };
//     } catch (error) {
//       logger.error(error);
//       response = { ...requestResponse.server_error };
//     }
//     res.json(response);
// }

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

// const updateStatus = async (req, res) => {
//     try {
//         const data = await service.updateStatus({ GUID: req.params.guid }, req.body);
//         response = { ...data };
//     } catch (error) {
//         logger.error(error);
//         response = { ...requestResponse.server_error };
//     }
//     res.json(response);
// }

const deleteOne = async (req, res) => {
    try {
      const data = await service.deleteOne({ GUID: req.params.id });
      response = { ...requestResponse.success, data };
    } catch (error) {
      logger.error(error);
      response = { ...requestResponse.server_error };
    }
    res.json(response);
  };
  
module.exports = {
    create,
    getByStatusAll,
    getById,
    // getByStatus,
    // getCountBloodType,
    updateOne,
    // updateStatus
    deleteOne
};  