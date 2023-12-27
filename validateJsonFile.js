const Ajv = require('ajv');
const ajv = new Ajv();

// JSON data to be validated
const jsonData = require('./demo.json');
const jsonSchema = require('./schema.json')
// const jsonData = {
//   "name": "Song Title",
//   "artist": "Artist Name",
//   "description": "Song description",
//   "tags": ["Tag1", "Tag2"]
// };

// JSON schema
// const jsonSchema = {
 
//   "type": "object",
//   "properties": {
//     "name": {
//       "type": "string"
//     },
//     "artist": {
//       "type": "string"
//     },
//     "description": {
//       "type": "string"
//     },
//     "tags": {
//       "type": "array",
//       "items": [
//         {
//           "type": "string"
//         },
//         {
//           "type": "string"
//         }
//       ]
//     }
//   },
//   "required": [
//     "name",
//     "artist",
//     "description",
//     "tags"
//   ]
// };

// Validate JSON against the schema
const isValid = ajv.validate(jsonSchema, jsonData);

if (isValid) {
  console.log('JSON is valid against the schema.');
} else {
  console.log('JSON validation failed. Errors:', ajv.errors);
}
