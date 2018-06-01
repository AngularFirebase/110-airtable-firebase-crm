import * as functions from 'firebase-functions';
const env = functions.config();

import * as Airtable from 'airtable';

const base = new Airtable({apiKey: env.airtable.key }).base('appRXZZof2wTv7VLr');


exports.addToAirtable = functions.firestore
  .document('customers/{customerId}')
  .onCreate((snap, context) => {
    const data = snap.data();

    // Add the data to the Airtable Base
    return base('CustomerData').create(data)
});

