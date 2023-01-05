-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema street_art_hunter
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema street_art_hunter
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `street_art_hunter` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `street_art_hunter` ;

-- -----------------------------------------------------
-- Table `street_art_hunter`.`artist`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `street_art_hunter`.`artist` ;

CREATE TABLE IF NOT EXISTS `street_art_hunter`.`artist` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `artist_name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `street_art_hunter`.`badge`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `street_art_hunter`.`badge` ;

CREATE TABLE IF NOT EXISTS `street_art_hunter`.`badge` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `badge_name` VARCHAR(100) NOT NULL,
  `badge_desc` VARCHAR(250) NOT NULL,
  `badge_img` VARCHAR(150) NOT NULL,
  `badge_condition` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `street_art_hunter`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `street_art_hunter`.`user` ;

CREATE TABLE IF NOT EXISTS `street_art_hunter`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `scorepoint` INT NULL DEFAULT '0',
  `pseudo` VARCHAR(45) NOT NULL,
  `isAdmin` TINYINT NULL DEFAULT '0',
  `email` VARCHAR(100) NOT NULL,
  `hashedPassword` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;



-- -----------------------------------------------------
-- Table `street_art_hunter`.`work`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `street_art_hunter`.`work` ;

CREATE TABLE IF NOT EXISTS `street_art_hunter`.`work` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Longitude` DECIMAL(10,9) NULL DEFAULT NULL,
  `Latitude` DECIMAL(10,9) NULL DEFAULT NULL,
  `value_point` INT NULL DEFAULT NULL,
  `artist_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_work_artist1_idx` (`artist_id` ASC) VISIBLE,
  CONSTRAINT `fk_work_artist1`
    FOREIGN KEY (`artist_id`)
    REFERENCES `street_art_hunter`.`artist` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `street_art_hunter`.`picture`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `street_art_hunter`.`picture` ;

CREATE TABLE IF NOT EXISTS `street_art_hunter`.`picture` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `picture_url` VARCHAR(150) NOT NULL,
  `note` INT NULL DEFAULT NULL,
  `Fav` TINYINT NULL DEFAULT NULL,
  `work_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_picture_work1_idx` (`work_id` ASC) VISIBLE,
  INDEX `fk_picture_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_picture_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `street_art_hunter`.`user` (`id`),
  CONSTRAINT `fk_picture_work1`
    FOREIGN KEY (`work_id`)
    REFERENCES `street_art_hunter`.`work` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `street_art_hunter`.`shop`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `street_art_hunter`.`shop` ;

CREATE TABLE IF NOT EXISTS `street_art_hunter`.`shop` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NULL DEFAULT NULL,
  `Longitude` DECIMAL(10,9) NULL DEFAULT NULL,
  `Latitude` DECIMAL(10,9) NULL DEFAULT NULL,
  `description` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `street_art_hunter`.`user_has_badge`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `street_art_hunter`.`user_has_badge` ;

CREATE TABLE IF NOT EXISTS `street_art_hunter`.`user_has_badge` (
  `badge_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  INDEX `fk_user_has_badge_badge1_idx` (`badge_id` ASC) VISIBLE,
  INDEX `fk_user_has_badge_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_badge_badge1`
    FOREIGN KEY (`badge_id`)
    REFERENCES `street_art_hunter`.`badge` (`id`),
  CONSTRAINT `fk_user_has_badge_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `street_art_hunter`.`user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `street_art_hunter`.`user_has_fav_picture`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `street_art_hunter`.`user_has_fav_picture` ;

