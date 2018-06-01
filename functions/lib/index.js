"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const env = functions.config();
const Airtable = require("airtable");
const base = new Airtable({ apiKey: env.airtable.key }).base('appRXZZof2wTv7VLr');
exports.addToAirtable = functions.firestore
    .document('customers/{customerId}')
    .onCreate((snap, context) => {
    const data = snap.data();
    const objectId = snap.id;
    // Add the data to the algolia index
    return base('CustomerData').create(data);
});
//# sourceMappingURL=index.js.map