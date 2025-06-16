use nutrition;

-- drop table conversion_factor; 

create table if not exists conversion_factor (
	-- version
	version varchar(4) primary key,
    
	-- main nutrients
	protien varchar(16),
    carbohydrate varchar(16),
    fat varchar(16),
    dietary_fiber varchar(16),
    ethyl_alcohol_ethanol varchar(16),
	organic_acid varchar(16),
    
    -- sugar alcohol
    isomalt varchar(16),
    xylitol varchar(16),
    maltital varchar(16),
    sorbital varchar(16),
    mannitol varchar(16),
    polyglycitol varchar(16),
    erythritol varchar(16)
    
    -- vitamin
   --  vitamin_a varchar(16),
--     niacin varchar(16),
--     vitamin_e  varchar(16),
--     vitamin_d varchar(16),
--     folate varchar(16)
);

-- insert into conversion_factor
-- values ('455', '4 Kcal/g', '4 Kcal/g', '9 Kcal/g', '2 Kcal/g',
-- 		'7 Kcal/g', '3 Kcal/g', '2 Kcal/g', '2.4 Kcal/g', '2.1 Kcal/g',
--         '2.6 Kcal/g', '1.6 Kcal/g', '3 Kcal/g', '0 Kcal/g'
--         );

select * from conversion_factor;