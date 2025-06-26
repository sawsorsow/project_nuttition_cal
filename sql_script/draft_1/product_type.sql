use nutrition;

-- drop table product_type;

create table if not exists product_type (
	-- version
	version varchar(4),
    
    -- type
	product_type_eng varchar(64),
    product_subtype_eng varchar(64),
    product_type_thai varchar(128),
    product_subtype_thai varchar(256),
    
    -- serving
    serving_size varchar(16)
);

insert into product_type
values ('445', 'Dairy product and substitutes', 'Milk, milk-substitute beverages, milk-based drinks', 'กลุ่มผลิตภัณฑ์นมและผลิตภัณฑ์ที่ใช้แทนนม', 'นม  ผลิตภัณฑ์นม และใช้เครื่องดื่มที่มีนมเป็นส่วนประกอบหลัก ชนิดพร้อมดื่ม', '200 ml'),
('445', 'Dairy product and substitutes', 'Milk, milk-substitite beverages, milk-based drink, powder', 'กลุ่มผลิตภัณฑ์นมและผลิตภัณฑ์ที่ใช้แทนนม', 'นม ผลิตภัณฑ์นม และเครื่องดื่มที่ มีนม เป็นส่วนประกอบหลัก ชนิดแห้ง', '200 ml'),
('445', 'Dairy product and substitutes', 'Yoghurt, cream', 'กลุ่มผลิตภัณฑ์นมและผลิตภัณฑ์ที่ใช้แทนนม', 'โยเกิร์ตชนิดครีม', '150 grams'),
('445', 'Dairy product and substitutes', 'Yoghurt, frozen', 'กลุ่มผลิตภัณฑ์นมและผลิตภัณฑ์ที่ใช้แทนนม', 'โยเกิร์ตแช่แข็ง', '80 grams')
;

select * from product_type;