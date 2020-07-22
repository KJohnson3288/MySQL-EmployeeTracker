DROP DATABASE IF EXISTS employee_trackerdb;
CREATE DATABASE employee_trackerdb;
USE employee_trackerdb;

CREATE TABLE departments (
    id INT,
    department_name VARCHAR(30),
    PRIMARY KEY(id)
);

CREATE TABLE roles (
    id INT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY(id)
);

CREATE TABLE employees (
    id INT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);

INSERT INTO departments(id, department_name)
VALUES (1, "PokeCenter"), (2, "PokeMart"), (3, "PokeGym"), (4, "PokePD"), (0, "PokeLab");

INSERT INTO roles(id, title, salary, department_id)
VALUES (33, "Gym Leader", 115000.00, 3), (11, "Nurse", 58000.00, 1), (44, "Officer", 48000.00, 4), (00, "Professer", 82000.00, 0), (3301, "Gym Trainer", 35000.00, 3), (0001, "Lab Assistant", 45000.00, 0);

INSERT INTO employees(id, first_name, last_name, role_id, manager_id)
VALUES (3301, "Brock", "Takeshi", 331, null), (33011, "Cool", "Trainer", 3301, 331), (00011, "Oak's", "Aide", 0001, 001), (0001, "Professer", "Oak", 00, null);
