-- Create the database if not already created
CREATE DATABASE IF NOT EXISTS User_db;
USE User_db;

-- Drop table if it already exists
DROP TABLE IF EXISTS users;

-- Create the users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

-- Insert 50 dummy users
INSERT INTO users (username, password)
VALUES 
('sunflower01', 'pass123'),
('moonlight_babe', 'abc123'),
('cozyCat22', 'meowmeow'),
('rainbowRider', 'iloverainbows'),
('bubbletea_lover', 'sweetboba'),
('soft_goth', 'vampirequeen'),
('pastelPunk', 'pinknblack'),
('mintymirage', 'coolcool'),
('codegirlx', 'codingrocks'),
('sparkleDreamz', 'dreambig'),

('glitchangel', 'gl1tchh'),
('sleepybean', 'eepyeepy'),
('fluffybun', 'bunbunbun'),
('anime_kween', 'sugoi123'),
('dreamydaisy', 'softpetal'),
('cyber_princess', 'matrixglam'),
('frosty_fox', 'winterfur'),
('pink_panthera', 'roar123'),
('techwitch', 'spellcoded'),
('cloudcuddlez', 'cottonluv'),

('galaxy_sweet', 'starlight'),
('neonheart', 'electriclove'),
('bubblegumbabe', 'chewxoxo'),
('midnight_mercy', 'darklullaby'),
('softpixelz', 'oldschool'),
('candycore', 'yumyum'),
('bunnyhops', 'hopalong'),
('twinklingtulip', 'flowerflow'),
('vibeyvixen', 'goodvibes'),
('rose_rebel', 'spikethorn'),

('plush_punk', 'rebelteddy'),
('pastelpirate', 'arrrrggh'),
('codedcutie', 'devlife'),
('lavender_light', 'softshade'),
('berryberrycute', 'berry123'),
('raininghearts', 'emolove'),
('crimsonangel', 'deepred'),
('floralnova', 'bloombright'),
('wavyghost', 'floattime'),
('sillyseraph', 'halohaha'),

('twilightdreamz', 'sleepmode'),
('sweetchip', 'bitbyte'),
('oceankitty', 'splashsplash'),
('static_bae', 'buzzbuzz'),
('cottoncore', 'pastelpwr'),
('mecha_rose', 'robotlove'),
('gigglegloom', 'haha_dark'),
('wispymelody', 'tuneout'),
('honeybunni', 'sugarbun'),
('duskypixie', 'nightlight');