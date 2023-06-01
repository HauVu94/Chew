/*
 READ ME!
 - Remeber to log in to the @localhost
 - When you run the code remember to select the appropriate datasource for the execution
 - Code should be run as a whole, select create_db.sql and 'run'
 */

DROP TABLE IF EXISTS chew_db;
CREATE database if not exists chew_db DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE chew_db;

#Code to create tables for the user side of the database incl. Member, Family, Institute
create table User(
    id          int      not null
        primary key,
    firstName   char(10) not null,
    lastName    char(10) null,
    birthDate   int      not null,
    email       char(30) not null,
    phone       int(8)   not null,
    profBildeId int      null,
    username    char(10) not null,
    password    int      not null
);

create table Member(
    userId      int not null
        primary key,
    instituteId int null,
    familyId    int null
);

create table Family(
    familyId int  null,
    lastName char(10) null
);

create table Institute(
    instituteId int null

);
#End of user side database tables

#Code to create the fridge side of the database
create table Fridge(
    fridgeId int null
);

create table Food_Item(
    quantity       int  null,
    bestBeforeDate date null,
    fridgeId       int  null,
    ingredientId   int  null
);

create table Ingredient(
    ingredientName char null
);

create table Ingredient_Quantity(
    quantity int null,
    recipeId int null
);

create table Recipe(
    recipeId    int      null,
    name        char     null,
    description char(20) null
);
#End of fridge side database tables
















