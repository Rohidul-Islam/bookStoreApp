import Book from "../model/book.model.js";

const initialBooks = [
    {
        name: "The Catch-22",
        title: "A Masterpiece of American Literature",
        description: "A satirical war novel by Joseph Heller",
        image: "Catch.jpg",
        price: 0,
        rating: 4.5,
        reviews: 0,
        category: "Free"
    },
    {
        name: "Norwegian Wood",
        title: "A Modern Classic",
        description: "A nostalgic story of loss and sexuality by Haruki Murakami",
        image: "Norewegian.jpg",
        price: 0,
        rating: 4.5,
        reviews: 0,
        category: "Free"
    },
    {
        name: "The Three-Body Problem",
        title: "Science Fiction Masterpiece",
        description: "Award-winning Chinese science fiction",
        image: "Three.jpg",
        price: 0,
        rating: 4.5,
        reviews: 0,
        category: "Free"
    },
    {
        name: "A Thousand Splendid Suns",
        title: "Moving Tale of Afghanistan",
        description: "A gripping story of family, love, and redemption",
        image: "Thousand.jpg",
        price: 100,
        rating: 4.5,
        reviews: 100,
        category: "story"
    },
    {
        name: "The Forty Rules of Love",
        title: "A Novel of Rumi",
        description: "A spiritual journey through time",
        image: "Forty Rules.jpg",
        price: 0,
        rating: 4.5,
        reviews: 100,
        category: "Free"
    }
];

export const getBook = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ message: "Error fetching books", error: error.message });
    }
};

export const populateBooks = async (req, res) => {
    try {
        // First, clear existing books
        await Book.deleteMany({});
        
        // Insert initial books
        const books = await Book.insertMany(initialBooks);
        
        res.status(201).json({
            message: "Books populated successfully",
            count: books.length,
            books
        });
    } catch (error) {
        console.error("Error populating books:", error);
        res.status(500).json({ message: "Error populating books", error: error.message });
    }
};