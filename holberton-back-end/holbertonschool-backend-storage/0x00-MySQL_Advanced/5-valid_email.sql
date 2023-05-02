--
--
CREATE TRIGGER reset
AFTER UPDATE ON users
FOR EACH ROW
UPDATE users
SET valid_email = 0
WHERE email = "bob@dylan.com"
