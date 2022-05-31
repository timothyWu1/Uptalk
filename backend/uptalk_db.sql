-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 31 mai 2022 à 22:35
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

-- --------------------------------------------------------

--
-- Structure de la table `interet_relation`
--

CREATE TABLE `interet_relation` (
  `user_id` int(11) NOT NULL,
  `interet_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(2, 3, 'like'),
(2, 4, 'dislike'),
(3, 2, ''),
(4, 2, 'like');

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
(5, 48.991, 2.19187);

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
(2, NULL, NULL, 'Male', '2000-01-01', NULL),
(3, NULL, NULL, 'Male', '2001-08-09', NULL),
(4, NULL, NULL, 'Female', '2000-06-12', NULL),
(5, NULL, NULL, 'Female', '2001-12-23', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `question`
--

CREATE TABLE `question` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `question_relation`
--

CREATE TABLE `question_relation` (
  `user_id` int(11) NOT NULL,
  `question_id` int(11) DEFAULT NULL,
  `reponse` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(5, 'bi', 50, 18, 50);

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
(2, 'damien@drozd', '$2b$10$doS/Oyd.WFFz.uiTGfxczO2xpIjL/8MQlccZC3VbVqUVIKdQI06lG'),
(3, 'timothy@wu', '$2b$10$5gwhszeTgwWYhaNjjGC4fughvORHkxBvVWqD1mJIJuZxpVj6xhESq'),
(4, 'judith@dubreuil', '$2b$10$Lv7hOrSPq.Y24maUTMJg8OhqtHQhVci.wNNInbuYusY8q4EnWhzc.'),
(5, 'clement@lanneretone', '$2b$10$YynNqBRUEvzqW2U9eEfN2uNLY7VlkucnChQHgASiFTNTDyRc55Lu6');

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
  ADD KEY `user_id` (`user_id`) USING BTREE;

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
  ADD KEY `question_id` (`question_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `question`
--
ALTER TABLE `question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
