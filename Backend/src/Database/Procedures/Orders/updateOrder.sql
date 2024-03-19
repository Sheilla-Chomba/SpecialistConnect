CREATE OR ALTER PROCEDURE updateOrder(
    @order_id VARCHAR(100),
    @order_desc VARCHAR(8000),
    @status VARCHAR(50))
AS
BEGIN
    UPDATE Orders SET 
        order_desc=@order_desc,
        status=@status
    WHERE order_id = @order_id
END