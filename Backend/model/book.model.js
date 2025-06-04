import mongoose from "mongoose";

const VALID_GENRES = ['fiction', 'novel', 'non-fiction', 'mystery', 'romance', 'science', 'technology'];

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    reviews: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true,
        enum: {
            values: VALID_GENRES,
            message: 'Invalid genre. Must be one of: ' + VALID_GENRES.join(', ')
        },
        set: function(value) {
            // Convert to lowercase before saving
            return value.toLowerCase().trim();
        }
    }
}, {
    timestamps: true
});

const Book = mongoose.model("Book", bookSchema);

export default Book;