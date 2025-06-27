import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
    try {
        const { genre } = req.query;
        let filter = {};
        if (genre && genre !== 'all') {
            filter.genre = genre;
        }
        const books = await Book.find(filter);
        res.status(200).json(books);
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ message: "Error fetching books", error: error.message });
    }
};

export const addBook = async (req, res) => {
    try {
        const { name, title, description, image, price, category, genre } = req.body;
        
        // Validate required fields
        if (!name || !title || !description || !image || !price || !category || !genre) {
            return res.status(400).json({
                message: "Missing required fields",
                required: ["name", "title", "description", "image", "price", "category", "genre"]
            });
        }

        const newBook = new Book({
            name,
            title,
            description,
            image,
            price: Number(price),
            category,
            genre,
            rating: 0,
            reviews: 0
        });

        const savedBook = await newBook.save();
        res.status(201).json({
            message: "Book added successfully",
            book: savedBook
        });
    } catch (error) {
        console.error("Error adding book:", error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                message: "Validation error",
                errors: Object.keys(error.errors).reduce((acc, key) => {
                    acc[key] = error.errors[key].message;
                    return acc;
                }, {})
            });
        }
        res.status(500).json({ message: "Error adding book", error: error.message });
    }
};

export const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        // Validate the updates
        if (updates.price) {
            updates.price = Number(updates.price);
        }

        const updatedBook = await Book.findByIdAndUpdate(
            id, 
            updates,
            { new: true, runValidators: true }
        );

        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json({
            message: "Book updated successfully",
            book: updatedBook
        });
    } catch (error) {
        console.error("Error updating book:", error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                message: "Validation error",
                errors: Object.keys(error.errors).reduce((acc, key) => {
                    acc[key] = error.errors[key].message;
                    return acc;
                }, {})
            });
        }
        res.status(500).json({ message: "Error updating book", error: error.message });
    }
};

export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({
            message: "Book deleted successfully",
            book: deletedBook
        });
    } catch (error) {
        console.error("Error deleting book:", error);
        res.status(500).json({ message: "Error deleting book", error: error.message });
    }
};