CREATE OR ALTER PROCEDURE createReview(
    @review_id VARCHAR(100),
    @order_id VARCHAR(100),
    @review_desc VARCHAR(1000)
)
AS
BEGIN
    IF NOT EXISTS (SELECT * FROM Orders WHERE order_id=@order_id AND status ='Completed')
        BEGIN 
            DECLARE @error VARCHAR(100) = 'No order found';
            RAISERROR(@error, 16, 1);
            RETURN;
        END
    ELSE
        BEGIN
            INSERT INTO Reviews(review_id,order_id, review_desc)
            VALUES(@review_id,@order_id, @review_desc)
        END
END