-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 06 juin 2022 à 13:21
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `uptalk_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `interet`
--

CREATE TABLE `interet` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `interet`
--

INSERT INTO `interet` (`id`, `name`) VALUES
(9, 'Alcool'),
(3, 'foot'),
(6, 'Jeux Vidéos'),
(5, 'League of Legends'),
(7, 'Minecraft'),
(4, 'netflix'),
(8, 'Soirées'),
(1, 'sport');

-- --------------------------------------------------------

--
-- Structure de la table `interet_relation`
--

CREATE TABLE `interet_relation` (
  `user_id` int(11) NOT NULL,
  `interet_id` int(11) DEFAULT NULL,
  `nb` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `interet_relation`
--

INSERT INTO `interet_relation` (`user_id`, `interet_id`, `nb`) VALUES
(17, NULL, NULL),
(17, NULL, NULL),
(17, NULL, NULL),
(0, NULL, NULL),
(18, NULL, 1),
(18, NULL, 2),
(18, NULL, 3),
(18, NULL, 4),
(18, NULL, 5),
(19, 6, 1),
(19, 5, 2),
(19, 7, 3),
(19, 4, 4),
(19, 8, 5),
(20, NULL, 1),
(20, NULL, 2),
(20, NULL, 3),
(20, NULL, 4),
(20, NULL, 5),
(21, NULL, 1),
(21, NULL, 2),
(21, NULL, 3),
(21, NULL, 4),
(21, NULL, 5),
(22, NULL, 1),
(22, NULL, 2),
(22, NULL, 3),
(22, NULL, 4),
(22, NULL, 5),
(23, NULL, 1),
(23, NULL, 2),
(23, NULL, 3),
(23, NULL, 4),
(23, NULL, 5),
(24, 9, 1),
(24, 3, 2),
(24, 6, 3),
(24, 5, 4),
(24, 7, 5),
(25, NULL, 1),
(25, NULL, 2),
(25, NULL, 3),
(25, NULL, 4),
(25, NULL, 5);

-- --------------------------------------------------------

--
-- Structure de la table `liked`
--

CREATE TABLE `liked` (
  `user_id` int(11) NOT NULL,
  `target_id` int(11) NOT NULL,
  `type` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `liked`
--

INSERT INTO `liked` (`user_id`, `target_id`, `type`) VALUES
(5, 2, 'dislike'),
(5, 3, 'like'),
(5, 4, 'dislike'),
(5, 6, 'like'),
(5, 7, 'dislike'),
(5, 8, 'like'),
(5, 9, 'dislike'),
(5, 10, 'like'),
(5, 11, 'dislike'),
(5, 12, 'like'),
(2, 3, 'like'),
(2, 4, 'like'),
(2, 5, 'like'),
(2, 6, 'like'),
(2, 7, 'like'),
(2, 8, 'like'),
(2, 9, 'like'),
(2, 10, 'like'),
(2, 11, 'like'),
(2, 12, 'like'),
(13, 2, 'dislike'),
(13, 3, 'like'),
(13, 4, 'like'),
(13, 5, 'like'),
(13, 6, 'dislike'),
(13, 7, 'dislike'),
(13, 8, 'dislike'),
(13, 9, 'dislike'),
(13, 10, 'dislike'),
(13, 11, 'dislike'),
(13, 12, 'dislike');

-- --------------------------------------------------------

--
-- Structure de la table `localisation`
--

CREATE TABLE `localisation` (
  `user_id` int(11) NOT NULL,
  `longitude` float DEFAULT NULL,
  `lattitude` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `localisation`
--

INSERT INTO `localisation` (`user_id`, `longitude`, `lattitude`) VALUES
(2, 48.6903, 2.29694),
(3, 48.9698, 2.28292),
(4, 48.7894, 2.28696),
(5, 48.991, 2.19187),
(6, NULL, NULL),
(7, NULL, NULL),
(8, NULL, NULL),
(9, NULL, NULL),
(10, NULL, NULL),
(11, NULL, NULL),
(12, NULL, NULL),
(13, NULL, NULL),
(14, NULL, NULL),
(15, NULL, NULL),
(16, NULL, NULL),
(17, NULL, NULL),
(18, NULL, NULL),
(19, NULL, NULL),
(20, NULL, NULL),
(21, NULL, NULL),
(22, NULL, NULL),
(23, NULL, NULL),
(24, NULL, NULL),
(25, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `profile`
--

CREATE TABLE `profile` (
  `user_id` int(11) NOT NULL,
  `firstname` varchar(25) DEFAULT NULL,
  `lastname` varchar(25) DEFAULT NULL,
  `gender` varchar(25) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `bio` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `profile`
--

INSERT INTO `profile` (`user_id`, `firstname`, `lastname`, `gender`, `birthday`, `bio`) VALUES
(2, 'Damien', 'Drozd', 'Male', '2001-09-04', 'ceci est ma biographie'),
(3, 'Timothy ', 'Wu', 'Male', '2001-08-08', NULL),
(4, 'Judith', 'Dubreuil', 'Female', '2000-06-12', NULL),
(5, 'Clément', 'Lanneretone', 'Female', '2001-12-23', NULL),
(6, 'Kevin', 'Alves', NULL, NULL, NULL),
(7, 'Siphano', NULL, NULL, NULL, NULL),
(8, NULL, NULL, NULL, NULL, NULL),
(9, NULL, NULL, NULL, NULL, NULL),
(10, NULL, NULL, NULL, NULL, NULL),
(11, NULL, NULL, NULL, NULL, NULL),
(12, NULL, NULL, NULL, NULL, NULL),
(13, 'Judith', 'Dubreuil', 'Female', '2000-06-12', 'Je m\'appelle Judith et j\'aime le dessin'),
(14, NULL, NULL, NULL, NULL, NULL),
(15, NULL, NULL, NULL, NULL, NULL),
(16, NULL, NULL, NULL, NULL, NULL),
(17, NULL, NULL, NULL, NULL, NULL),
(18, NULL, NULL, NULL, NULL, NULL),
(19, NULL, NULL, NULL, NULL, NULL),
(20, NULL, NULL, NULL, NULL, NULL),
(21, NULL, NULL, NULL, NULL, NULL),
(22, NULL, NULL, NULL, NULL, NULL),
(23, NULL, NULL, NULL, NULL, NULL),
(24, 'Damien', 'Drozd', 'Male', '2001-09-07', 'Bonjour, je m\'appelle Damien'),
(25, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `question`
--

CREATE TABLE `question` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `question`
--

INSERT INTO `question` (`id`, `name`) VALUES
(1, 'Si vous devez vous décrire avec trois objets, lesquels seront-ils ?'),
(3, 'Selon vous, qu\'elle est la chose essentielle dans une relation durable?'),
(4, 'Quelle est la caractéristique qui vous attire le plus chez votre partenaire ?'),
(5, 'Quelle est la chose a propos de vous dont votre partenaire doit absolument savoir avant même de discuter avec vous ?');

-- --------------------------------------------------------

--
-- Structure de la table `question_relation`
--

CREATE TABLE `question_relation` (
  `user_id` int(11) NOT NULL,
  `question_id` int(11) DEFAULT NULL,
  `reponse` text DEFAULT NULL,
  `nb` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `question_relation`
--

INSERT INTO `question_relation` (`user_id`, `question_id`, `reponse`, `nb`) VALUES
(20, NULL, NULL, 1),
(20, NULL, NULL, 2),
(20, NULL, NULL, 3),
(21, NULL, NULL, 1),
(21, NULL, NULL, 2),
(21, NULL, NULL, 3),
(22, NULL, NULL, 1),
(22, NULL, NULL, 2),
(22, NULL, NULL, 3),
(23, NULL, NULL, 1),
(23, NULL, NULL, 2),
(23, NULL, NULL, 3),
(24, 1, 'test1', 1),
(24, 4, 'test2', 2),
(24, 5, 'test3', 3),
(25, NULL, NULL, 1),
(25, NULL, NULL, 2),
(25, NULL, NULL, 3);

-- --------------------------------------------------------

--
-- Structure de la table `recherche`
--

CREATE TABLE `recherche` (
  `user_id` int(11) NOT NULL,
  `preference_gender` varchar(25) DEFAULT NULL,
  `zone_recherche` int(11) DEFAULT NULL,
  `age_min` int(11) DEFAULT NULL,
  `age_max` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `recherche`
--

INSERT INTO `recherche` (`user_id`, `preference_gender`, `zone_recherche`, `age_min`, `age_max`) VALUES
(2, 'bi', 40, 20, 50),
(3, 'bi', 40, 18, 50),
(4, 'bi', 40, 18, 50),
(5, 'bi', 50, 18, 50),
(6, NULL, NULL, NULL, NULL),
(7, NULL, NULL, NULL, NULL),
(8, NULL, NULL, NULL, NULL),
(9, NULL, NULL, NULL, NULL),
(10, NULL, NULL, NULL, NULL),
(11, NULL, NULL, NULL, NULL),
(12, NULL, NULL, NULL, NULL),
(13, NULL, NULL, NULL, NULL),
(14, NULL, NULL, NULL, NULL),
(15, NULL, NULL, NULL, NULL),
(16, NULL, NULL, NULL, NULL),
(17, NULL, NULL, NULL, NULL),
(18, NULL, NULL, NULL, NULL),
(19, NULL, NULL, NULL, NULL),
(20, NULL, NULL, NULL, NULL),
(21, NULL, NULL, NULL, NULL),
(22, NULL, NULL, NULL, NULL),
(23, NULL, NULL, NULL, NULL),
(24, NULL, NULL, NULL, NULL),
(25, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `password`) VALUES
(3, 'timothy@wu', '$2b$10$5gwhszeTgwWYhaNjjGC4fughvORHkxBvVWqD1mJIJuZxpVj6xhESq'),
(4, 'judith@dubreuil', '$2b$10$Lv7hOrSPq.Y24maUTMJg8OhqtHQhVci.wNNInbuYusY8q4EnWhzc.'),
(5, 'clement@lanneretone', '$2b$10$YynNqBRUEvzqW2U9eEfN2uNLY7VlkucnChQHgASiFTNTDyRc55Lu6'),
(15, 'benjamin@boisson', '$2b$10$An7qAZqkW0zOAAz84gjaseekQwXSfOg6Nu9AQnfhLxmQ1pgH.OtG6'),
(24, 'damien@drozd', '$2b$10$CdEw/CjBIG62udlBIDuEbO5YdER/.hF8DX1ZRHzwwwQaiDiABwzsS'),
(25, 'test@test', '$2b$10$WuJ49w8N7r9gg8/FWkX48.02fSNqBrsGLIPgOEluHXNiH.2rwCUqO');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `interet`
--
ALTER TABLE `interet`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `interet_relation`
--
ALTER TABLE `interet_relation`
  ADD KEY `interet_id` (`interet_id`),
  ADD KEY `user_id` (`user_id`) USING BTREE,
  ADD KEY `nb` (`nb`);

--
-- Index pour la table `localisation`
--
ALTER TABLE `localisation`
  ADD PRIMARY KEY (`user_id`);

--
-- Index pour la table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`user_id`);

--
-- Index pour la table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `question_relation`
--
ALTER TABLE `question_relation`
  ADD KEY `user_id` (`user_id`),
  ADD KEY `question_id` (`question_id`),
  ADD KEY `nb` (`nb`);

--
-- Index pour la table `recherche`
--
ALTER TABLE `recherche`
  ADD PRIMARY KEY (`user_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `interet`
--
ALTER TABLE `interet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `question`
--
ALTER TABLE `question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
