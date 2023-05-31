/*
 READ ME!
 Remeber to log in to the chew_db@localhost and then create the schema for chew_db
 */

#Run if no schema exists
create schema chew_db;

#Code to create tables for the user side of the database incl. Member, Family, Institute
create table User(
    id          int      not null
        primary key,
    firstName   char(10) not null,
    lastName    char(10) null,
    birthDate   int      not null,
    email       int      not null,
    phone       int      null
        unique,
    role        char(8)  null,
    profBildeId int      null
);

create table Member(
    userId      int not null
        primary key,
    instituteId int null,
    familyId    int null
);

create table Family(
    familyId int  null,
    lastName char null
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
















