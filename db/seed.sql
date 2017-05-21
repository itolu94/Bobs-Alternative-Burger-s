CREATE DATABASE Bobs_Alternative_BurgersDB;
USE Bobs_Alternative_BurgersDB;


CREATE TABLE burger_list(
    id INT AUTO_INCREMENT NOT NULL,
    ordered_burger VARCHAR(30) NOT NULL,
    burger_eaten BIT NOT NULL,
    date TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);


SELECT *  FROM burger_list;


DROP TABLE burger_list;
INSERT INTO burger_list (ordered_burger, burger_eaten, date) VALUE('doube cheese burger', 1, '2017-05-19 07:32:00');
INSERT INTO burger_list (ordered_burger, burger_eaten, date) VALUE('Vegie Burger', 1, '2017-05-19 08:32:00');
INSERT INTO burger_list (ordered_burger, burger_eaten, date) VALUE('1 Pound Burger', 0, '2017-05-19 07:32:00');