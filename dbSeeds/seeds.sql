INSERT INTO `ur0ypr4bfju2xmfs`.`armors` (`armorName`,`AC`,`dexMod`, `armorType`) VALUES 
('Padded', '11', '1', 'Light'), 
('Leather', '11', '1', 'Light'), 
('Studded leather', '11', '1', 'Light'),
('Hide', '12', '2', 'Medium'),
('Chain shirt', '13', '2', 'Medium'),
('Scale mail', '14', '2', 'Medium'),
('Breastplate', '14', '2', 'Medium'),
('Half plate', '15', '2', 'Medium'),
('Ring mail', '14', '0', 'Heavy'),
('Chain mail', '16', '0', 'Heavy'),
('Splint', '17', '0', 'Heavy'),
('Plate', '18', '0', 'Heavy'),
('Shield', '2', '0', 'Shield');


INSERT INTO `ur0ypr4bfju2xmfs`.`weapons` (`weaponName`,`dmgDice`,`numberOfDice`,`weaponType`,`dmgType`, `wepProperties`) VALUES 
('Club', '4', '1', 'Simple Melee', 'Bludgeoning', 'Light'),
('Dagger', '4', '1', 'Simple Melee', 'Piercing', 'Finess, Light, Thrown (Range 20/60)'),
('Greatclub', '8', '1', 'Simple Melee', 'Bludgeoning', 'Two-handed'),
('Handaxe', '6', '1', 'Simple Melee', 'Slashing', 'Light, Thrown (Range 20/60)'),
('Javelin', '6', '1', 'Simple Melee', 'Piercing', 'Thrown (Range 30/120)'),
('Light Hammer', '4', '1', 'Simple Melee', 'Bludgeoning', 'Light, Thrown (Range 20/60)'),
('Mace', '6', '1', 'Simple Melee', 'Bludgeoning', '-'),
('Quarterstaff', '6', '1', 'Simple Melee', 'Bludgeoning', 'Versatile (1d8)'),
('Sickle', '4', '1', 'Simple Melee', 'Slashing', 'Light'),
('Spear', '6', '1', 'Simple Melee', 'Piercing', 'Thrown (Range 20/60)'),
('Crossbow, Light', '8', '1', 'Simple Ranged', 'Piercing', 'Ammunition (Range 80/320), Loading, Two-handed'),
('Dart', '4', '1', 'Simple Ranged', 'Piercing', 'Finesse, Thrown (Range 20/60)'),
('Shortbow', '6', '1', 'Simple Ranged', 'Piercing', 'Ammunition (Range 80/320), Two-handed'),
('Sling', '4', '1', 'Simple Ranged', 'Bludgeoning', 'Ammunition (Range 30/120)'),
('Battleaxe', '8', '1', 'Matrial Melee', 'Slashing', 'Versatile (1d10)'),
('Flail', '8', '1', 'Matrial Melee', 'Bludgeoning', '-'),
('Glaive', '10', '1', 'Matrial Melee', 'Slashing', 'Heavy, Reach, Two-handed'),
('Greataxe', '12', '1', 'Matrial Melee', 'Slashing', 'Heavy, Two-handed'),
('Greatsword', '6', '2', 'Matrial Melee', 'Slashing', 'Heavy, Two-handed'),
('Halberd', '10', '1', 'Matrial Melee', 'Slashing', 'Heavy, Reach, Two-handed'),
('Lance', '12', '1', 'Matrial Melee', 'Piercing', 'Reach, Special'),
('Longsword', '8', '1', 'Matrial Melee', 'Slashing', 'Finesse, Reach'),
('Maul', '6', '2', 'Matrial Melee', 'Bludgeoning', 'Heavy, Two-handed'),
('Morningstar', '1', '8', 'Matrial Melee', 'Piercing', '-'),
('Pike', '10', '1', 'Matrial Melee', 'Piercing', 'Heavy, Reach, Two-handed'),
('Rapier', '8', '1', 'Matrial Melee', 'Slashing', 'Finesse'),
('Scimitar', '6', '1', 'Matrial Melee', 'Slashing', 'Finesse, Light'),
('Shortsword', '6', '1', 'Matrial Melee', 'Piercing', 'Finesse, Light'),
('Trident', '6', '1', 'Matrial Melee', 'Piercing', 'Thrown (Range 20/60), Versatile (1d8)'),
('War pick', '8', '1', 'Matrial Melee', 'Piercing', '-'),
('Warhammer', '8', '1', 'Matrial Melee', 'Bludgeoning', 'Versatile (1d10)'),
('Whip', '4', '1', 'Matrial Melee', 'Slashing', 'Finesse, Reach'),
('Blowgun', '1', '1', 'Matrial Range', 'Piercing', 'Ammunition (Range 25/100), Loading'),
('Crossbow, hand', '6', '1', 'Matrial Range', 'Piercing', 'Ammunition (Range 30/120), Light, Loading'),
('Crossbow, heavy', '10', '1', 'Matrial Range', 'Piercing', 'Ammunition (Range 100/400), Heavy, Loading, Two-handed'),
('Longbow', '8', '1', 'Matrial Range', 'Piercing', 'Ammunition (Range 150/600), Heavy, Two-handed'),
('Longbow', '8', '1', 'Matrial Range', 'Piercing', 'Ammunition (Range 150/600), Heavy, Two-handed')
;
INSERT INTO `ur0ypr4bfju2xmfs`.`classes` (`className`,`hitdice`,`primaryStatID`,`primarySaveID`,`secondarySaveID`,`allowArmorType`,`allowWeaponsType`) VALUES 
('Barbarian', '12', 'str', 'str & con', '2', '{'type':'Heavy'}','{'type':'Meleee'}','0');


