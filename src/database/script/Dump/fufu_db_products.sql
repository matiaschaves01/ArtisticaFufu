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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(120) NOT NULL,
  `price` int NOT NULL,
  `capacity` varchar(45) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `description` mediumtext NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `product_color_id` int DEFAULT NULL,
  `product_sub_category_id` int DEFAULT NULL,
  `product_categories_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_colors_idx` (`product_color_id`),
  KEY `productsubcategory_idx` (`product_sub_category_id`),
  KEY `product_categories_idx` (`product_categories_id`),
  CONSTRAINT `product_categories` FOREIGN KEY (`product_categories_id`) REFERENCES `product_categories` (`id`),
  CONSTRAINT `product_colors` FOREIGN KEY (`product_color_id`) REFERENCES `product_colors` (`id`),
  CONSTRAINT `product_subcategory` FOREIGN KEY (`product_sub_category_id`) REFERENCES `product_subcategory` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Johann GATO',252,NULL,'product-1676127982445.jpg','Basta de toooodo','2023-03-31 18:35:26','2023-05-02 00:45:16','2023-05-09 15:06:14',1,NULL,1),(3,'Flor grande',500,NULL,'product-1681164682783.jpg','Flor de Fibrofacil para pintar y decorar','2023-04-10 22:11:22','2023-04-10 22:12:09','2023-04-10 22:12:22',NULL,NULL,1),(4,'Canasta de cerveza',1900,NULL,'product-1681319459095.jpg','Canasta de Fibrofacil. Apta para pintar','2023-04-12 17:10:59','2023-04-12 17:10:59','2023-05-09 15:06:22',NULL,NULL,1),(5,'Caja de Rocio',500,NULL,'product-1682202772440.jpg','Caja Para Rocio :)','2023-04-22 22:32:52','2023-04-22 22:35:40','2023-04-22 22:51:26',NULL,NULL,1),(6,'Caja de Té ',1700,NULL,'product-1682622188205.jpg','La caja de té de fibrofácil es una elegante y práctica solución para almacenar tus infusiones favoritas. Fabricada en madera de fibrofácil de alta calidad, esta caja presenta un diseño rectangular con una tapa con bisagras que se abre para revelar cuatro compartimentos individuales. Cada compartimento es lo suficientemente grande como para contener varias bolsitas de té y está dividido por tabiques que te permiten separar diferentes tipos de té. La superficie exterior de la caja es suave al tacto y se puede personalizar con cualquier diseño o acabado que desees, lo que la convierte en una excelente opción para decorar tu cocina o comedor.','2023-04-27 19:03:08','2023-05-09 16:05:44','2023-05-09 16:05:49',NULL,NULL,1),(7,'hol',1200,NULL,'product-1683406123624.jpg','asdfg','2023-05-06 20:48:43','2023-05-06 20:49:15','2023-05-09 15:06:29',NULL,NULL,1),(8,'hol',1234,NULL,'product-1683406810122.jpg','asdfghjklñasdfghjklñasdfghjklñasdfghjklñasdfghjklñasdfghjklñasdfghjklñasdfghjklñ','2023-05-06 21:00:10','2023-05-06 21:00:36','2023-05-06 21:01:23',NULL,NULL,NULL),(9,'Estrella',2000,NULL,'product-1683644993326.jpg','Esta estrella de fibrofácil es una excelente opción para decorar cualquier espacio. Fabricada con madera de fibrofácil de alta calidad, presenta una forma de estrella de cinco puntas y una superficie suave al tacto que es perfecta para pintar y personalizar con cualquier diseño o color que desees. Con su tamaño compacto, esta estrella es fácil de manejar y colocar en cualquier lugar, ya sea en una pared, puerta, árbol de Navidad o cualquier otro lugar que quieras adornar. ¡Deja volar tu creatividad y dale un toque personal a tus espacios con esta estrella de fibrofácil apta para pintar!','2023-05-09 15:09:53','2023-05-09 15:09:53',NULL,NULL,NULL,NULL),(10,'Perchero',3500,NULL,'product-1683645140567.jpg','Este perchero de fibrofácil es una excelente solución para colgar hasta tres objetos en cualquier espacio de tu hogar. Fabricado con madera de fibrofácil de alta calidad, este perchero presenta un diseño compacto y funcional con tres ganchos resistentes. Además, su superficie lisa y uniforme es ideal para decorar con pinturas, adhesivos o cualquier otro material creativo para personalizarlo a tu gusto y combinarlo con tu estilo decorativo. Con este práctico perchero de fibrofácil, podrás mantener tus objetos personales organizados y al alcance de tu mano en cualquier habitación.','2023-05-09 15:12:20','2023-05-09 15:12:20',NULL,NULL,NULL,NULL),(11,'Organizador 9/Cajones',7000,NULL,'product-1683645603840.jpg','Este organizador de 9 cajones de fibrofácil es ideal para mantener tus objetos personales ordenados y fácilmente accesibles. Cada cajón es lo suficientemente amplio para guardar diversos objetos, como cosméticos, joyas, herramientas y más. Fabricado en madera de fibrofácil de alta calidad, este organizador cuenta con un diseño resistente y duradero, perfecto para el uso diario.Además, su superficie es fácil de pintar, lo que te permite personalizar el organizador con el diseño o color que desees para que combine perfectamente con tu decoración. Su tamaño compacto lo hace perfecto para colocar en cualquier estante, mesa o escritorio, mientras que los cajones extraíbles hacen que sea fácil acceder a tus objetos en cualquier momento.¡Mantén tu espacio organizado con estilo con este práctico y atractivo organizador para pintar!','2023-05-09 15:20:03','2023-05-09 15:20:32',NULL,NULL,NULL,NULL),(12,'Flor',2500,NULL,'product-1683645741470.jpg','La flor de fibrofácil es un elemento decorativo ideal para personalizar con tus colores y diseños favoritos. Fabricada en madera de fibrofácil de alta calidad, presenta un hermoso diseño floral con pétalos y hojas detallados. Esta flor viene lista para ser pintada y decorada con tus técnicas preferidas, como acrílicos, óleos, marcadores o tintas. Con su superficie lisa y suave al tacto, es fácil de trabajar y te permite crear una pieza única y hermosa que puedes utilizar para decorar cualquier espacio de tu hogar. Disfruta de horas de diversión y creatividad con la flor de fibrofácil lista para pintar.','2023-05-09 15:22:21','2023-05-09 15:22:21',NULL,NULL,NULL,1),(13,'Macetero',3200,NULL,'product-1683646056458.jpg',' Este macetero de fibrofácil lista para pintar es la solución perfecta para decorar cualquier pared vacía de tu hogar con un toque de naturaleza. Consta de tres secciones rectangulares que se pueden usar individualmente o juntas para crear una hermosa composición. Cada sección cuenta con una base plana y una pared trasera inclinada para sostener tus plantas favoritas. Además, el material de fibrofácil es resistente y duradero, lo que garantiza que tu macetero tendrá una larga vida útil. Personalízalo con tu estilo propio utilizando cualquier tipo de pintura o acabado y disfruta de la belleza natural de las plantas en cualquier lugar de tu hogar con este macetero de fibrofácil.','2023-05-09 15:27:36','2023-05-09 15:27:36',NULL,NULL,NULL,NULL),(14,'Gato',4800,NULL,'product-1683646233859.jpg','Este encantador gato de fibrofácil está listo para ser personalizado con tu creatividad. Hecho de madera de fibrofácil de alta calidad, este gato presenta un diseño detallado y bien definido que incluye orejas, patas y cola. Su superficie suave es perfecta para ser pintada con cualquier color o diseño que desees, lo que lo convierte en un proyecto ideal para los amantes del arte y la artesanía. Además, su tamaño compacto lo hace perfecto para exhibir en cualquier lugar de tu hogar o para regalar a un ser querido como un regalo personalizado. Convierte este gato de fibrofácil en una obra maestra única y original que puedas disfrutar durante años.','2023-05-09 15:30:33','2023-05-09 15:30:33',NULL,NULL,NULL,NULL),(15,'Organizador Nórdico ',8000,NULL,'product-1683646870677.jpg','El organizador nórdico de fibrofácil de 8 cajones es la solución perfecta para mantener tus objetos personales organizados. Fabricado en madera de fibrofácil de alta calidad, este organizador presenta un diseño moderno y minimalista con ocho cajones individuales. Cada cajón es lo suficientemente grande como para almacenar objetos pequeños como joyas, maquillaje o accesorios de oficina. Los cajones se deslizan suavemente y están equipados con tiradores de metal para un fácil acceso. La superficie exterior del organizador es lisa y se puede personalizar con cualquier diseño o acabado que desees, lo que lo convierte en una excelente opción para decorar cualquier espacio. Además, este organizador es fácil de limpiar y mantener, lo que lo hace perfecto para el uso diario. ¡Organiza tus cosas con estilo con este hermoso organizador de fibrofácil!','2023-05-09 15:41:10','2023-05-09 15:41:10',NULL,NULL,NULL,NULL),(16,'Cajon',7200,NULL,'product-1684161561215.jpg','El cajón multiuso de fibrofácil listo para pintar es una pieza versátil de almacenamiento fabricada en madera contrachapada resistente. Con un diseño clásico y dimensiones estándar, se integra fácilmente en cualquier espacio. Su superficie lista para pintar te permite personalizarlo según tu estilo y decoración. Con una estructura robusta y deslizamiento suave, es ideal para organizar diversos objetos. ¡Añade funcionalidad y estilo a tu hogar u oficina con este cajón multiuso de fibrofácil!','2023-05-15 14:39:21','2023-05-15 14:39:21',NULL,NULL,NULL,NULL),(17,'Hola',200,NULL,'product-1684176626280.jpg','Este organizador de 9 cajones de fibrofácil es ideal para mantener tus objetos personales ordenados y fácilmente accesibles. Cada cajón es lo suficientemente amplio para guardar diversos objetos, como cosméticos, joyas, herramientas y más. Fabricado en madera de fibrofácil de alta calidad, este organizador cuenta con un diseño resistente y duradero, perfecto para el uso diario.Además, su superficie es fácil de pintar, lo que te permite personalizar el organizador con el diseño o color que desees para que combine perfectamente con tu decoración. Su tamaño compacto lo hace perfecto para colocar en cualquier estante, mesa o escritorio, mientras que los cajones extraíbles hacen que sea fácil acceder a tus objetos en cualquier momento.¡Mantén tu espacio organizado con estilo con este práctico y atractivo organizador para pintar!','2023-05-15 18:50:26','2023-05-15 18:50:26','2023-05-15 18:50:45',NULL,NULL,NULL),(18,'hola',500,NULL,'product-1684360395391.jpg','Este organizador de 9 cajones de fibrofácil es ideal para mantener tus objetos personales ordenados y fácilmente accesibles. Cada cajón es lo suficientemente amplio para guardar diversos objetos, como cosméticos, joyas, herramientas y más. Fabricado en madera de fibrofácil de alta calidad, este organizador cuenta con un diseño resistente y duradero, perfecto para el uso diario.Además, su superficie es fácil de pintar, lo que te permite personalizar el organizador con el diseño o color que desees para que combine perfectamente con tu decoración. Su tamaño compacto lo hace perfecto para colocar en cualquier estante, mesa o escritorio, mientras que los cajones extraíbles hacen que sea fácil acceder a tus objetos en cualquier momento.¡Mantén tu espacio organizado con estilo con este práctico y atractivo organizador para pintar!','2023-05-17 21:53:15','2023-05-17 21:53:15','2023-05-17 21:53:35',NULL,NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
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
