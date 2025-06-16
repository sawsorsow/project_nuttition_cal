use nutrition;

-- drop table thai_rdi; 

create table if not exists thai_rdi (
	-- version
	version int primary key,
    
    -- main nutrient
    total_fat varchar(64),
    saturated_fat varchar(64),
    cholesterol varchar(64),
    protien varchar(64),
    total_carbohydrate varchar(64),
    dietary_fiber varchar(64),
    
    -- vitamins
    vitamin_a varchar(64),
    vitamin_d varchar(64),
    vitamin_e varchar(64),
    vitamin_k varchar(64),
    vitamin_b1 varchar(64),
    vitamin_b2 varchar(64),
    niacin varchar(64),
    pantothenic_acid varchar(64),
    vitamin_b6 varchar(64),
    biotin varchar(64),
    folate varchar(64),
    vitamin_b12 varchar(64),
    vitamin_c varchar(64),
    
    -- mineral
    calcium varchar(64),
    phosphorus varchar(64),
    magnesium varchar(64),
    iron varchar(64),
    iodine varchar(64),
    zinc varchar(64),
    selenium varchar(64),
    copper varchar(64),
    manganese varchar(64),
    molybdenum varchar(64),
    chromium varchar(64),
    sodium varchar(64),
    potassium varchar(64),
    chloride varchar(64)
);

-- insert into thai_rdi
-- values(455, '65 g', '20 g', '300 mg', '50 g', '300 g', '25 g', '800 mcg RAE', 
-- '15 mcg', '9 mgalpha-TE', '60 mcg', '1.2 mg', '1.2 mg', '15 mg NE', '5 mg',
--  '1.3 mg', '30 mcg', '400 mcg DFE', '2.4 mcg', '100 mg', '1000 mg', '700 mg',
--  '310 mg', '22 mg', '150 mcg', '11 mg', '60 mcg', '900 mcg', '3 mg', '45 mcg',
--  '35 mcg', '2000 mg', '3500 mg', '2300 mg');


 
 
 
 select * from thai_rdi;