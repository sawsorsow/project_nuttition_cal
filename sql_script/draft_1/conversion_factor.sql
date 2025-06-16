use nutrition;

create table if not exists conversion_factor (
	version varchar(4) primary key,
	protien varchar(64)
);

insert into conversion_factor
values ('455', '4 Kcal/g');