const { string } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const contryCode = {
  'United State': "US",
  'France': "FR",
  'Germany': 'GR',
  'Japan': 'JP',
  'Togo': 'TG'
}

// create document schema
const userSchema = new Schema({
  name: {
    type: string,
    required: true,
    minLength: 2,
    maxLength: 244,
  },
  country: {
    type: string,
    required: true,
    minLength: 1,
    maxLength: 244,
  },
  profilImage: {
    type: String,
    path: String,
    createdAt: { type: Date, default: Date.now },
    get: () => this.path
  },
  language: {
    type: string,
    required: true
  },
  occupation: {
    type: string,
    minLength: 4,
    maxLength: 244,
  },
  objective: {
    type: string,
    minLength: 4,
    maxLength: 244,
  },
  subscription: {
    type: string,
    minLength: 4,
    maxLength: 100,
  },
  selected: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true })

// create schema model
const User = mongoose.Model('User', userSchema);

module.exports = User
