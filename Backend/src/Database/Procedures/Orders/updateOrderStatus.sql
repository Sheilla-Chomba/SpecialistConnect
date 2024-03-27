CREATE OR ALTER PROCEDURE updateOrderStatus(
    @order_id VARCHAR(100),
    @status VARCHAR(50))
AS
BEGIN
    UPDATE Orders SET 
        status=@status
    WHERE order_id = @order_id
END