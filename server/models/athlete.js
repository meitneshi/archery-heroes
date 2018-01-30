import mongoose, { Schema } from 'mongoose';

var athleteSchema = new Schema({
    id: String,
    name: String,
    country: String,
    birth: Number,
    image: String,
    cover: String,
    link: String,
    medals: Array,
});

// Export Mongoose model
export default mongoose.model('athlete', athleteSchema);