-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: fufu_db
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `user_category_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_idx` (`user_category_id`),
  CONSTRAINT `category` FOREIGN KEY (`user_category_id`) REFERENCES `user_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (2,'Matias Daniel','Chaves','Matias027','matiaschaves27@gmail.com','1162526485','$2b$10$NRICHLUZEOuzqAfng8XKd.tcZuqH9qchfXcQi1IzhmxA4cOjArmCO','user-1683937073034.jpg',2,'2023-04-06 19:10:22','2023-05-17 22:04:32',NULL),(4,'Johann','JERMANY','','eljohann123@gmail.com','','$2b$10$XS4c3A7cadR0Dq63Q16ILuvHMOVrB4wuS5f.tjBATzTmZTrnKwyY.','user-1682623995915.jpg',1,'2023-04-27 19:33:16','2023-04-27 19:33:16','2023-05-15 22:21:58'),(7,'Lautaro','Robles','','lautarobles@gmail.com','','$2b$10$87bDX4yfhhuk29gfQqAP1u1fmF5u5wAnZ7EEEOENE4m2tOiqF/.qG','user-1683744065947.jpg',1,'2023-05-10 18:41:06','2023-05-10 18:41:06',NULL),(8,'Johann','Jerman','Johan014','johannjerman014@gmail.com','1125262321','$2b$10$oi35slk0YVzBx7YuXznZyODpxwA4Vr.rLuiUKh/dwclD6igBfVkUS','user-1684363978495.jpeg',1,'2023-05-15 19:12:39','2023-05-17 22:52:58',NULL),(9,'Hola','Comoestas','Holacomoestas','holacomo@gmail.com','1152526464','$2b$10$zEeUO1dR9yuUx/7XDf0SwelT3fLo9A02xFgRYgjNmIoi.BnksgE76','user-1684189561843.jpg',1,'2023-05-15 22:26:02','2023-05-15 22:26:02','2023-05-15 22:26:49'),(10,'Este','esotro','esotro','esteotro@gmial.com','1144556699','$2b$10$v4m82Iy7F3I.sRG2ME/0hOUBB991mtB8gbdfn0jLPN9Pfh2cMjk3m','user-1684189884687.jpg',1,'2023-05-15 22:31:24','2023-05-15 22:31:24','2023-05-15 22:32:01'),(11,'Seguimos','probando','Prueba','prueba@gmail.com','12345678','$2b$10$87DNqG4rlZlzAgxLYiyecu8HKuzD8EWlBIvVhsEg.1rt/iMXK4kUy','user-1684190519395.jpg',1,'2023-05-15 22:41:59','2023-05-15 22:41:59','2023-05-15 22:44:12');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-18 12:50:45
