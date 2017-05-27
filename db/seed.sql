CREATE DATABASE Bobs_Alternative_BurgersDB;

USE Bobs_Alternative_BurgersDB;


CREATE TABLE burger_list(
    id INT AUTO_INCREMENT NOT NULL,
    ordered_burger VARCHAR(30) NOT NULL,
    burger_eaten BIT NOT NULL,
    date TIMESTAMP NULL DEFAULT current_timestamp,
    PRIMARY KEY (id)
);



DROP TABLE burger_list;
INSERT INTO burger_list (ordered_burger, burger_eaten) VALUE('doube cheese burger', 1);
INSERT INTO burger_list (ordered_burger, burger_eaten) VALUE('Vegie Burger', 1);
INSERT INTO burger_list (ordered_burger, burger_eaten) VALUE('1 Pound Burger', 0);