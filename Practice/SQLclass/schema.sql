CREATE TABLE emp (
    emp_id varchar(100) primary key,
    emp_name varchar(100) unique,
    emp_mail  varchar(100) not null unique,
    emp_password varchar(100) not null
);