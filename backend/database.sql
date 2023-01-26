-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS
, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS
, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE
, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


-- -----------------------------------------------------
-- Table `artist`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `artist` ;

CREATE TABLE
IF NOT EXISTS `artist`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `artist_name` VARCHAR
(45) NULL DEFAULT NULL,
  PRIMARY KEY
(`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `badge`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `badge` ;

CREATE TABLE
IF NOT EXISTS `badge`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `badge_name` VARCHAR
(100) NOT NULL,
  `badge_desc` VARCHAR
(250) NOT NULL,
  `badge_img` VARCHAR
(150) NOT NULL,
  `badge_condition` VARCHAR
(200) NOT NULL,
  PRIMARY KEY
(`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

CREATE TABLE
IF NOT EXISTS `user`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR
(45) NOT NULL,
  `lastname` VARCHAR
(45) NOT NULL,
  `scorepoint` INT NULL DEFAULT '0',
  `pseudo` VARCHAR
(45) NOT NULL,
  `is_admin` TINYINT NULL DEFAULT '0',
  `email` VARCHAR
(100) NOT NULL,
  `hashedPassword` VARCHAR
(100) NOT NULL,
  PRIMARY KEY
(`id`))
ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `work`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `work` ;

CREATE TABLE
IF NOT EXISTS `work`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `work_name` VARCHAR(150) NOT NULL,
  `longitude` DECIMAL
(20,18) NULL DEFAULT NULL,
  `latitude` DECIMAL
(20,18) NULL DEFAULT NULL,
  `value_point` INT NULL DEFAULT NULL,
  `is_validated` TINYINT NULL DEFAULT NULL,
  `artist_id` INT NOT NULL,
  PRIMARY KEY
(`id`),
  CONSTRAINT `fk_work_artist1`
    FOREIGN KEY
(`artist_id`)
    REFERENCES `artist`
