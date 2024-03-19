CREATE OR ALTER PROCEDURE createReview(
    @review_id VARCHAR(100),
    @order_id VARCHAR(100),
    @review_desc VARCHAR(1000)
)
AS
BEGIN
    IF NOT EXISTS (SELECT * FROM Users WHERE user_id=@user_id AND role ='user' AND isDeleted=0
        AND EXISTS

    (SELECT * FROM Users
        INNER JOIN Spec ON Users.user_id = Spec.spec_id
        WHERE Spec.spec_id = @spec_id)
    )
        BEGIN 
            DECLARE @error VARCHAR(100) = 'No user or spec found';
            RAISERROR(@error, 16, 1);
            RETURN;
        END
    ELSE
        BEGIN
            INSERT INTO Reviews(review_id,order_id, review_desc)
            VALUES(@review_id,@order_id, @review_desc)
        END
END