
-- -----------------------------------------------------
-- Schema street_art_hunter
-- -----------------------------------------------------
CREATE SCHEMA
IF NOT EXISTS `street_art_hunter` DEFAULT CHARACTER
SET utf8 ;
USE `street_art_hunter`
;

-- -----------------------------------------------------
-- Table `street_art_hunter`.`Artists`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `street_art_hunter`.`Artists` ;

CREATE TABLE
IF NOT EXISTS `street_art_hunter`.`Artists`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `artist_name` VARCHAR
(45) NULL,
  PRIMARY KEY
(`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `street_art_hunter`.`Works`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `street_art_hunter`.`Works` ;

CREATE TABLE
IF NOT EXISTS `street_art_hunter`.`Works`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `Longitude` DECIMAL
(10,9) NULL,
  `Latitude` DECIMAL
(10,9) NULL,
  `value_point` INT NULL,
  `Artists_id` INT NOT NULL,
  PRIMARY KEY
(`id`),
  INDEX `fk_Works_Artists1_idx`
(`Artists_id` ASC) VISIBLE,
  CONSTRAINT `fk_Works_Artists1`
    FOREIGN KEY
(`Artists_id`)
    REFERENCES `street_art_hunter`.`Artists`
(`id`)
    ON
DELETE NO ACTION
    ON
UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `street_art_hunter`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `street_art_hunter`.`users` ;

CREATE TABLE
IF NOT EXISTS `street_art_hunter`.`users`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR
(45) NOT NULL,
  `lastname` VARCHAR
(45) NOT NULL,
  `scorepoint` INT NULL DEFAULT 0,
  `pseudo` VARCHAR
(45) NOT NULL,
  `isAdmin` TINYINT NULL DEFAULT 0,
  `email` VARCHAR
(100) NOT NULL,
  `hashedPassword` VARCHAR
(100) NOT NULL,
  PRIMARY KEY
(`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `street_art_hunter`.`Shops`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `street_art_hunter`.`Shops` ;

CREATE TABLE
IF NOT EXISTS `street_art_hunter`.`Shops`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR
(45) NULL,
  `Longitude` DECIMAL
(10,9) NULL,
  `Latitude` DECIMAL
(10,9) NULL,
  `description` VARCHAR
(45) NULL,
  PRIMARY KEY
(`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `street_art_hunter`.`User_has_fav_work`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `street_art_hunter`.`User_has_fav_work` ;

CREATE TABLE
IF NOT EXISTS `street_art_hunter`.`user_has_fav_work`
(
  `id` INT NOT NULL,
  `users_id` INT NOT NULL,
  `Works_id` INT NOT NULL,
  PRIMARY KEY
(`id`),
  INDEX `fk_User_has_fav_work_users1_idx`
(`users_id` ASC) VISIBLE,
  INDEX `fk_User_has_fav_work_Works1_idx`
(`Works_id` ASC) VISIBLE,
  CONSTRAINT `fk_User_has_fav_work_users1`
    FOREIGN KEY
(`users_id`)
    REFERENCES `street_art_hunter`.`users`
(`id`)
    ON
DELETE NO ACTION
    ON
UPDATE NO ACTION,
  CONSTRAINT `fk_User_has_fav_work_Works1`
    FOREIGN KEY
(`Works_id`)
    REFERENCES `street_art_hunter`.`Works`
(`id`)
    ON
DELETE NO ACTION
    ON
UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `street_art_hunter`.`Picture`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `street_art_hunter`.`Picture` ;

CREATE TABLE
IF NOT EXISTS `street_art_hunter`.`Picture`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `Picture_url` VARCHAR
(150) NOT NULL,
  `note` INT NULL,
  `Fav` TINYINT NULL,
  `Works_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY
(`id`),
  INDEX `fk_Picture_Works1_idx`
(`Works_id` ASC) VISIBLE,
  INDEX `fk_Picture_users1_idx`
(`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_Picture_Works1`
    FOREIGN KEY
(`Works_id`)
    REFERENCES `street_art_hunter`.`Works`
(`id`)
    ON
DELETE NO ACTION
    ON
UPDATE NO ACTION,
  CONSTRAINT `fk_Picture_users1`
    FOREIGN KEY
(`users_id`)
    REFERENCES `street_art_hunter`.`users`
(`id`)
    ON
DELETE NO ACTION
    ON
UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `street_art_hunter`.`User_has_fav_pictures`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `street_art_hunter`.`User_has_fav_pictures` ;

CREATE TABLE
IF NOT EXISTS `street_art_hunter`.`User_has_fav_pictures`
(
  `id` INT NOT NULL,
  `users_id` INT NOT NULL,
  `Picture_id` INT NOT NULL,
  PRIMARY KEY
(`id`),
  INDEX `fk_User_has_fav_pictures_users1_idx`
(`users_id` ASC) VISIBLE,
  INDEX `fk_User_has_fav_pictures_Picture1_idx`
(`Picture_id` ASC) VISIBLE,
  CONSTRAINT `fk_User_has_fav_pictures_users1`
    FOREIGN KEY
(`users_id`)
    REFERENCES `street_art_hunter`.`users`
(`id`)
    ON
DELETE NO ACTION
    ON
UPDATE NO ACTION,
  CONSTRAINT `fk_User_has_fav_pictures_Picture1`
    FOREIGN KEY
(`Picture_id`)
    REFERENCES `street_art_hunter`.`Picture`
(`id`)
    ON
DELETE NO ACTION
    ON
UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `street_art_hunter`.`Badges`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `street_art_hunter`.`Badges` ;

CREATE TABLE
IF NOT EXISTS `street_art_hunter`.`Badges`
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
-- Table `street_art_hunter`.`User_has_badge`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `street_art_hunter`.`User_has_badge` ;

CREATE TABLE
IF NOT EXISTS `street_art_hunter`.`user_has_badge`
(
  `id` INT NOT NULL,
  `Badges_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY
(`id`),
  INDEX `fk_User_has_badge_Badges1_idx`
(`Badges_id` ASC) VISIBLE,
  INDEX `fk_User_has_badge_users1_idx`
(`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_User_has_badge_Badges1`
    FOREIGN KEY
(`Badges_id`)
    REFERENCES `street_art_hunter`.`Badges`
(`id`)
    ON
DELETE NO ACTION
    ON
UPDATE NO ACTION,
  CONSTRAINT `fk_User_has_badge_users1`
    FOREIGN KEY
(`users_id`)
    REFERENCES `street_art_hunter`.`users`
(`id`)
    ON
DELETE NO ACTION
    ON
UPDATE NO ACTION)
ENGINE = InnoDB;


