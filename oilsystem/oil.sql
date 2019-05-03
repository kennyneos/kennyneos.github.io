-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2019 at 03:52 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `oil`
--

-- --------------------------------------------------------

--
-- Table structure for table `oil_form`
--

CREATE TABLE `oil_form` (
  `username` text NOT NULL,
  `id` int(11) NOT NULL,
  `given` decimal(10,1) NOT NULL,
  `days` decimal(10,1) NOT NULL,
  `datefrom` date NOT NULL,
  `dateto` date NOT NULL,
  `remarks` text NOT NULL,
  `approver` text NOT NULL,
  `approved_status` int(11) NOT NULL,
  `aggregate` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `oil_form`
--

INSERT INTO `oil_form` (`username`, `id`, `given`, `days`, `datefrom`, `dateto`, `remarks`, `approver`, `approved_status`, `aggregate`) VALUES
('', 16, '1.0', '1.0', '2019-02-04', '2019-02-04', 'hshss', 'OC', 0, 0),
('', 17, '-1.0', '1.0', '0000-00-00', '0000-00-00', 'sfs', 'DYCO', 0, 0),
('', 18, '-1.0', '1.0', '0000-00-00', '0000-00-00', 'sfs', 'DYCO', 0, 0),
('', 19, '-1.0', '1.0', '0000-00-00', '0000-00-00', 'sfs', 'DYCO', 0, 0),
('', 20, '-1.0', '1.0', '0000-00-00', '0000-00-00', 'sfs', 'DYCO', 0, 0),
('', 21, '-1.0', '1.0', '0000-00-00', '0000-00-00', 'sfs', 'DYCO', 0, 0),
('', 22, '1.0', '1.0', '2019-04-23', '2019-04-26', '', '', 0, 0),
('', 23, '-1.0', '3.0', '0000-00-00', '0000-00-00', 'sfs', 'DYCO', 0, 0),
('', 24, '-1.0', '2.5', '2019-09-04', '2019-09-04', 'e', 'OC', 0, 0),
('Keinshuen97', 25, '1.0', '0.5', '0000-00-00', '0000-00-00', 'd', 'DYCO', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `usernames`
--

CREATE TABLE `usernames` (
  `user_id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `access` enum('DYCO','OC','OPSWO','CC','ADMIN') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usernames`
--

INSERT INTO `usernames` (`user_id`, `username`, `password`, `access`) VALUES
(1, 'Keinshuen97', '12345', 'ADMIN'),
(2, 'dennis', '12', 'DYCO');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `oil_form`
--
ALTER TABLE `oil_form`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usernames`
--
ALTER TABLE `usernames`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `oil_form`
--
ALTER TABLE `oil_form`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `usernames`
--
ALTER TABLE `usernames`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
