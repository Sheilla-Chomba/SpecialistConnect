CREATE OR ALTER PROCEDURE getAllOrders
AS
BEGIN
    -- SELECT Orders.order_id,
    -- Orders.spec_id,
    -- UsersAndSpec.f_name,
    -- UsersAndSpec.l_name,
    -- Orders.user_id,
    -- UsersAndSpec.f_name,
    -- UsersAndSpec.l_name,
    -- Orders.order_desc,
    -- Orders.status 
    -- FROM Orders
    -- INNER JOIN UsersAndSpec ON Orders.spec_id = UsersAndSpec.spec_id;
    SELECT 
    Orders.order_id,
    Orders.spec_id,
    SpecUser.f_name AS spec_fname, -- First name specific to the spec
    SpecUser.l_name AS spec_lname, -- Last name specific to the spec
    Orders.user_id,
    UserUser.f_name AS user_fname, -- First name specific to the user
    UserUser.l_name AS user_lname, -- Last name specific to the user
    Orders.order_desc,
    Orders.status 
FROM Orders
INNER JOIN UsersAndSpec AS SpecUser ON Orders.spec_id = SpecUser.spec_id
INNER JOIN UsersAndSpec AS UserUser ON Orders.user_id = UserUser.user_id;
END