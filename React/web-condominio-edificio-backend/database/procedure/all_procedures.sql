-- All Procedure Start --

USE gbs_dev_db;

-- procedure create new building --

DROP PROCEDURE IF EXISTS sp_add_building;
DELIMITER $$
CREATE PROCEDURE sp_add_building(
    IN id_condominium INT,
    IN name_building    VARCHAR(120),
    IN ruc BIGINT,
    IN phone INT,
    IN email VARCHAR(120),
    IN description VARCHAR(250),
    IN floor SMALLINT,
    IN address VARCHAR(120),
    IN user_created VARCHAR(60),
    IN user_updated VARCHAR(60)
)
BEGIN
    INSERT INTO building (id_condominium,name_building,ruc,phone,email,description,floor,address,user_created,user_updated)
    VALUE (id_condominium,name_building,ruc,phone,email,description,floor,address,user_created,user_updated);
END $$
DELIMITER ;

-- procedure update building --

DROP PROCEDURE IF EXISTS sp_update_building;
DELIMITER $$
CREATE PROCEDURE sp_update_building(
    IN p_id INT,
    IN p_id_condominium INT,
    IN p_name_building    VARCHAR(120),
    IN p_ruc BIGINT,
    IN p_phone INT,
    IN p_email VARCHAR(120),
    IN p_description VARCHAR(250),
    IN p_floor SMALLINT,
    IN p_address VARCHAR(120),
    IN p_user_created VARCHAR(60),
    IN p_user_updated VARCHAR(60)
)
BEGIN
    UPDATE building
    SET
    id_condominium = p_id_condominium,
    name_building = p_name_building,
    ruc = p_ruc,
    phone = p_phone,
    email = p_email,
    description = p_description,
    floor = p_floor,
    address = p_address,
    user_created = p_user_created,
    user_updated = p_user_updated
    WHERE id = p_id;
END $$
DELIMITER ;

-- procedure create new condominium --

DROP PROCEDURE IF EXISTS sp_add_condominium;
DELIMITER $$
CREATE PROCEDURE sp_add_condominium(
    IN name    VARCHAR(250),
    IN ruc BIGINT,
    IN phone INT,
    IN email VARCHAR(120),
    IN address VARCHAR(120),
    IN landline INT,
    IN description VARCHAR(250),
    IN user_created VARCHAR(60),
    IN user_updated VARCHAR(60)
)
BEGIN
    INSERT INTO condominium (name,ruc,phone,email,address,landline,description,user_created,user_updated)
    VALUE (name,ruc,phone,email,address,landline,description,user_created,user_updated);
END $$
DELIMITER ;

-- procedure update condominium --

DROP PROCEDURE IF EXISTS sp_update_condominium;
DELIMITER $$
CREATE PROCEDURE sp_update_condominium(
    IN p_id INT,
    IN p_name    VARCHAR(250),
    IN p_ruc BIGINT,
    IN p_phone INT,
    IN p_email VARCHAR(120),
    IN p_address VARCHAR(120),
    IN p_landline INT,
    IN p_description VARCHAR(250),
    IN p_user_created VARCHAR(60),
    IN p_user_updated VARCHAR(60)
)
BEGIN
    UPDATE condominium
    SET
    name = p_name,
    ruc = p_ruc,
    phone = p_phone,
    email = p_email,
    address = p_address,
    landline = p_landline,
    description = p_description,
    user_created = p_user_created,
    user_updated = p_user_updated
    WHERE id = p_id;
END $$
DELIMITER ;

-- procedure create departament --

DROP PROCEDURE IF EXISTS sp_add_departament;
DELIMITER $$
CREATE PROCEDURE sp_add_departament(
    IN number_departament    INT,
    IN id_district SMALLINT,
    IN id_building INT,
    IN number_bedrooms INT,
    IN floor INT,
    IN description VARCHAR(250),
    IN status VARCHAR(42),
    IN user_created VARCHAR(120),
    IN user_updated VARCHAR(120)
)
BEGIN
    INSERT INTO departament (number_departament,id_district,id_building,number_bedrooms,floor,description,status,user_created,user_updated)
    VALUE (number_departament,id_district,id_building,number_bedrooms,floor,description,status,user_created,user_updated);
END $$
DELIMITER ;

-- procedure update departament --

DROP PROCEDURE IF EXISTS sp_update_departament;
DELIMITER $$
CREATE PROCEDURE sp_update_departament(
    IN p_id INT,
    IN p_number_departament    INT,
    IN p_id_district INT,
    IN p_id_building INT,
    IN p_number_bedrooms INT,
    IN p_floor INT,
    IN p_description VARCHAR(250),
    IN p_status VARCHAR(42),
    IN p_user_created VARCHAR(120),
    IN p_user_updated VARCHAR(120)
)
BEGIN
    UPDATE departament
    SET
    number_departament = p_number_departament,
    id_district = p_id_district,
    id_building = p_id_building,
    number_bedrooms = p_number_bedrooms,
    floor = p_floor,
    description = p_description,
    status = p_status,
    user_created = p_user_created,
    user_updated = p_user_updated
    WHERE id = p_id;
END $$
DELIMITER ;

-- procedure link departament_user --

DROP PROCEDURE IF EXISTS sp_add_departament_user;
DELIMITER $$
CREATE PROCEDURE sp_add_departament_user(
    IN id_user    INT,
    IN id_departament INT,
    IN user_created VARCHAR(60),
    IN user_updated VARCHAR(60)
)
BEGIN
    INSERT INTO departament_user (id_user,id_departament,user_created,user_updated)
    VALUE (id_user,id_departament,user_created,user_updated);
END $$
DELIMITER ;

-- procedure create new user --

DROP PROCEDURE IF EXISTS sp_add_user;
DELIMITER $$
CREATE PROCEDURE sp_add_user(
    IN first_name    VARCHAR(50),
    IN last_name VARCHAR(50),
    IN id_document_type INT,
    IN number_document INT,
    IN email VARCHAR(120),
    IN password VARCHAR(40),
    IN phone INT,
    IN birth_date DATE,
    IN id_role SMALLINT
)
BEGIN
    INSERT INTO user (first_name,last_name,id_document_type,number_document,email,password,phone,birth_date,id_role)
    VALUE (first_name,last_name,id_document_type,number_document,email,password,phone,birth_date,id_role);
END $$
DELIMITER ;

-- procedure update user --

DROP PROCEDURE IF EXISTS sp_update_user;
DELIMITER $$
CREATE PROCEDURE sp_update_user(
    IN p_id INT,
    IN p_first_name    VARCHAR(50),
    IN p_last_name VARCHAR(50),
    IN p_id_document_type INT,
    IN p_number_document INT,
    IN p_email VARCHAR(120),
    IN p_password VARCHAR(40),
    IN p_phone INT,
    IN p_birth_date DATE,
    IN p_id_role SMALLINT
)
BEGIN
    UPDATE user
    SET
    first_name = p_first_name,
    last_name = p_last_name,
    id_document_type = p_id_document_type,
    number_document = p_number_document,
    email = p_email,
    password = p_password,
    phone = p_phone,
    birth_date = p_birth_date,
    id_role = p_id_role
    WHERE id = p_id;
END $$
DELIMITER ;

