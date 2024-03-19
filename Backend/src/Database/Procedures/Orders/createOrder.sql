CREATE OR ALTER PROCEDURE createOrder(
    @order_id VARCHAR(100),
    @spec_id VARCHAR(100),
    @user_id VARCHAR(100),
    @order_desc VARCHAR(8000),
    @status VARCHAR(50)
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
            INSERT INTO Orders(order_id, spec_id, user_id, order_desc, status)
            VALUES(@order_id, @spec_id, @user_id, @order_desc, @status)
        END
END