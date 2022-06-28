CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY,
  type CHAR NOT NULL,
  number int NOT NULL,
  dni int NOT NULL,
  email varchar(75),
  name varchar(20),
  password varchar(30),
  typedriver CHAR NOT NULL,
  created_at DATETIME NOT NULL,
  created_by INT NOT NULL,
  updated_at DATETIME NOT NULL,
  updated_by INT NOT NULL
)