# Project Title

A brief description of your project.

## Technologies Used

- **Frontend**: React
- **Backend**: Express
- **Database**: PostgreSQL

## Features

### Admin Interface
- **Add Daily Menu Options**: Admins can add new lunch options for specific dates.
- **View Employee Choices**: Admins can view which employees have chosen which lunch options.

### Employee Interface
- **View Daily Menu**: Employees can see the lunch options available for the current day.
- **Select Lunch Choice**: Employees can select their preferred lunch option from the daily menu.

## Setup Instructions

### Backend

1. **Clone the repository**
    ```sh
    git clone https://github.com/Duranta19/Lunch-Management.git
    cd Lunch-Management/backend
    ```

2. **Install dependencies**
    ```sh
    npm install
    ```

3. **Set up environment variables**
    Create a `.env` file in the `backend` directory and add the following:
    ```env
    PORT=3001
    DATABASE_URL=your_postgresql_database_url
    SECRET_KEY=your_secret_key
    ```

4. **Run database migrations**
    ```sh
    npx sequelize-cli db:migrate
    ```

5. **Start the backend server**
    ```sh
    npm start
    ```

### Frontend

1. **Navigate to the frontend directory**
    ```sh
    cd ../frontend
    ```

2. **Install dependencies**
    ```sh
    npm install
    ```

3. **Set up environment variables**
    Create a `.env` file in the `frontend` directory and add the following:
    ```env
    REACT_APP_API_URL=http://localhost:3000
    ```

4. **Start the frontend development server**
    ```sh
    npm run start
    ```

## Running the Projects

### Backend

To run the backend server, execute the following command in the `backend` directory:
```sh
npm start
```
## Database Schema
# Food Order Management System

This repository contains the SQL schema for a Food Order Management System. The database consists of three tables: `users`, `food_option`, and `order_food`. Below is the schema and a brief description of each table.

## Database Schema

```sql
CREATE TABLE IF NOT EXISTS public.users
(
    id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    user_name character varying COLLATE pg_catalog."default",
    password character varying COLLATE pg_catalog."default",
    category character varying COLLATE pg_catalog."default" DEFAULT 'Employee'::character varying,
    CONSTRAINT users_pkey PRIMARY KEY (id)
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS public.food_option
(
    opt_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    opt_name character varying(150) COLLATE pg_catalog."default" NOT NULL,
    opt_items character varying(200) COLLATE pg_catalog."default",
    total_cal character varying(10) COLLATE pg_catalog."default",
    img_path character varying(300) COLLATE pg_catalog."default" NOT NULL,
    date character varying(15) COLLATE pg_catalog."default",
    CONSTRAINT food_option_pkey PRIMARY KEY (opt_id)
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.food_option
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS public.order_food
(
    order_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    employee_id integer NOT NULL,
    opt_id integer NOT NULL,
    date character varying COLLATE pg_catalog."default",
    CONSTRAINT order_food_pkey PRIMARY KEY (order_id),
    CONSTRAINT fk_food_id FOREIGN KEY (opt_id)
        REFERENCES public.food_option (opt_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.order_food
    OWNER to postgres;
```
