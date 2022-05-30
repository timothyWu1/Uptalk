-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : sam. 28 mai 2022 à 23:12
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
  `interet_id` int(11) DEFAULT NULL,
  `interet_nb` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `interet_relation`
--

INSERT INTO `interet_relation` (`user_id`, `interet_id`, `interet_nb`) VALUES
(68, NULL, 1),
(69, NULL, 1),
(70, NULL, 1);

-- --------------------------------------------------------

--
-- Structure de la table `localisation`
--

CREATE TABLE `localisation` (
  `user_id` int(11) NOT NULL,
  `longitude` int(11) DEFAULT NULL,
  `lattitude` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `localisation`
--

INSERT INTO `localisation` (`user_id`, `longitude`, `lattitude`) VALUES
(68, NULL, NULL),
(69, NULL, NULL),
(70, NULL, NULL);

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
(0, 'Drozd', 'Damien', 'male', '2012-04-01', 'Salut a tous c\'est DDD aka Destroy doctor december'),
(61, NULL, NULL, NULL, NULL, NULL),
(62, NULL, NULL, NULL, NULL, NULL),
(63, NULL, NULL, NULL, NULL, NULL),
(64, NULL, NULL, NULL, NULL, NULL),
(65, NULL, NULL, NULL, NULL, NULL),
(66, NULL, NULL, NULL, NULL, NULL),
(67, NULL, NULL, NULL, NULL, NULL),
(68, NULL, NULL, NULL, NULL, NULL),
(69, NULL, NULL, NULL, NULL, NULL),
(70, NULL, NULL, NULL, NULL, NULL);

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
  `reponse` text DEFAULT NULL,
  `question_nb` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `question_relation`
--

INSERT INTO `question_relation` (`user_id`, `question_id`, `reponse`, `question_nb`) VALUES
(70, NULL, NULL, 1);

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
(61, NULL, NULL, NULL, NULL),
(62, NULL, NULL, NULL, NULL),
(63, NULL, NULL, NULL, NULL),
(64, NULL, NULL, NULL, NULL),
(65, NULL, NULL, NULL, NULL),
(66, NULL, NULL, NULL, NULL),
(67, NULL, NULL, NULL, NULL),
(68, NULL, NULL, NULL, NULL),
(69, NULL, NULL, NULL, NULL),
(70, NULL, NULL, NULL, NULL);

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
(9, 'test@test', '$2b$10$sS5MuWj/ob3nwt4FlZAC6.NVUEKHepNl4ZKE0LzZu0f2G1YP8bxc2'),
(14, 'dems@dems', '$2b$10$RTgLS0dYUEAfBRMUsYFF2eXNmo7K7hTNDXIHi5/XxZ995Cub.57ty'),
(15, 'dems@dem', '$2b$10$yKn5xVUKq5daHXqqfybBKumk/eqsRvhtLoKVwdsU3DJ7uk/mN1tCi'),
(20, 'test@tes', '$2b$10$RAJ3.epZkHAggtplEGXom.Rpo5DKpAYaFkemDoH88BHGmgSkUi3hq'),
(23, 'test@te', '$2b$10$.qMQA/1MMzQkwgcoWtMyWeh13bZVR68eo9ffZTD3qga/beL7VeaNq'),
(32, 'test@teste', '$2b$10$mzd9LmlP/oA9lqM9k0nc/eUpK2VfYatoWb3Q0ev5srVkJnICWhMx.'),
(49, 'test@tester', '$2b$10$pMAqzjFlVKjzXlsXGvgkw.X9my7eWqQx15TEw0W59FLAGUzC8tL4e'),
(58, 'test@testere', '$2b$10$./fFGwFoUR98ZC3lk6Az9ujl6Deum2VoVv0DN./I7eljnZYy8k/cS'),
(59, 'test@testerez', '$2b$10$9u9Zqu5h6uicoxZnkUk9beE1nGGopCPCQT/B7kZ20mK9nS8jGpe7S'),
(60, 'test@testerezs', '$2b$10$aFufqbjaVOG5iTPMHj.r7OMXOaIPfkKx9EKGcKx493qiJftCy2gfy'),
(61, 'test@testerezsz', '$2b$10$gSGAlWPvNczAZdJiUZlW5O.lRvMXisrLpA22MhqPivixtShQkQeua'),
(62, 'test@testerezszcsc', '$2b$10$Y6chPJq9PO6QnyKZxsQ/..yoJ4gY7AsIxULm0c2Ac.8PWLv62eVIG'),
(63, 'test@testerezszcscdd', '$2b$10$UAiRe70KYsMkJzlNNiEkTer.gu17VPtNTQ5vcH9BdQjtsfeAjV3ke'),
(64, 'test@testsa', '$2b$10$tUAOrSAgNyh4RljOTwnBKeunGpDNXd7ktawJumoT0cCTMhlN1ca9u'),
(65, 'test@testsadd', '$2b$10$wAx7aJcTRrXLZ4rOdfavZ.dlNJAewyObfSoM7GbEXmvxw2eTc8yd.'),
(66, 'test@testsadds', '$2b$10$lTkX54zo72bIhiXwygTOVOAgJ0qcoPQMmva73my.5DuNvOSgN75EO'),
(67, 'test@testsaddss', '$2b$10$FESD0ZapKm/JfAtUa4DozeYl.cz82JuHpPK8ZJ3ZgGFuS/WfWUT82'),
(68, 'test@testsaddssss', '$2b$10$W9mP2wBoEKteAE6qXA4rF.uyt4eSBSVKaBWAapHcfDCRW2qH7tfd2'),
(69, 'test@testsaddsssss', '$2b$10$Wt2z5sPAlWukMiKgKU3/Y.Fn/t0fJZcX80OkZtyJOhqAQGfwXsW3q'),
(70, 'test@testsaddsssssss', '$2b$10$PisJWdbgU82XXeKijvofpOxw9KrUlkjb7DMQSDtJWXznwd5dedHUO');

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
  ADD KEY `interet_nb` (`interet_nb`);

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
  ADD KEY `question_nb` (`question_nb`);

--
-- Index pour la table `recherche`
--
ALTER TABLE `recherche`
  ADD PRIMARY KEY (`user_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `interet`
--
ALTER TABLE `interet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `interet_relation`
--
ALTER TABLE `interet_relation`
  MODIFY `interet_nb` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `question`
--
ALTER TABLE `question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `question_relation`
--
ALTER TABLE `question_relation`
  MODIFY `question_nb` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
