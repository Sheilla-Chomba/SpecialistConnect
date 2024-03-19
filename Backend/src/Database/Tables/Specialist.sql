CREATE TABLE Spec(
    spec_id VARCHAR(100) NOT NULL,
    job_title VARCHAR(100) NOT NULL,
    spec_loc VARCHAR(100) NOT NULL,
    spec_desc VARCHAR(8000) NOT NULL,
    ratings INT NOT NULL
)
ALTER TABLE Spec
ADD CONSTRAINT UC_spec_id UNIQUE (spec_id);

