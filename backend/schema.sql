-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema final
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema final
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `final` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `final` ;

-- -----------------------------------------------------
-- Table `final`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `final`.`admin` (
  `firebase_id` VARCHAR(100) NOT NULL,
  `admin_email` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`firebase_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `final`.`companies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `final`.`companies` (
  `company_firebase_id` VARCHAR(100) NOT NULL,
  `company_email` VARCHAR(100) NOT NULL,
  `tax_identification_number` VARCHAR(25) NULL DEFAULT NULL,
  `verified` TINYINT NULL DEFAULT '0',
  `company_name` VARCHAR(20) NULL DEFAULT NULL,
  `company_introduction` TEXT NULL,
  `company_field` VARCHAR(45) NULL,
  `company_size` ENUM("Small", "Medium", "Large", "International") NULL,
  PRIMARY KEY (`company_firebase_id`),
  UNIQUE INDEX `tax_identification_number` (`tax_identification_number` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `final`.`developers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `final`.`developers` (
  `firebase_id` VARCHAR(100) NOT NULL,
  `developer_email` VARCHAR(60) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `pseudo` VARCHAR(45) NOT NULL,
  `points` INT NOT NULL DEFAULT '0',
  `xp` INT NOT NULL DEFAULT '0',
  `rank` INT NOT NULL DEFAULT '10',
  `position` INT NOT NULL,
  `tech_stack` JSON NOT NULL,
  `description` VARCHAR(300) NOT NULL,
  `available` TINYINT NULL DEFAULT NULL,
  `cv` VARCHAR(100) NULL DEFAULT NULL,
  `role` VARCHAR(20) NOT NULL,
  `image_url` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`firebase_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `final`.`job_offer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `final`.`job_offer` (
  `job_offer_id` INT NOT NULL AUTO_INCREMENT,
  `job_offer_description` VARCHAR(300) NOT NULL,
  `tech_stack` JSON NOT NULL,
  `companies_company_firebase_id` VARCHAR(100) NOT NULL,
  `job_offer_role` VARCHAR(20) NULL DEFAULT NULL,
  `job_type` VARCHAR(20) NULL DEFAULT NULL,
  `job_offer_date` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`job_offer_id`),
  INDEX `fk_job_offer_companies1_idx` (`companies_company_firebase_id` ASC) VISIBLE,
  CONSTRAINT `fk_job_offer_companies1`
    FOREIGN KEY (`companies_company_firebase_id`)
    REFERENCES `final`.`companies` (`company_firebase_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `final`.`matching`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `final`.`matching` (
  `idmatching` INT NOT NULL AUTO_INCREMENT,
  `matching_stack` JSON NOT NULL,
  `job_offer_idrequirements` INT NOT NULL,
  `developers_firebase_id` VARCHAR(100) NOT NULL,
  `company_id` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`idmatching`),
  INDEX `fk_matching_job_offer1_idx` (`job_offer_idrequirements` ASC) VISIBLE,
  INDEX `fk_matching_developers1_idx` (`developers_firebase_id` ASC) VISIBLE,
  CONSTRAINT `fk_matching_developers1`
    FOREIGN KEY (`developers_firebase_id`)
    REFERENCES `final`.`developers` (`firebase_id`),
  CONSTRAINT `fk_matching_job_offer1`
    FOREIGN KEY (`job_offer_idrequirements`)
    REFERENCES `final`.`job_offer` (`job_offer_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `final`.`interview`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `final`.`interview` (
  `idinterview` INT NOT NULL AUTO_INCREMENT,
  `room_number` INT NOT NULL,
  `date` DATE NOT NULL,
  `result` TINYINT NULL DEFAULT NULL,
  `matching_idmatching` INT NOT NULL,
  PRIMARY KEY (`idinterview`),
  INDEX `fk_interview_matching1_idx` (`matching_idmatching` ASC) VISIBLE,
  CONSTRAINT `fk_interview_matching1`
    FOREIGN KEY (`matching_idmatching`)
    REFERENCES `final`.`matching` (`idmatching`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `final`.`toy_problems`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `final`.`toy_problems` (
  `idtoy_problems` INT NOT NULL AUTO_INCREMENT,
  `level` JSON NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `content` JSON NOT NULL,
  `points` INT NOT NULL,
  `rank` INT NOT NULL,
  PRIMARY KEY (`idtoy_problems`))
ENGINE = InnoDB
AUTO_INCREMENT = 25
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `final`.`solve`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `final`.`solve` (
  `idsolve` INT NOT NULL AUTO_INCREMENT,
  `toy_problems_idtoy_problems` INT NOT NULL,
  `developers_firebase_id` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idsolve`),
  INDEX `fk_solve_toy_problems1_idx` (`toy_problems_idtoy_problems` ASC) VISIBLE,
  INDEX `fk_solve_developers1_idx` (`developers_firebase_id` ASC) VISIBLE,
  CONSTRAINT `fk_solve_developers1`
    FOREIGN KEY (`developers_firebase_id`)
    REFERENCES `final`.`developers` (`firebase_id`),
  CONSTRAINT `fk_solve_toy_problems1`
    FOREIGN KEY (`toy_problems_idtoy_problems`)
    REFERENCES `final`.`toy_problems` (`idtoy_problems`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `final`.`job_application`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `final`.`job_application` (
  `application_id` INT NOT NULL AUTO_INCREMENT,
  `developers_firebase_id` VARCHAR(100) NOT NULL,
  `job_offer_job_offer_id` INT NOT NULL,
  `status` ENUM("Pending", "Accepted", "Rejected", "Interview scheduled") NULL,
  `cover_letter` TEXT NULL,
  `application_date` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `resume_url` VARCHAR(100) NULL,
  PRIMARY KEY (`application_id`),
  INDEX `fk_job_application_developers1_idx` (`developers_firebase_id` ASC) VISIBLE,
  INDEX `fk_job_application_job_offer1_idx` (`job_offer_job_offer_id` ASC) VISIBLE,
  CONSTRAINT `fk_job_application_developers1`
    FOREIGN KEY (`developers_firebase_id`)
    REFERENCES `final`.`developers` (`firebase_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_job_application_job_offer1`
    FOREIGN KEY (`job_offer_job_offer_id`)
    REFERENCES `final`.`job_offer` (`job_offer_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `final`.`company_availability`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `final`.`company_availability` (
  `schedule_id` INT NOT NULL AUTO_INCREMENT,
  `day_of_week` ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday') NULL,
  `start_time` TIME NULL,
  `end_time` TIME NULL,
  `companies_company_firebase_id` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`schedule_id`),
  INDEX `fk_company_availability_companies1_idx` (`companies_company_firebase_id` ASC) VISIBLE,
  CONSTRAINT `fk_company_availability_companies1`
    FOREIGN KEY (`companies_company_firebase_id`)
    REFERENCES `final`.`companies` (`company_firebase_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
