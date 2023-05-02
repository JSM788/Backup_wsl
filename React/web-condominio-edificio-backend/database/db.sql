DROP DATABASE IF EXISTS gbs_dev_db;
CREATE DATABASE IF NOT EXISTS gbs_dev_db;
USE gbs_dev_db;

DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`
(
 `id`           smallint NOT NULL AUTO_INCREMENT,
 `created_at`   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `updated_at`   TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 `name`         varchar(120) NOT NULL,
 `description`  varchar(250) NULL,
 `user_created` varchar(60) NOT NULL,
 `user_updated` varchar(60) NULL,
PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `document_type`;
CREATE TABLE `document_type`
(
 `id`         int NOT NULL AUTO_INCREMENT,
 `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 `name`       varchar(45) NOT NULL,
PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`
(
 `id`               int NOT NULL AUTO_INCREMENT,
 `created_at`       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `updated_at`       TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 `first_name`       varchar(50) NOT NULL,
 `last_name`        varchar(50) NOT NULL,
 `id_document_type` int NOT NULL,
 `number_document`  int NOT NULL,
 `email`            varchar(120) NOT NULL,
 `password`         varchar(40) NOT NULL,
 `phone`            int NOT NULL,
 `birth_date`       date NOT NULL,
 `id_role`      	smallint NOT NULL,
PRIMARY KEY (`id`),
KEY `id_document_type` (`id_document_type`),
CONSTRAINT `user_fk1` FOREIGN KEY (`id_document_type`) REFERENCES `document_type` (`id`) ON DELETE CASCADE,
KEY `id_role` (`id_role`),
CONSTRAINT `user_fk2` FOREIGN KEY (`id_role`) REFERENCES `role` (`id`) ON DELETE CASCADE
);

DROP TABLE IF EXISTS `type_expenses`;
CREATE TABLE `type_expenses`
(
 `id`          int NOT NULL AUTO_INCREMENT ,
 `created_at`  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `updated_at`  TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 `name`        varchar(120) NOT NULL,
 `description` varchar(250) NULL,
PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `condominium`;
CREATE TABLE `condominium`
(
 `id`           int NOT NULL AUTO_INCREMENT,
 `created_at`   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `updated_at`   TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 `name`         varchar(250) NOT NULL,
 `ruc`          bigint NOT NULL,
 `phone`        int NOT NULL,
 `email`        varchar(120) NOT NULL,
 `address`		varchar(120) NOT NULL,
 `landline`     int NOT NULL,
 `description`  varchar(250) NULL,
 `user_created` varchar(60) NOT NULL,
 `user_updated` varchar(60) NULL,
PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `building`;
CREATE TABLE `building`
(
 `id`             int NOT NULL AUTO_INCREMENT,
 `created_at`     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `updated_at`     TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 `id_condominium` int NOT NULL,
 `name_building`  varchar(120) NOT NULL,
 `ruc`          bigint NOT NULL,
 `phone`        int NOT NULL,
 `email`        varchar(120) NOT NULL,
 `description`    varchar(250) NULL,
 `floor`          smallint NOT NULL,
 `address`        varchar(120) NOT NULL,
 `user_created`   varchar(60) NOT NULL,
 `user_updated`   varchar(60) NULL,
PRIMARY KEY (`id`),
KEY `id_condominium` (`id_condominium`),
CONSTRAINT `building_fk10` FOREIGN KEY (`id_condominium`) REFERENCES `condominium` (`id`) ON DELETE CASCADE
);

DROP TABLE IF EXISTS `expenses`;
CREATE TABLE `expenses`
(
 `id`               int NOT NULL AUTO_INCREMENT,
 `created_at`       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `updated_at`       TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 `id_type_expenses` int NOT NULL,
 `month`             	VARCHAR(32) NOT NULL,
 `year`             	VARCHAR(32) NOT NULL,
 `amount`           decimal NOT NULL,
 `description`      varchar(250) NULL,
 `user_created`     varchar(60) NOT NULL,
 `user_updated`     varchar(60) NULL,
PRIMARY KEY (`id`),
KEY `id_type_expenses` (`id_type_expenses`),
CONSTRAINT `expenses_fk9` FOREIGN KEY (`id_type_expenses`) REFERENCES `type_expenses` (`id`) ON DELETE CASCADE
);

DROP TABLE IF EXISTS `country`;
CREATE TABLE `country`
(
 `id`           smallint NOT NULL AUTO_INCREMENT,
 `created_at`   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `updated_at`   TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 `name_country` varchar(60) NOT NULL,
PRIMARY KEY (`id`)
);


DROP TABLE IF EXISTS `province`;
CREATE TABLE `province`
(
 `id`            smallint NOT NULL AUTO_INCREMENT,
 `created_at`    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `updated_at`    TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 `id_country`    smallint NOT NULL,
 `name_province` varchar(60) NOT NULL,
PRIMARY KEY (`id`),
KEY `id_country` (`id_country`),
CONSTRAINT `province_fk13` FOREIGN KEY (`id_country`) REFERENCES `country` (`id`) ON DELETE CASCADE
);

DROP TABLE IF EXISTS `district`;
CREATE TABLE `district`
(
 `id`            smallint NOT NULL AUTO_INCREMENT,
 `created_at`    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `updated_at`    TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 `id_province`  smallint NOT NULL,
 `name_district` varchar(60) NOT NULL,
PRIMARY KEY (`id`),
KEY `id_province` (`id_province`),
CONSTRAINT `district_fk12` FOREIGN KEY (`id_province`) REFERENCES `province` (`id`) ON DELETE CASCADE
);

DROP TABLE IF EXISTS `departament`;
CREATE TABLE `departament`
(
 `id`                 int NOT NULL AUTO_INCREMENT,
 `created_at`         TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `updated_at`         TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 `number_departament` int NOT NULL,
 `id_district`        smallint NOT NULL,
 `id_building`        int NOT NULL,
 `number_bedrooms`    int NOT NULL,
 `floor`              int NOT NULL,
 `description`        varchar(250) NOT NULL,
 `status`             varchar(42) NOT NULL,
 `user_created`       varchar(120) NOT NULL,
 `user_updated`       varchar(120) NULL,
PRIMARY KEY (`id`),
KEY `id_building` (`id_building`),
CONSTRAINT `departament_fk7` FOREIGN KEY (`id_building`) REFERENCES `building` (`id`) ON DELETE CASCADE,
KEY `id_district` (`id_district`),
CONSTRAINT `departament_fk11` FOREIGN KEY (`id_district`) REFERENCES `district` (`id`) ON DELETE CASCADE
);

DROP TABLE IF EXISTS `departament_user`;
CREATE TABLE `departament_user`
(
 `id`             int NOT NULL AUTO_INCREMENT,
 `created_at`     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `updated_at`     TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 `id_user`        int NOT NULL,
 `id_departament` int NOT NULL,
 `user_created`   varchar(60) NOT NULL,
 `user_updated`   varchar(60) NULL,
PRIMARY KEY (`id`),
KEY `id_user` (`id_user`),
CONSTRAINT `departament_user_fk4` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE,
KEY `id_departament` (`id_departament`),
CONSTRAINT `departament_user_fk5` FOREIGN KEY (`id_departament`) REFERENCES `departament` (`id`) ON DELETE CASCADE
);

DROP TABLE IF EXISTS `receipt`;
CREATE TABLE `receipt`
(
 `id`              int NOT NULL AUTO_INCREMENT,
 `created_at`      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `updated_at`      TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 `nro_receipt`     varchar(45) NOT NULL,
 `id_departament`  int NOT NULL,
 `description`     varchar(250) NULL,
 `date_payment`    date NOT NULL,
 `date_expiration` date NOT NULL,
 `amount`          numeric(8,2) NOT NULL,
 `bank_name`       varchar(250) NOT NULL,
 `user_created`    varchar(60) NOT NULL,
 `user_updated`    varchar(45) NULL,
PRIMARY KEY (`id`),
KEY `id_departament` (`id_departament`),
CONSTRAINT `receipt_fk19` FOREIGN KEY (`id_departament`) REFERENCES `departament` (`id`) ON DELETE CASCADE
);

DROP TABLE IF EXISTS `type_payment`;
CREATE TABLE `type_payment`
(
 `id`          smallint NOT NULL AUTO_INCREMENT,
 `created_at`  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `updated_at`  TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 `name_type`   varchar(60) NOT NULL,
 `description` varchar(60) NULL,
PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `details_receipt`;
CREATE TABLE `details_receipt`
(
 `id`               int NOT NULL AUTO_INCREMENT,
 `created_at`       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `updated_at`       TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 `price`            numeric(8,2) NOT NULL,
 `id_type_payments` smallint NOT NULL,
 `id_receipt`       int NOT NULL,
 `date_expiration`  date NOT NULL,
 `total`            numeric(8,2) NOT NULL,
 `user_created`     varchar(60) NOT NULL,
 `user_updated`     varchar(60) NULL,
PRIMARY KEY (`id`),
KEY `id_receipt` (`id_receipt`),
CONSTRAINT `details_receipt_fk21` FOREIGN KEY (`id_receipt`) REFERENCES `receipt` (`id`) ON DELETE CASCADE,
KEY `id_type_payments` (`id_type_payments`),
CONSTRAINT `details_receipt_fk22` FOREIGN KEY (`id_type_payments`) REFERENCES `type_payment` (`id`) ON DELETE CASCADE
);

DROP TABLE IF EXISTS `details_payment`;
CREATE TABLE `details_payment`
(
 `id`              int NOT NULL AUTO_INCREMENT,
 `created_at`      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `updated_at`      TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 `name`            varchar(60) NOT NULL,
 `id_type_payment` smallint NOT NULL,
 `price`           numeric(8,2) NOT NULL,
PRIMARY KEY (`id`),
KEY `id_type_payment` (`id_type_payment`),
CONSTRAINT `details_payment_fk18` FOREIGN KEY (`id_type_payment`) REFERENCES `type_payment` (`id`) ON DELETE CASCADE
);

DROP TABLE IF EXISTS `periodo`;
CREATE TABLE `periodo`
(
 `id`         smallint NOT NULL AUTO_INCREMENT,
 `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 `name`       varchar(40) NOT NULL,
PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `half_payment`;
CREATE TABLE `half_payment`
(
 `id`         smallint NOT NULL AUTO_INCREMENT,
 `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 `name_type`  varchar(60) NOT NULL,
PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `payments`;
CREATE TABLE `payments`
(
 `id`                 int NOT NULL AUTO_INCREMENT,
 `created_at`         TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `updated_at`         TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 `fecha`              date NOT NULL,
 `id_details_payment` int NOT NULL,
 `id_half_payment`    smallint NOT NULL,
 `id_periodo`         smallint NOT NULL,
 `date_expiration`    date NOT NULL,
 `amount`             numeric(8,2) NOT NULL,
 `references_user`    varchar(250) NOT NULL,
 `status`             varchar(20) NOT NULL,
 `user_created`       varchar(60) NOT NULL,
 `user_updated`       varchar(60) NULL,
PRIMARY KEY (`id`),
KEY `id_periodo` (`id_periodo`),
CONSTRAINT `payments_fk16` FOREIGN KEY (`id_periodo`) REFERENCES `periodo` (`id`) ON DELETE CASCADE,
KEY `id_half_payment` (`id_half_payment`),
CONSTRAINT `payments_fk17` FOREIGN KEY (`id_half_payment`) REFERENCES `half_payment` (`id`) ON DELETE CASCADE,
KEY `id_details_payment` (`id_details_payment`),
CONSTRAINT `payments_fk20` FOREIGN KEY (`id_details_payment`) REFERENCES `details_payment` (`id`) ON DELETE CASCADE
);

DROP TABLE IF EXISTS `payment_departaments`;
CREATE TABLE `payment_departaments`
(
 `id`              int NOT NULL AUTO_INCREMENT,
 `id_payments`     int NOT NULL,
 `id_departaments` int NOT NULL,
PRIMARY KEY (`id`),
KEY `id_payments` (`id_payments`),
CONSTRAINT `payment_departaments_fk14` FOREIGN KEY (`id_payments`) REFERENCES `payments` (`id`) ON DELETE CASCADE,
KEY `id_departaments` (`id_departaments`),
CONSTRAINT `payment_departaments_fk15` FOREIGN KEY (`id_departaments`) REFERENCES `departament` (`id`) ON DELETE CASCADE
);

DROP TABLE IF EXISTS `concept`;
CREATE TABLE `concept`
(
 `id`         smallint NOT NULL AUTO_INCREMENT,
 `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 `name_concept`  varchar(60) NOT NULL,
 `description`  varchar(250) NULL,
PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `income`;
CREATE TABLE `income`
(
 `id`               int NOT NULL AUTO_INCREMENT,  -- ID
 `nro_recibo`       varchar(10) NOT NULL,   -- NUMERO DE RECIBO 2022-01
 `id_user` 		    int NOT NULL,  -- PROPIETARIO
 `id_departament`  	int NOT NULL,  -- DEPARTAMENTOI : 202
 `id_type_payment` 	smallint NOT NULL,  -- TIPO PAGO : TRANSAFERENCIA O DEPOSITO
 `dia` char(2) NOT NULL,   -- 28
 `mes` char(2) NOT NULL,  -- 1
 `año` char(4) NOT NULL,  -- 2022
 `numero_operacion` int NOT NULL,  -- 4469
 `banco` varchar(50) NOT NULL,  -- BBVA- BCP
 `lugar_pago` VARCHAR(225) NOT NULL,  -- 
 `modalidad` VARCHAR(225) NOT NULL,
 `id_concepto` smallint NOT NULL,  -- 
 `año_concepto` int NOT NULL,
 `import` numeric(8,2) not null,
PRIMARY KEY (`id`),
KEY `id_user` (`id_user`),
CONSTRAINT `income_user_fk25` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE,
KEY `id_departament` (`id_departament`),
CONSTRAINT `income_departms_fk26` FOREIGN KEY (`id_departament`) REFERENCES `departament` (`id`) ON DELETE CASCADE,
KEY `id_type_payment` (`id_type_payment`),
CONSTRAINT `income_type_payment_fk27` FOREIGN KEY (`id_type_payment`) REFERENCES `type_payment` (`id`) ON DELETE CASCADE,
KEY `id_concepto` (`id_concepto`),
CONSTRAINT `income_departaments_fk28` FOREIGN KEY (`id_concepto`) REFERENCES `concept` (`id`) ON DELETE CASCADE
);
