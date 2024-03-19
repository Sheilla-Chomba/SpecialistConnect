-- CREATE OR ALTER PROCEDURE getSpecID(@spec_id VARCHAR(100))
-- AS
-- BEGIN   
--     SELECT * FROM Users WHERE user_id = @spec_id
-- END

CREATE OR ALTER PROCEDURE getSpecID
    @spec_id VARCHAR(100)
AS
BEGIN   
    IF EXISTS (SELECT 1 FROM Users WHERE user_id = @spec_id AND role='spec')
    BEGIN
        SELECT * FROM Users WHERE user_id = @spec_id;
    END
    ELSE
    BEGIN
        SELECT NULL AS 'NoUserFound';
    END
END
