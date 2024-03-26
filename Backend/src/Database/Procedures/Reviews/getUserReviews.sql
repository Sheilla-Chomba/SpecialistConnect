CREATE OR ALTER PROCEDURE getUserReviews(@user_id VARCHAR(100))
AS
BEGIN 
    SELECT * FROM ReviewsAndOrders WHERE user_id=@user_id
END