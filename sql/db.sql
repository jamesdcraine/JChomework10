SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `department` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `department` (`id`, `name`) VALUES
(1, 'Sales'),
(2, 'Engineering'),
(3, 'Finance'),
(4, 'Legal');

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `manager_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `employee` (`id`, `first_name`, `last_name`, `role_id`, `manager_id`) VALUES
(1, 'John', 'Doe', 1, 3),
(2, 'Mike', 'Chan', 2, 1),
(3, 'Ashley', 'Rodriguez', 3, NULL),
(4, 'Kevin', 'Tupik', 4, 3),
(5, 'Malia', 'Brown', 5, NULL),
(6, 'Sarah', 'Lourd', 2, NULL),
(7, 'Tom', 'Allen', 4, 7),
(8, 'Christian', 'Eckenrode', 1, 2);

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `title` varchar(45) DEFAULT NULL,
  `salary` decimal(10,0) DEFAULT NULL,
  `department_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `role` (`id`, `title`, `salary`, `department_id`) VALUES
(1, 'Sales Lead', '100000', 1),
(2, 'Lead Engineer', '150000', 2),
(3, 'Software Engineer', '120000', 2),
(4, 'Accountant', '125000', 3),
(5, 'Legal Team Lead', '250000', 4);

ALTER TABLE `department`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `department`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;