CREATE TABLE IF NOT EXISTS `street_art_hunter`.`user_has_fav_picture` (
  `user_id` INT NOT NULL,
  `picture_id` INT NOT NULL,
  INDEX `fk_user_has_fav_picture_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_user_has_fav_picture_picture1_idx` (`picture_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_fav_picture_picture1`
    FOREIGN KEY (`picture_id`)
    REFERENCES `street_art_hunter`.`picture` (`id`),
  CONSTRAINT `fk_user_has_fav_picture_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `street_art_hunter`.`user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `street_art_hunter`.`user_has_fav_work`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `street_art_hunter`.`user_has_fav_work` ;

CREATE TABLE IF NOT EXISTS `street_art_hunter`.`user_has_fav_work` (
  `user_id` INT NOT NULL,
  `work_id` INT NOT NULL,
  INDEX `fk_user_has_fav_work_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_user_has_fav_work_work1_idx` (`work_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_fav_work_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `street_art_hunter`.`user` (`id`),
  CONSTRAINT `fk_user_has_fav_work_work1`
    FOREIGN KEY (`work_id`)
    REFERENCES `street_art_hunter`.`work` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



INSERT INTO `user` VALUES (1,'Vincent','Chabosson',1600,'Gakchabla',0,'chabosson@live.fr','$argon2id$v=19$m=65536,t=5,p=1$+VCtMnhwkGfgDOodFzoG7g$QaC4BxNuJqXzmRMzem8AVgHHssxGLBqx/Vo4MwMaDI0'),
(2,'Daryl','Chaise',3000,'Darylou',0,'258@joe.fr','$argon2id$v=19$m=65536,t=5,p=1$vhAxhurqo/BU2H1lKpe7Gg$T30whlZrvP29WtN9IMTSzzo0eynyty53t/7orN3NyZI'),
(3,'Younes','Ouasmi',2500,'Younz',0,'youyou@you.fr','$argon2id$v=19$m=65536,t=5,p=1$tjIg61g9LJKjuQeK/ABv5A$U/CrlfFbcJUWQ+3OTzLz3zxxvoaZEN8mju82ZFxybDU'),
(4,'Gaelle','Goyon',1800,'gaellz',0,'Gaelle@live.fr','$argon2id$v=19$m=65536,t=5,p=1$+JPlAZnXYXplWEv3p3QPvA$1g+4sW0NdJSwdBm0qfc1EsElwhqtKWQsRP6KeSA9wNg'),
(5,'Java','Script',1000,'JS',0,'Js@dev.fr','$argon2id$v=19$m=65536,t=5,p=1$DkEOWlToH4JRh/kR+DT+Og$WKH0QiY5w9JK0cLMzq/AZW/8lFTcPXZtuKSLDz6kIuU'),
(6,'PH','P',2,'PHP',0,'php@dev.fr','$argon2id$v=19$m=65536,t=5,p=1$aSOTZx466EYnYACZWa0Bug$rFRpJqvOsh4rY2PnIlyeE8/mAddR3Ia9ettG+xarhSg'),
(7,'Admin','Admin',0,'Admin',1,'admin@live.fr','$argon2id$v=19$m=65536,t=5,p=1$RWt6DIUTyWrrc0ylG/Rlsg$hL3U6FjAW+ctL9s6DOYxXV7N1DJjkcxTbVjMcwpGE04'),
(8,'test','01',0,'Test01',0,'test@live.fr','$argon2id$v=19$m=65536,t=5,p=1$/IxoAlrwgixDVKnt6WySZw$XQZ3hNaTsEoye3i5kmIRMtbt+ZxmE0OcnWEObU+FgZ0'),
(9,'test','02',0,'Test02',0,'toast@live.fr','$argon2id$v=19$m=65536,t=5,p=1$FjSe7NKP24AgOGHuZQviwA$A8+hy8vJP0pmELqXEoKjBjxDxskKISWlMxoTjbhHBs4'),
(10,'Burrito','Salsa',0,'Taco',0,'taco@live.fr','$argon2id$v=19$m=65536,t=5,p=1$D6WDLZAd3QzAqvC+PNqdjQ$JkcbA54pwnwp1RQoIRj6oZjDG2C+FbUkXDQv6DNd+no');


insert into badge VALUES (1, "Médaille d'Or", "Tu as atteint le sommet", "https://imgur.com/a/bao0yx0", "Atteindre le rang 1"),
(2, "Médaille d'Argent", "Tu y es presque!", "https://imgur.com/a/bao0yx0", "Atteindre le rang 2"),
(3, "Médaille de Bronze", "Tu as atteint le podium", "https://imgur.com/a/bao0yx0", "Atteindre le rang 3"),
(4, "Centenaire", "Tu as obtenu 100Points", "https://imgur.com/a/bao0yx0", "Obtenir 10Points"),
(5, "Explorateur", "Tu as découvert un terrain inconnu", "https://imgur.com/a/bao0yx0", "Prendre en photo une oeuvre non repertoriée");

insert into user_has_badge values (1,1), (1,2), (3,3), (3,4), (3,5);

ALTER TABLE `street_art_hunter`.`user` 
ADD COLUMN `avatar` VARCHAR(45) NULL AFTER `hashedPassword`;