-- INSERT INTO `ur0ypr4bfju2xmfs`.`races` (`raceName`,`abilityOne`,`abilityTwo`,`abilityModOne`,`abilityModTwo`,`size`,`speed`,`language`) VALUES ('Dwarf','4','1','2','2','m','20','2');


INSERT INTO `ur0ypr4bfju2xmfs`.`classes` (`className`,`hitdice`,`profBonus`,`primaryStatID`,`savingThrowProf1`,`savingThrowProf2`,`allowArmorType`,`allowWeaponsType`) VALUES ('Bard','8','2','dex','dex','char','{"armor": ["Light"]}','{"weapon":["Simple Weapons","Hand crossbow","Longsword","rapiers","shortswords"]}'),
INSERT INTO `ur0ypr4bfju2xmfs`.`classes` (`className`,`hitdice`,`profBonus`,`primaryStatID`,`savingThrowProf1`,`savingThrowProf2`,`allowArmorType`,`allowWeaponsType`) VALUES ('Cleric','8','2','char','char','wis','{"armor": ["Light","Medium","Shields"]}','{"weapon":["Simple Weapons"]}'),
INSERT INTO `ur0ypr4bfju2xmfs`.`classes` (`className`,`hitdice`,`profBonus`,`primaryStatID`,`savingThrowProf1`,`savingThrowProf2`,`allowArmorType`,`allowWeaponsType`) VALUES ('Druid','8','2','int','int','wis','{"armor": ["Light","Medium","Shields"]}','{"weapon":["Clubs","Daggers","Darts","Javelins","Maces","Quaterstaff","Scimatars",""Sickles","Slings","Spears"]}'),
INSERT INTO `ur0ypr4bfju2xmfs`.`classes` (`className`,`hitdice`,`profBonus`,`primaryStatID`,`savingThrowProf1`,`savingThrowProf2`,`allowArmorType`,`allowWeaponsType`) VALUES ('Fighter','10','2','str','str','con','{"armor": ["All Armor","All Shields"]}','{"weapon":["Simple Weapons","Martial Weapons"]}'),
INSERT INTO `ur0ypr4bfju2xmfs`.`classes` (`className`,`hitdice`,`profBonus`,`primaryStatID`,`savingThrowProf1`,`savingThrowProf2`,`allowArmorType`,`allowWeaponsType`) VALUES ('Monk','8','2','str','dex','str','{"armor": ["None"]}','{"weapon":["Simple Weapons","Shortswords"]}'),
INSERT INTO `ur0ypr4bfju2xmfs`.`classes` (`className`,`hitdice`,`profBonus`,`primaryStatID`,`savingThrowProf1`,`savingThrowProf2`,`allowArmorType`,`allowWeaponsType`) VALUES ('Paladin','10','2','char','char','wis','{"armor": ["All Armor","All Shields"]}','{"weapon":["Simple Weapons","Martial Weapons"]}'),
INSERT INTO `ur0ypr4bfju2xmfs`.`classes` (`className`,`hitdice`,`profBonus`,`primaryStatID`,`savingThrowProf1`,`savingThrowProf2`,`allowArmorType`,`allowWeaponsType`) VALUES ('Ranger','10','2','dex','str','dex','{"armor": ["Light","Medium","Shields"]}','{"weapon":["Simple Weapons","Martial Weapons"]}'),
INSERT INTO `ur0ypr4bfju2xmfs`.`classes` (`className`,`hitdice`,`profBonus`,`primaryStatID`,`savingThrowProf1`,`savingThrowProf2`,`allowArmorType`,`allowWeaponsType`) VALUES ('Rogues','8','2','dex','dex','int','{"armor": ["Light Armor"]}','{"weapon":["Simple Weapons","Hand Crossbow","Longsword","Rapiers","Shortsword"]}'),
INSERT INTO `ur0ypr4bfju2xmfs`.`classes` (`className`,`hitdice`,`profBonus`,`primaryStatID`,`savingThrowProf1`,`savingThrowProf2`,`allowArmorType`,`allowWeaponsType`) VALUES ('Sorcerer','6','2','dex','dex','int','{"armor": ["None"]}','{"weapon":["Daggers","Darts","Slings","Quaterstaff","Light Crossbow"]}'),
INSERT INTO `ur0ypr4bfju2xmfs`.`classes` (`className`,`hitdice`,`profBonus`,`primaryStatID`,`savingThrowProf1`,`savingThrowProf2`,`allowArmorType`,`allowWeaponsType`) VALUES ('Warlock','8','2','wis','wis','char','{"armor": ["Light Armor"]}','{"weapon":["Simple Weapons","Hand Crossbow","Longsword","Rapiers","Shortsword"]}'),
INSERT INTO `ur0ypr4bfju2xmfs`.`classes` (`className`,`hitdice`,`profBonus`,`primaryStatID`,`savingThrowProf1`,`savingThrowProf2`,`allowArmorType`,`allowWeaponsType`) VALUES ('Wizard','6','2','int','int','wis','{"armor": ["None"]}','{"weapon":["Daggers","Darts","Slings","Quaterstaff","Light Crossbow"]}')

