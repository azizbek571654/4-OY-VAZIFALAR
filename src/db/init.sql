create table IF NOT EXISTS guruhlar(
    id serial Primary key,
    name varchar(55)
);


create table IF NOT EXISTS talabaler(
    id serial Primary key,
    full_name varchar(55),
    guruh_id int,
    FOREIGN KEY(guruh_id) REFERENCES guruhlar(id)
);