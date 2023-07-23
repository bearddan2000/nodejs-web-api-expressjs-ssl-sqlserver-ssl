USE master;
Go

CREATE DATABASE animal;
Go

CREATE TABLE dbo.dog (
    id INT PRIMARY KEY IDENTITY(1,1),
    breed VARCHAR(20) NOT NULL,
    color VARCHAR(20) NOT NULL
);
Go

INSERT INTO dbo.dog (breed, color)
VALUES
('Am Bulldog', 'White'),
('Blue Tick', 'Grey'),
('Labrador', 'Black'),
('Gr Shepard', 'Brown');
Go