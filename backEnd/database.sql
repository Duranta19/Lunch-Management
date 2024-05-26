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

-- create food_option table
CREATE TABLE public.food_option
(
    opt_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 ),
    opt_name character varying(150) NOT NULL,
    opt_items character varying(200),
    total_cal character varying(10),
    img_path character varying(300) NOT NULL,
    PRIMARY KEY (opt_id)
);

-- Insert items into food_option table
insert into food_option (opt_name, opt_items, total_cal, img_path) 
values('Trediotional-1', 'Rice, Vegetables, Pulse', '25.8', 'tred-food')

-- Delete Food Option.
DELETE FROM food_option WHERE opt_id = 4

--create table for food order
CREATE TABLE public.order_food
(
    order_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 ),
    employee_id integer NOT NULL,
    opt_id integer NOT NULL, 
    PRIMARY KEY (order_id),
    CONSTRAINT fk_food_id
        FOREIGN KEY (opt_id) REFERENCES food_option (opt_id) 
);
--add date column
ALTER TABLE IF EXISTS public.order_food
    ADD COLUMN date character varying;

--add food for employee
INSERT INTO order_food(employee_id, opt_id) VALUES(1,1)

--view employee order history
SELECT * FROM food_option INNER JOIN order_food ON  food_option.opt_id = order_food.opt_id WHERE order_food.employee_id = 1;

SELECT 
    food_option.*,
    order_food.*,
    users.user_name AS e_name
FROM 
    food_option
RIGHT JOIN 
    order_food ON food_option.opt_id = order_food.opt_id
JOIN
    users ON users.id = order_food.employee_id;