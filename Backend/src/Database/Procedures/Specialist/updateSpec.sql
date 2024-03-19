CREATE OR ALTER PROCEDURE updateSpec(
    @spec_id VARCHAR(100),
    @job_title VARCHAR(100), 
    @spec_loc VARCHAR(100),
    @spec_desc VARCHAR(8000),
    @ratings INT,
    @prof_image VARCHAR(255))
AS
BEGIN
    UPDATE Spec SET 
        job_title=@job_title, 
        spec_loc=@spec_loc, 
        spec_desc=@spec_desc,
        ratings=@ratings,
        prof_image=@prof_image
    WHERE spec_id = @spec_id
END