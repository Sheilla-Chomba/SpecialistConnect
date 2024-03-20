CREATE OR ALTER PROCEDURE getOneReview(@review_id VARCHAR(100))
AS
BEGIN   
    SELECT 
        Reviews.review_id,
        Reviews.order_id,
        OrdersAndUsers.spec_id,
        OrdersAndUsers.spec_fname,
        OrdersAndUsers.spec_lname,
        OrdersAndUsers.user_id,
        OrdersAndUsers.user_fname,
        OrdersAndUsers.user_lname,
        Reviews.review_desc
    FROM Reviews
    INNER JOIN OrdersAndUsers ON Reviews.order_id = OrdersAndUsers.order_id 
    WHERE Reviews.review_id=@review_id
END