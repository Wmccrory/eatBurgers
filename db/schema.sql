-- Creating sins database that eaters will devour from

CREATE DATABASE sineaterDB;
USE sineaterDB;

-- Creating table to hold sins

CREATE TABLE sins(
id INTEGER(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
sins VARCHAR(200) NOT NULL,
devoured BOOLEAN DEFAULT false
);