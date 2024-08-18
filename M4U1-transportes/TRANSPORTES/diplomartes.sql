-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 22-08-2023 a las 10:26:51
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `diplomartes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` varchar(250) NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'Crece la demanda de centros logísticos premium', 'LA NACION - 24 de enero de 2022', '     Tanto los brokers como los analistas del sector sostienen que el mercado logístico de Buenos Aires terminó el 2021 con una marcada recuperación. Lo que, en algún modo, se traduciría como muy buenas perspectivas de cara a este año.\r\nVarios son los factores que dan cuenta de esta recuperación. Según Lucas Desalvo, gerente de investigación de Mercado de Cushman & Wakefield, uno de los hitos principales, es el descenso interanual en la tasa de vacancia en un 68%: pasó del 18,9% al 12,9%. “La absorción neta anual cerró en 203.965 m², como resultado de 30.138 m² desocupados y 234.103 m² ocupados”.', 'eixkk1r3j9npupcunuro'),
(2, 'Última milla: cómo optimizar la logística aplicando inteligencia artificial', 'INFOBAE-27 Jun, 2023', '     En un momento en el que la inteligencia artificial revoluciona al mundo, la generación y recolección de información valiosa para entrenar algoritmos que luego puedan aplicarse en estrategias de eficientización y ahorro de costos es de vital importancia.\r\n\r\nY aunque parezca extraño, una de las industrias en las que este avance se ve demorado es, nada más y nada menos, que la de la logística. Algo que en muchas ocasiones –y sobre todo durante la pandemia y el boom del comercio online– quedó de manifiesto. Los productos estaban listos para llegar a sus compradores pero atorados en un cuello de botella por temas de eficiencia en la famosa “última milla”.', 'b1sdigbibqjc3toga0cu'),
(3, 'Tecnología aplicada a la logística: potenciar pymes para que puedan competir', 'ámbito-26 de marzo 2023', '  Las pymes están frente el doble desafío de enfrentar un financiamiento cada vez más caro y de difícil acceso que dificulta las posibilidades de inversión y una logística también más costosa. ¿La tecnología es la solución?\r\nHoy ya nadie discute el rol preponderante que tienen las pymes en la economía nacional y mundial. Si bien puede haber diferentes matices entre países, se sabe que las Pymes representan más del 90% del total de empresas, que son responsables de más de la mitad del producto bruto a nivel mundial y que emplean a 7 de cada 10 trabajadores.', 'laphcosag2lsb9bdnvow');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'torcuato', 'dec975b419752192814977febb93b0b7'),
(2, 'renato', 'aaaadd5c9154bc5ebd3e54c15dd202dc'),
(3, 'antonio', 'be60b28c9b2bcf694dbf2895fb5c4d83');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
