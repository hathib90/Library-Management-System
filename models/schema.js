const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        purpose: "Title of the book"
    },

    author: {
        type: String,
        required: true,
        purpose: " Name of the author"
    },

    isbn: {
        type: String,
        required: true,
        unique: true,
        purpose: "Unique identifier for the book"
    },

    category: {
        type: String,
        required: true,
        enum: ['fiction', 'non-fiction', 'comics', 'biography'],
        purpose: "Genre of the book"
    },

    copies: {
        type: Number,
        required: true,
        purpose: "Total copies available in the library"
    },

    available: {
        type: Number,
        default: copies,
        purpose: "Current number of available (not issued) copies"
    }
});

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        purpose: "Full name of the library member"
    },

    email: {
        type: String,
        required: true,
        unique: true,
        purpose: "Email address of the member"
    },

    joinDate: {
        type: Date,
        default: Date.now,
        purpose: "Date when the member joined the library"
    },

    booksIssued: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        purpose: "List of books currently issued to the member"
    }
});

const Book = mongoose.model('Book', bookSchema);
const Member = mongoose.model('Member', memberSchema);

module.exports = { Book, Member };