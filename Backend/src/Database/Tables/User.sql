CREATE TABLE Users(
    user_id VARCHAR(100) NOT NULL, 
    f_name VARCHAR(100) NOT NULL,
    l_name VARCHAR(100) NOT NULL, 
    email VARCHAR(255) NOT NULL UNIQUE,
    role VARCHAR(20), 
    Password VARCHAR(200) NOT NULL, 
    isDeleted BIT Default 0,
    isWelcomed BIT Default 0
)

