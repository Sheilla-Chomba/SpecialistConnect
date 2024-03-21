CREATE OR ALTER PROCEDURE getAllSpecs
AS
BEGIN
    SELECT * FROM Users
    INNER JOIN Spec ON Users.user_id = Spec.spec_id;
END
-- CREATE OR ALTER PROCEDURE getAllSpecs
-- AS
-- BEGIN
--     SELECT * FROM Users
--     WHERE role='spec';
-- END