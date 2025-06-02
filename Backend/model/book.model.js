import mongoose from "mongoose";

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
    }
}, {
    timestamps: true
});

const Book = mongoose.model("Book", bookSchema);

export default Book;