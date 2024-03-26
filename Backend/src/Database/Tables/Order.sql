CREATE TABLE Orders(
    order_id VARCHAR(100) NOT NULL,
    spec_id VARCHAR(100) NOT NULL,
    user_id VARCHAR(100) NOT NULL,
    order_desc VARCHAR(8000) NOT NULL,
    status VARCHAR(50) DEFAULT 'Pending'
)
SELECT * FROM Orders