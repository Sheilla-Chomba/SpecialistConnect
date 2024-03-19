CREATE VIEW UsersAndSpec AS
SELECT *
FROM Users
FULL OUTER JOIN Spec ON Users.user_id = Spec.spec_id;

SELECT * FROM UsersAndSpec;