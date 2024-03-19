CREATE OR ALTER PROCEDURE getOneSpec(@spec_id VARCHAR(100))
AS
BEGIN   
    SELECT * FROM Users
    INNER JOIN Spec ON Users.user_id = Spec.spec_id WHERE Spec.spec_id=@spec_id 
END

