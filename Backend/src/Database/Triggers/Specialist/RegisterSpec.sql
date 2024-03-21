CREATE OR ALTER TRIGGER RegSpec
ON Users
AFTER INSERT
AS
BEGIN
    -- Insert the newly added user into the Specialist table if their role is 'spec'
    INSERT INTO Spec(spec_id)
    SELECT inserted.user_id
    FROM inserted
    INNER JOIN Users ON inserted.user_id = Users.user_id
    WHERE Users.role = 'spec';
END;