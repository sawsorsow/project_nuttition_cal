use nutrition;

-- drop table product_type;

create table if not exists product_type (
	-- version
	version varchar(4),
    
    -- type
	product_type_eng varchar(64),
    product_subtype_eng varchar(64),
    product_type_thai varchar(128),
    product_subtype_thai varchar(128),
    
    -- serving
    serving_size varchar(16)
);

insert into product_type
values ('445', 'Dairy product and substitutes', 'Milk, milk-substitute beverages, milk-based drinks', 'กลุ่มผลิตภัณฑ์นมและผลิตภัณฑ์ที่ใช้แทนนม', 'นม  ผลิตภัณฑ์นม และใช้เครื่องดื่มที่มีนมเป็นส่วนประกอบหลัก ชนิดพร้อมดื่ม', '200 ml')
-- ('445', 'Dairy product and substitutes', 'Milk, milk-substitite beverages, milk-based')



;

select * from product_type;