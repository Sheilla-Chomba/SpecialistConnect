CREATE VIEW OrdersAndUsers AS
SELECT 
    Orders.order_id,
    Orders.spec_id,
    SpecUser.f_name AS spec_fname,
    SpecUser.l_name AS spec_lname,
    Orders.user_id,
    UserUser.f_name AS user_fname,
    UserUser.l_name AS user_lname,
    Orders.order_desc,
    Orders.status 
FROM Orders
INNER JOIN UsersAndSpec AS SpecUser ON Orders.spec_id = SpecUser.spec_id
INNER JOIN UsersAndSpec AS UserUser ON Orders.user_id = UserUser.user_id;

SELECT * FROM OrdersAndUsers