DROP DATABASE IF EXISTS books;
CREATE DATABASE books;

DROP USER IF EXISTS 'greatReader'@'localhost';
CREATE USER 'greatReader'@'localhost' IDENTIFIED BY 'BoOk$!';

-- Grant our user access to all tables to the database
GRANT ALL PRIVILEGES ON books.* to 'greatReader'@'localhost';
FLUSH PRIVILEGES;

USE books;
CREATE TABLE authors (
id INT auto_increment,
firstName VARCHAR(255),
lastName VARCHAR(255),
updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
createdAt DATETIME DEFAULT NOW(),
deletedAt DATETIME,
PRIMARY KEY(id)
);

CREATE TABLE novels (
id INT auto_increment,
title VARCHAR(255),
authorId INT,
updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
createdAt DATETIME DEFAULT NOW(),
deletedAt DATETIME,
PRIMARY KEY(id)
FOREIGN KEY (authorsId) REFERENCES authors(id)
);

CREATE TABLE genres (
id INT auto_increment,
name VARCHAR(255),
updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
createdAt DATETIME DEFAULT NOW(),
deletedAt DATETIME,
PRIMARY KEY(id)
);

CREATE TABLE novelsgenres (
id INT auto_increment,
novelsId INT,
genresId INT,
updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
createdAt DATETIME DEFAULT NOW(),
deletedAt DATETIME,
PRIMARY KEY(id)


INSERT INTO authors (nameFirst, nameLast) VALUES(“Bram”, “Stoker”)
INSERT INTO authors (nameFirst, nameLast) VALUES(“Oscar”, “Wilde”)
INSERT INTO authors (nameFirst, nameLast) VALUES(“Alice”, “Walker”)
INSERT INTO authors (nameFirst, nameLast) VALUES(“Leo”, “Tolstoy”)
INSERT INTO authors (nameFirst, nameLast) VALUES(“Charles Dickens”)
INSERT INTO authors (nameFirst, nameLast) VALUES(“Arthur”, “Miller”)
INSERT INTO authors (nameFirst, nameLast) VALUES(“Alexandre”, “Dumas”)
INSERT INTO authors (nameFirst, nameLast) VALUES(“Arthur Conan”, “Doyle”)
INSERT INTO authors (nameFirst, nameLast) VALUES(“Robert Louis”, “Stevenson”)
INSERT INTO authors (nameFirst, nameLast) VALUES(“Fyodor”, “Dostoyevsky”)
INSERT INTO authors (nameFirst, nameLast) VALUES(“Agatha”, “Christie”)
INSERT INTO authors (nameFirst, nameLast) VALUES(“Ray”, “Bradbury”)
INSERT INTO authors (nameFirst, nameLast) VALUES(“George”, “Orwell”)
INSERT INTO authors (nameFirst, nameLast) VALUES(“H.G.”, “Wells”)
INSERT INTO authors (nameFirst, nameLast) VALUES(“Chinua”, “Achebe”)

INSERT INTO novels (title, authorId) VALUES(“Dracula”, 1)
INSERT INTO novels (title, authorId) VALUES(“The Picture of Dorian Gray”, 2)
INSERT INTO novels (title, authorId) VALUES(“The Color Purple”, 3)
INSERT INTO novels (title, authorId) VALUES(“War and Peace”, 4)
INSERT INTO novels (title, authorId) VALUES(“A Tale of Two Cities”, 5)
INSERT INTO novels (title, authorId) VALUES(“The Crucible”, 6)
INSERT INTO novels (title, authorId) VALUES(“The Three Musketeers”, 7)
INSERT INTO novels (title, authorId) VALUES(“The Hound of the Baskervilles”, 8)
INSERT INTO novels (title, authorId) VALUES(“The Strange Case of Dr. Jekyll and Mr. Hyde”, 9)
INSERT INTO novels (title, authorId) VALUES(“Crime and Punishment”, 10)
INSERT INTO novels (title, authorId) VALUES(“Bram”, “Murder on the Orient Express”, 11)
INSERT INTO novels (title, authorId) VALUES(“Bram”, “Fahrenheit 451”, 12)
INSERT INTO novels (title, authorId) VALUES(“Bram”, “Animal Farm”, 13)
INSERT INTO novels (title, authorId) VALUES(“Bram”, “The Time Machine”, 14)
INSERT INTO novels (title, authorId) VALUES(“Bram”, “Things Fall Apart”, 15)

INSERT INTO genres (name) VALUES(“Fiction”,)
INSERT INTO genres (name) VALUES(“Horror”,)
INSERT INTO genres (name) VALUES(“Adventure”,)
INSERT INTO genres (name) VALUES(“Science Fiction”,)
INSERT INTO genres (name) VALUES(“Gothic”,)
INSERT INTO genres (name) VALUES(“Fantasy”,)
INSERT INTO genres (name) VALUES(“Historical Fiction”,)
INSERT INTO genres (name) VALUES(“War”,)
INSERT INTO genres (name) VALUES(“Russian Literature”,)
INSERT INTO genres (name) VALUES(“Plays”,)
INSERT INTO genres (name) VALUES(“French Literature”,)
INSERT INTO genres (name) VALUES(“Crime”,)
INSERT INTO genres (name) VALUES(“Thriller”,)
INSERT INTO genres (name) VALUES(“Mystery”,)
INSERT INTO genres (name) VALUES(“Dystopia”,)
INSERT INTO genres (name) VALUES(“Time Travel”,)
INSERT INTO genres (name) VALUES(“African Literature”,)
INSERT INTO genres (name) VALUES(“drama”,)

