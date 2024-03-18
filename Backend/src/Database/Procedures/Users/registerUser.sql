CREATE OR ALTER PROCEDURE registerUser(
    @user_id VARCHAR(100), 
    @f_name VARCHAR(200),
    @l_name VARCHAR(200),
    @email VARCHAR(255),
    @role VARCHAR(20),
    @Password VARCHAR(200)
    )
AS
BEGIN 
    INSERT INTO Users(user_id, f_name,l_name, email, role, Password)
    VALUES(@user_id, @f_name,@l_name, @email, @role, @Password)
END