INSERT INTO `ur0ypr4bfju2xmfs`.`races` (`raceName`, `abilityOne`, `abilityModOne`, `size`, `speed`, `language`, `specialTraits`) VALUES ('Dwarf', 'con', '2', 'm', '25', '{\"languages\":[\"Common\",\"Dwarvish\"]}', '{\"special\":[\"Darkvision\",\"Dwarven Resilience\",\"Artisan Tools\",\"Stonecunning\"]}');
INSERT INTO `ur0ypr4bfju2xmfs`.`races` (`raceName`, `abilityOne`, `abilityModOne`, `size`, `speed`, `language`, `specialTraits`) VALUES ('Elf', 'dex', '2', 'm', '30', '{\"languages\":[\"Common\",\"Elvish\"]}', '{\"special\":[\"Darkvision\",\"Keen Sense\",\"Fey Ancestry\",\"Trance\"]}');
INSERT INTO `ur0ypr4bfju2xmfs`.`races` (`raceName`, `abilityOne`, `abilityModOne`, `size`, `speed`, `language`, `specialTraits`) VALUES ('Halfing', 'dex', '2', 's', '20', '{\"languages\":[\"Common\",\"Halfing\"]}', '{\"special\":[\"Lucky\",\"Brave\",\"Halfing Nimbeness\"]}');
INSERT INTO `ur0ypr4bfju2xmfs`.`races` (`raceName`, `abilityOne`, `abilityModOne`, `size`, `speed`, `language`, `specialTraits`) VALUES ('Human', 'all', '1', 'm', '30', '{\"languages\":[\"Common\",\"Your Choice\"]}', '{\"special\":[\"None\"]}');
INSERT INTO `ur0ypr4bfju2xmfs`.`races` (`raceName`, `abilityOne`, `abilityModOne`, `size`, `speed`, `language`, `specialTraits`) VALUES ('Dragonborn', 'str', '2', 'm', '30', '{\"languages\":[\"Common\",\"Draconic\"]}', '{\"special\":[\"Draconic Ancestry\",\"Breath Weapon\",\"Damage Resistance\"]}');
INSERT INTO `ur0ypr4bfju2xmfs`.`races` (`raceName`, `abilityOne`, `abilityModOne`, `size`, `speed`, `language`, `specialTraits`) VALUES ('Gnome', 'int', '2', 's', '25', '{\"languages\":[\"Common\",\"Gnomish\"]}', '{\"special\":[\"Darkvision\",\"Gnome Cunning\"]}');
INSERT INTO `ur0ypr4bfju2xmfs`.`races` (`raceName`, `abilityOne`, `abilityTwo`, `abilityModOne`, `abilityModTwo`, `size`, `speed`, `language`, `specialTraits`) VALUES ('Half-Elf', 'char', 'one', '2', '1', 'm', '30', '{\"languages\":[\"Common\",\"Elvish\",\"Your Choice\"]}', '{\"special\":[\"Darkvision\",\"Fey Ancestry\",\"Skill Versatility\"]}');
INSERT INTO `ur0ypr4bfju2xmfs`.`races` (`raceName`, `abilityOne`, `abilityTwo`, `abilityModOne`, `abilityModTwo`, `size`, `speed`, `language`, `specialTraits`) VALUES ('Half-Orc', 'str', 'con', '2', '1', 'm', '30', '{\"languages\":[\"Common\",\"Orcish\"]}', '{\"special\":[\"Darkvision\",\"Menacing\",\"Rentless Endurance\",\"Savage Attack\"]}');
INSERT INTO `ur0ypr4bfju2xmfs`.`races` (`raceName`, `abilityOne`, `abilityTwo`, `abilityModOne`, `abilityModTwo`, `size`, `speed`, `language`, `specialTraits`) VALUES ('Tiefling', 'char', 'int', '2', '1', 'm', '30', '{\"languages\":[\"Common\",\"Infernal\"]}', '{\"special\":[\"Darkvision\",\"Hellish Resistance\",\"Infernal Legacy\"]}');

