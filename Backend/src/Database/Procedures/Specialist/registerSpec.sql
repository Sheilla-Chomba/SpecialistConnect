CREATE OR ALTER PROCEDURE registerSpec(
    @spec_id VARCHAR(100),
    @job_title VARCHAR(100),
    @spec_loc VARCHAR(100),
    @spec_desc VARCHAR(8000),
    @ratings INT,
    @prof_image VARCHAR(255)
)
AS
BEGIN
    IF NOT EXISTS (SELECT * FROM Users WHERE user_id=@spec_id AND role ='spec' AND isDeleted=0)
        BEGIN 
            DECLARE @error VARCHAR(100) = 'No spec found';
            RAISERROR(@error, 16, 1);
            RETURN;
        END
    ELSE
        BEGIN
            INSERT INTO Spec(spec_id,job_title,spec_loc,spec_desc,ratings,prof_image)
            VALUES(@spec_id,@job_title,@spec_loc,@spec_desc,@ratings,@prof_image)
        END
END

