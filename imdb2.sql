create table ad (
	adId int (30) not null auto_increment,
    adName varchar (30) not null,
    email varchar (30) not null,
    pw varchar (30) not null,
    
    constraint key_admin primary key (adId)
);

create table users (
	userId int (30) not null auto_increment,
    userName varchar (30) not null,
    pw varchar (30) not null,
    fullName varchar (255) not null,
    email varchar (30),
    avatar varchar (255),
    role boolean,
    
    constraint key_users primary key (userId)
);


create table movie (
	movieId int (30) not null auto_increment,
    movieName varchar (30) not null,
    trailer varchar (255),
    poster varchar (255),
    
    constraint key_movie primary key (movieId)
 );
 
create table news (
	newsId int( 30) not null auto_increment,
    title varchar (255) not null,
    content varchar (255),
    movieId int (30) not null ,
    constraint key_news primary key (newsId),
    constraint link foreign key (movieId) references movie(movieId)
);


create table review (
    userId int (30) not null,
    movieId int (30) not null,
    rating varchar (30),
    comments varchar (255),
    
    constraint key_review primary key (userId, movieId),
    constraint key_review2 foreign key (movieId) references movie(movieId),
    constraint key_review3 foreign key (userId) references users(userId)
    
);
create table users_news (
	userId int (30) not null,
    newsId int (30) not null,
    
    constraint key_usernews primary key (userId, newsId),
    constraint key2_usernews foreign key (userId) references users(userId),
    constraint key3_usernews foreign key (newsId) references news(newsId)
    
);

create table admin_news (
	adId int (30) not null,
    newsId int (30) not null,
    
    constraint key1 primary key (adId, newsId),
    constraint key2 foreign key (adId) references ad(adId),
    constraint key3 foreign key (newsId) references news(newsId)
);

create table admin_movie (
	movieId int (30) not null,
    adId int (30) not null,
    content varchar (255) not null,
    genre varchar (255),
    releaseDate varchar (255),
    productionCo varchar (255),
    rate_average varchar (30),
    total_review varchar (255),
    
    constraint key4 primary key (movieId, adId),
    constraint key5 foreign key (movieId) references movie(movieId),
    constraint key6 foreign key (adId) references ad(adId)
);


 
 