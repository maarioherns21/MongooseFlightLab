const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: { type: String, enum: ["AUS", "DFW", "DEN", "LAX", "SAN"] },
  arrival: { type: Date },
});

const flightSchema = new Schema({
  airline: {type: String, enum:['American', 'Delta', 'Southwest', 'United']},
  flightNo:{type: Number, min: 1, max: 9999},
  airport: {type:String, enum:['ATL', 'DFW', 'DEN', 'LAX', 'SAN']},
  arriving: {type: Boolean},
  departs: {type: Date},
  destinations: [destinationSchema],
});

module.exports = mongoose.model("Flight", flightSchema);
