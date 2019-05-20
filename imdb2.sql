-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 20, 2019 at 04:41 AM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `imdb2`
--

-- --------------------------------------------------------

--
-- Table structure for table `ad`
--

CREATE TABLE `ad` (
  `adId` int(30) NOT NULL,
  `adName` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `pw` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ad`
--

INSERT INTO `ad` (`adId`, `adName`, `email`, `pw`) VALUES
(1, 'Nguyen Viet Tien', '20164077@student.hust.edu.vn', '26121998');

-- --------------------------------------------------------

--
-- Table structure for table `admin_news`
--

CREATE TABLE `admin_news` (
  `adId` int(30) NOT NULL,
  `newsId` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `movieId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `movie`
--

CREATE TABLE `movie` (
  `id` int(30) NOT NULL,
  `movieName` varchar(30) NOT NULL,
  `trailer` varchar(255) DEFAULT NULL,
  `poster` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `releaseDate` varchar(255) DEFAULT NULL,
  `productionCo` varchar(255) DEFAULT NULL,
  `rate_average` double DEFAULT NULL,
  `total_review` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `movie`
--

INSERT INTO `movie` (`id`, `movieName`, `trailer`, `poster`, `content`, `genre`, `releaseDate`, `productionCo`, `rate_average`, `total_review`) VALUES
(1, 'Bird Box', 'https://www.youtube.com/watch?v=o2AsIXSh2xo', 'https://m.media-amazon.com/images/M/MV5BMjAzMTI1MjMyN15BMl5BanBnXkFtZTgwNzU5MTE2NjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg', 'Five years after an ominous unseen presence drives most of society to suicide, a mother and her two children make a desperate bid to reach safety', 'Drama, Horror, Sci-Fi', '21 December 2018 (USA)', 'Netflix', 7, 'The movie includes footage from a real-life Canadian disaster scene. On June 6, 2013, a freight train carrying crude oil derailed and exploded in Lac-Megantic, Quebec, killing 47 people. On January 21, 2019, Netflix apologized for including the footage, b'),
(2, 'Green Book', 'https://www.youtube.com/watch?v=uC-_Gon2p9M', 'https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_SY1000_CR0,0,666,1000_AL_.jpg', '<p><span style=\"color: #252525; font-family: Roboto, arial, sans-serif; font-size: 18px;\">A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South.</span></p>', 'Comedy, Drama', '16 November 2018', 'DreamWorks', 8, 'The pizza scene is drawn from real life: Nick Vallelonga said Tony Lip used to order a whole, unsliced pizza pie, fold it and eat it. Upon hearing the anecdote, Viggo Mortensen insisted they try to fit it into the movie. Peter Farrelly protested, saying t'),
(6, 'Avengers Endgame              ', ' https://www.youtube.com/watch?v=TcMBFSGVi1c&t=5s                                                                ', 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg', '<p>After the devastating events of Avengers: Infinity War(2018). The universe is in ruins. With the help of remaining allies. The Avengers assemble once more in oder to undo Thanos\'s actions and restore order to the universe.</p>', ' Action, Adventure, Fantasy                                                                ', ' 26 April 2019 (USA)                                                                ', ' Marvel Studio                                                                ', 9, 'After Avengers Infinity War, we waited for the Avengers Endgame. We wondered how the story would go on, how our heroes would turn back, what would be the end of Thanos. Many theories related to this have been put forward.                                 '),
(8, 'Mad Max                       ', 'https://www.youtube.com/watch?v=hEJnMQG9ev8', 'https://i.pinimg.com/originals/ce/0c/93/ce0c93d50ae68922d1f4f6667c95e1a8.jpg', '<p><span style=\"color: #252525; font-family: Roboto, arial, sans-serif; font-size: 18px;\">In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshi', 'Action, Adventure, Sci-Fic', '15 May 2015', 'Pictures, Warner Bros', 8.1, 'If you hate awe inspiring action sequences, little dialog, and post apocalyptic salvation movies you should watch this. You will. If you love those cinematic styling already then you should watch this. You will even more. See it in 3D, it is the type of e'),
(9, 'Aquaman', 'https://www.youtube.com/watch?v=WDkg3h8PCVU', 'https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg', '<p><span style=\"color: #252525; font-family: Roboto, arial, sans-serif; font-size: 18px;\">Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.</span></p>', 'Action, Adventure, Fantasy', '21 December 2018 (USA)', 'DC comics, DC Entertainment', 7.1, 'We know that the DC cinematic universe that emerged as a result of the partnership between DC Comics and Warner Bros does not go well. Aquaman does not fall into this category. The film first appeared in China. Then the comments about the movie excited me'),
(10, 'Spider-Man', 'https://www.youtube.com/watch?v=n9DwoQ7HWvI', 'https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SY1000_CR0,0,658,1000_AL_.jpg', 'Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace ', 'Action, Adventure, Sci-Fic', '7 July 2017 (USA)', 'Marvel Studio', 7.5, 'I must say that, as a Marvel Fan, I am deeply impressed with this new movie. I know that this Spidey is not really in line with the classical comics but I have to admit that this movie has an outstanding story plot. Even the Spiderman\'s suit, that Tony St');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `newsId` int(30) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `movieId` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `userId` int(30) NOT NULL,
  `movieId` int(30) NOT NULL,
  `rating` varchar(30) DEFAULT NULL,
  `comments` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(30) NOT NULL,
  `userName` varchar(30) NOT NULL,
  `pw` varchar(30) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `role` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `userName`, `pw`, `fullName`, `email`, `avatar`, `role`) VALUES
(1, 'tiennv', '123456', 'Nguyen Viet Tien', 'ntien261298@gmail.com', NULL, NULL),
(2, 'ntien261298', '$2a$10$Z86UVmID.XDC5ldpMwXjsOJ', 'Nguyen Viet Tien', 'nvt26121998@gmail.com', NULL, NULL),
(5, 'Dat', '123456', 'Vi Thanh Dat', 'datvithanh2511@gmail.com', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users_news`
--

CREATE TABLE `users_news` (
  `userId` int(30) NOT NULL,
  `newsId` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ad`
--
ALTER TABLE `ad`
  ADD PRIMARY KEY (`adId`);

--
-- Indexes for table `admin_news`
--
ALTER TABLE `admin_news`
  ADD PRIMARY KEY (`adId`,`newsId`),
  ADD KEY `key3` (`newsId`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`newsId`),
  ADD KEY `link` (`movieId`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`userId`,`movieId`),
  ADD KEY `key_review2` (`movieId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- Indexes for table `users_news`
--
ALTER TABLE `users_news`
  ADD PRIMARY KEY (`userId`,`newsId`),
  ADD KEY `key3_usernews` (`newsId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ad`
--
ALTER TABLE `ad`
  MODIFY `adId` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `movie`
--
ALTER TABLE `movie`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `newsId` int(30) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin_news`
--
ALTER TABLE `admin_news`
  ADD CONSTRAINT `key2` FOREIGN KEY (`adId`) REFERENCES `ad` (`adId`),
  ADD CONSTRAINT `key3` FOREIGN KEY (`newsId`) REFERENCES `news` (`newsId`);

--
-- Constraints for table `news`
--
ALTER TABLE `news`
  ADD CONSTRAINT `link` FOREIGN KEY (`movieId`) REFERENCES `movie` (`Id`);

--
-- Constraints for table `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `key_review2` FOREIGN KEY (`movieId`) REFERENCES `movie` (`Id`),
  ADD CONSTRAINT `key_review3` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`);

--
-- Constraints for table `users_news`
--
ALTER TABLE `users_news`
  ADD CONSTRAINT `key2_usernews` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`),
  ADD CONSTRAINT `key3_usernews` FOREIGN KEY (`newsId`) REFERENCES `news` (`newsId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
