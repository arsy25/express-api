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
        JUDUL: {
            type: String
        },
        MERK: {
            type: String
        },
        HARGA: {
            type: String
        },
        BERAT_PRODUK: {
            type: String
        },
        JENIS_GARANSI: {
            type: String
        },
        DIMENSI: {
            type: String
        },
        STOCK: {
            type: String
        },
        DIKIRIM_DARI: {
            type: String
        },
        DESKRIPSI_BARANG: {
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