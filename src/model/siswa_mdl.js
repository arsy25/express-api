const mongoose = require("mongoose");
const collectionName = "siswa";

const UserSchema = new mongoose.Schema(
    {
        GUID: {
            type: String
        },
        FULLNAME: {
            type: String,
            default: "-"
        },
        USERNAME: {
            type: String,
            default: "-"
        },
        PASSWORD: {
            type: String,
            default: "-"
        },
        EMAIL: {
            type: String,
            default: "-"
        },
        ROLE: {
            type: String
        },
        PHONE: {
            type: String,
            default: "-"
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

module.exports = mongoose.model(collectionName, UserSchema);