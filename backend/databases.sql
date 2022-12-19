CREATE SCHEMA IF NOT EXISTS `street_art_hunter` DEFAULT CHARACTER SET utf8 ;
USE `street_art_hunter` ;

-- -----------------------------------------------------
-- Table `street_art_hunter`.`Artists`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `street_art_hunter`.`Artists` ;

CREATE TABLE IF NOT EXISTS `street_art_hunter`.`Artists` (
  `id_artist` INT NOT NULL AUTO_INCREMENT,
  `artist_name` VARCHAR(45) NULL,
  PRIMARY KEY (`id_artist`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `street_art_hunter`.`Works`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `street_art_hunter`.`Works` ;

CREATE TABLE IF NOT EXISTS `street_art_hunter`.`Works` (
  `id_work` INT NOT NULL AUTO_INCREMENT,
  `Longitude` DECIMAL(10,9) NULL,
  `Latitude` DECIMAL(10,9) NULL,
  `Artist_id` INT NOT NULL,
  `value_point` INT NULL,
  `artist_id_artist` INT NOT NULL,
  PRIMARY KEY (`id_work`),
  INDEX `fk_work_artist1_idx` (`artist_id_artist` ASC) VISIBLE,
  CONSTRAINT `fk_work_artist1`
    FOREIGN KEY (`artist_id_artist`)
    REFERENCES `street_art_hunter`.`Artists` (`id_artist`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `street_art_hunter`.`Users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `street_art_hunter`.`Users` ;

CREATE TABLE IF NOT EXISTS `street_art_hunter`.`Users` (
  `Id_user` INT NOT NULL,
  `Name` VARCHAR(45) NULL,
  `Lastname` VARCHAR(45) NULL,
  `Scorepoint` INT NULL,
  `Pseudo ??` VARCHAR(45) NULL,
  `isAdmin` TINYINT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`Id_user`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `street_art_hunter`.`Shops`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `street_art_hunter`.`Shops` ;

CREATE TABLE IF NOT EXISTS `street_art_hunter`.`Shops` (
  `id_shop` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NULL,
  `Longitude` DECIMAL(10,9) NULL,
  `Latitude` DECIMAL(10,9) NULL,
  `description` VARCHAR(45) NULL,
  PRIMARY KEY (`id_shop`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `street_art_hunter`.`User_has_fav_work`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `street_art_hunter`.`User_has_fav_work` ;

CREATE TABLE IF NOT EXISTS `street_art_hunter`.`User_has_fav_work` (
  `id` INT NOT NULL,
  `User_idUtilisateurs` INT NOT NULL,
  `work_id_work` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_User_has_Oeuvre_User1_idx` (`User_idUtilisateurs` ASC) VISIBLE,
  INDEX `fk_User_has_fav_work_work1_idx` (`work_id_work` ASC) VISIBLE,
  CONSTRAINT `fk_User_has_Oeuvre_User1`
    FOREIGN KEY (`User_idUtilisateurs`)
    REFERENCES `street_art_hunter`.`Users` (`Id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_User_has_fav_work_work1`
    FOREIGN KEY (`work_id_work`)
    REFERENCES `street_art_hunter`.`Works` (`id_work`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `street_art_hunter`.`Picture`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `street_art_hunter`.`Picture` ;

CREATE TABLE IF NOT EXISTS `street_art_hunter`.`Picture` (
  `id_picture` INT NOT NULL AUTO_INCREMENT,
  `Picture_url` VARCHAR(150) NOT NULL,
  `User_Id_user` INT NOT NULL,
  `work_id_work` INT NOT NULL,
  `note` INT NULL,
  `Fav` TINYINT NULL,
  PRIMARY KEY (`id_picture`),
  INDEX `fk_Picture_User1_idx` (`User_Id_user` ASC) VISIBLE,
  INDEX `fk_Picture_work1_idx` (`work_id_work` ASC) VISIBLE,
  CONSTRAINT `fk_Picture_User1`
    FOREIGN KEY (`User_Id_user`)
    REFERENCES `street_art_hunter`.`Users` (`Id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Picture_work1`
    FOREIGN KEY (`work_id_work`)
    REFERENCES `street_art_hunter`.`Works` (`id_work`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `street_art_hunter`.`User_has_fav_pictures`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `street_art_hunter`.`User_has_fav_pictures` ;

CREATE TABLE IF NOT EXISTS `street_art_hunter`.`User_has_fav_pictures` (
  `id` INT NOT NULL,
  `User_Id_user` INT NOT NULL,
  `Picture_id_picture` INT NOT NULL,
  INDEX `fk_user_has_fav_pictures_User1_idx` (`User_Id_user` ASC) VISIBLE,
  INDEX `fk_user_has_fav_pictures_Picture1_idx` (`Picture_id_picture` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_user_has_fav_pictures_User1`
    FOREIGN KEY (`User_Id_user`)
    REFERENCES `street_art_hunter`.`Users` (`Id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_fav_pictures_Picture1`
    FOREIGN KEY (`Picture_id_picture`)
    REFERENCES `street_art_hunter`.`Picture` (`id_picture`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `street_art_hunter`.`Badges`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `street_art_hunter`.`Badges` ;

CREATE TABLE IF NOT EXISTS `street_art_hunter`.`Badges` (
  `id_badge` INT NOT NULL AUTO_INCREMENT,
  `badge_name` VARCHAR(100) NOT NULL,
  `badge_desc` VARCHAR(250) NOT NULL,
  `badge_img` VARCHAR(150) NOT NULL,
  `badge_condition` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id_badge`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `street_art_hunter`.`User_has_badge`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `street_art_hunter`.`User_has_badge` ;

CREATE TABLE IF NOT EXISTS `street_art_hunter`.`User_has_badge` (
  `id` INT NOT NULL,
  `Badges_id_badge` INT NOT NULL,
  `Users_id_user` INT NOT NULL,
  INDEX `fk_User_has_badge_Badges1_idx` (`Badges_id_badge` ASC) VISIBLE,
  INDEX `fk_User_has_badge_Users1_idx` (`Users_id_user` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_User_has_badge_Badges1`
    FOREIGN KEY (`Badges_id_badge`)
    REFERENCES `street_art_hunter`.`Badges` (`id_badge`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_User_has_badge_Users1`
    FOREIGN KEY (`Users_id_user`)
    REFERENCES `street_art_hunter`.`Users` (`Id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
