const mongoose = require("mongoose");
const path = require("path");
var scriptName = path.basename(__filename);
const colname = scriptName.split("_");
const collectionName = colname[0];

const Schema = new mongoose.Schema(
    {
        GUID: {
            type: String
        },
        USERNAME: {
            type: String
        },
        PASSWORD: {
            type: String
        },
        ALAMAT: {
            type: String
        },
        DIKIRIM_DARI: {
            type: String
        },
        CREATED_AT: {
            type: Date,
            default: new Date()
        },
        UPDATED_AT: {
            type: Date,
            default: new Date()
        }
    },
    {
        versionKey: false,
        collection: collectionName
    });

module.exports = mongoose.model(collectionName, Schema);