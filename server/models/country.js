import mongoose, { Schema } from 'mongoose';

var countrySchema = new Schema({
    code: String,
    label: String,
});

// Export Mongoose model
export default mongoose.model('country', countrySchema);