-- create Database

CREATE DATABASE lunch_managemet
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LOCALE_PROVIDER = 'libc'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

-- create Table

CREATE TABLE public.users(
    id integer NOT NULL,
    user_name character varying,
    password character varying,
    category character varying DEFAULT Employee,
    PRIMARY KEY (id)
);

-- insert into users

INSERT INTO users (id, user_name, password, category)
VALUES (1, 'Siam', 'siam123', 'employee');

SELECT * FROM users where user_name = $1