(`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `picture`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `picture` ;

CREATE TABLE
IF NOT EXISTS `picture`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `picture_url` VARCHAR(150) NOT NULL,
  `creation_date` DATETIME NULL DEFAULT NULL,
  `is_validated` TINYINT NULL DEFAULT NULL,
  `work_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY
(`id`),
  CONSTRAINT `fk_picture_user1`
    FOREIGN KEY
(`user_id`)
    REFERENCES `user`
(`id`),
  CONSTRAINT `fk_picture_work1`
    FOREIGN KEY
(`work_id`)
    REFERENCES `work`
(`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shop`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shop` ;

CREATE TABLE
IF NOT EXISTS `shop`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR
(45) NULL DEFAULT NULL,
  `longitude` DECIMAL
(10,9) NULL DEFAULT NULL,
  `latitude` DECIMAL
(10,9) NULL DEFAULT NULL,
  `description` VARCHAR
(45) NULL DEFAULT NULL,
  PRIMARY KEY
(`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user_has_badge`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_has_badge` ;

CREATE TABLE
IF NOT EXISTS `user_has_badge`
(
  `badge_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  CONSTRAINT `fk_user_has_badge_badge1`
    FOREIGN KEY
(`badge_id`)
    REFERENCES `badge`
(`id`),
  CONSTRAINT `fk_user_has_badge_user1`
    FOREIGN KEY
(`user_id`)
    REFERENCES `user`
(`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user_has_fav_picture`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_has_fav_picture` ;

CREATE TABLE
IF NOT EXISTS `user_has_fav_picture`
(
  `user_id` INT NOT NULL,
  `picture_id` INT NOT NULL,
  CONSTRAINT `fk_user_has_fav_picture_picture1`
    FOREIGN KEY
(`picture_id`)
    REFERENCES `picture`
(`id`),
  CONSTRAINT `fk_user_has_fav_picture_user1`
    FOREIGN KEY
(`user_id`)
    REFERENCES `user`
(`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user_has_fav_work`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_has_fav_work` ;

CREATE TABLE
IF NOT EXISTS `user_has_fav_work`
(
  `user_id` INT NOT NULL,
  `work_id` INT NOT NULL,
  CONSTRAINT `fk_user_has_fav_work_user1`
    FOREIGN KEY
(`user_id`)
    REFERENCES `user`
(`id`),
  CONSTRAINT `fk_user_has_fav_work_work1`
    FOREIGN KEY
(`work_id`)
    REFERENCES `work`
(`id`))
ENGINE = InnoDB;


SET SQL_MODE
=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS
=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS
=@OLD_UNIQUE_CHECKS;



INSERT INTO `user`
VALUES
  (1, 'Vincent', 'Chabosson', 1800, 'Gakchabla', 0, 'chabosson@live.fr', '$argon2id$v=19$m=65536,t=5,p=1$+VCtMnhwkGfgDOodFzoG7g$QaC4BxNuJqXzmRMzem8AVgHHssxGLBqx/Vo4MwMaDI0'),
  (2, 'Daryl', 'Chaise', 3000, 'Darylou', 0, '258@joe.fr', '$argon2id$v=19$m=65536,t=5,p=1$vhAxhurqo/BU2H1lKpe7Gg$T30whlZrvP29WtN9IMTSzzo0eynyty53t/7orN3NyZI'),
  (3, 'Younes', 'Ouasmi', 2500, 'Younz', 0, 'youyou@you.fr', '$argon2id$v=19$m=65536,t=5,p=1$tjIg61g9LJKjuQeK/ABv5A$U/CrlfFbcJUWQ+3OTzLz3zxxvoaZEN8mju82ZFxybDU'),
  (4, 'Gaelle', 'Goyon', 1800, 'gaellz', 0, 'Gaelle@live.fr', '$argon2id$v=19$m=65536,t=5,p=1$+JPlAZnXYXplWEv3p3QPvA$1g+4sW0NdJSwdBm0qfc1EsElwhqtKWQsRP6KeSA9wNg'),
  (5, 'Java', 'Script', 1000, 'JS', 0, 'Js@dev.fr', '$argon2id$v=19$m=65536,t=5,p=1$DkEOWlToH4JRh/kR+DT+Og$WKH0QiY5w9JK0cLMzq/AZW/8lFTcPXZtuKSLDz6kIuU'),
  (6, 'PH', 'P', 2, 'PHP', 0, 'php@dev.fr', '$argon2id$v=19$m=65536,t=5,p=1$aSOTZx466EYnYACZWa0Bug$rFRpJqvOsh4rY2PnIlyeE8/mAddR3Ia9ettG+xarhSg'),
  (7, 'Admin', 'Admin', 0, 'Admin', 1, 'admin@live.fr', '$argon2id$v=19$m=65536,t=5,p=1$RWt6DIUTyWrrc0ylG/Rlsg$hL3U6FjAW+ctL9s6DOYxXV7N1DJjkcxTbVjMcwpGE04'),
  (8, 'test', '01', 0, 'Test01', 0, 'test@live.fr', '$argon2id$v=19$m=65536,t=5,p=1$/IxoAlrwgixDVKnt6WySZw$XQZ3hNaTsEoye3i5kmIRMtbt+ZxmE0OcnWEObU+FgZ0'),
  (9, 'test', '02', 0, 'Test02', 0, 'toast@live.fr', '$argon2id$v=19$m=65536,t=5,p=1$FjSe7NKP24AgOGHuZQviwA$A8+hy8vJP0pmELqXEoKjBjxDxskKISWlMxoTjbhHBs4'),
  (10, 'Burrito', 'Salsa', 0, 'Taco', 0, 'taco@live.fr', '$argon2id$v=19$m=65536,t=5,p=1$D6WDLZAd3QzAqvC+PNqdjQ$JkcbA54pwnwp1RQoIRj6oZjDG2C+FbUkXDQv6DNd+no');


insert into badge
VALUES
  (1, "Médaille d'Or", "Tu as atteint le sommet", "https://i.imgur.com/RGyBBHB.png", "Atteindre le rang 1"),
  (2, "Médaille d'Argent", "Tu y es presque!", "https://i.imgur.com/RGyBBHB.png", "Atteindre le rang 2"),
  (3, "Médaille de Bronze", "Tu as atteint le podium", "https://i.imgur.com/RGyBBHB.png", "Atteindre le rang 3"),
  (4, "Centenaire", "Tu as obtenu 100Points", "https://i.imgur.com/RGyBBHB.png", "Obtenir 10Points"),
  (5, "Explorateur", "Tu as découvert un terrain inconnu", "https://i.imgur.com/RGyBBHB.png", "Prendre en photo une oeuvre non repertoriée");

insert into user_has_badge
values
  (1, 1),
  (1, 2),
  (3, 3),
  (3, 4),
  (3, 5),
  (2, 1),
  (3, 1),
  (2, 4),
  (1, 4),
  (4, 4);

ALTER TABLE `user` 
ADD COLUMN `avatar` VARCHAR(45) NULL AFTER `hashedPassword`;

INSERT INTO `artist`
(
`artist_name`)
VALUES
("Artiste Inconnu"),("Vincent"),("Younes"),("Gaëlle"),("Daryl");