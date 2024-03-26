CREATE OR ALTER TRIGGER InsertOrder
ON Orders
AFTER INSERT
AS
BEGIN
    -- Update the status column to 'Pending' for newly inserted orders where status is empty
    UPDATE Orders
    SET status = 'Pending'
    WHERE status IS NULL;
END;
