-- MySQL dump 10.13  Distrib 8.0.28, for macos11 (x86_64)
--
-- Host: j9b208.p.ssafy.io    Database: cocopay
-- ------------------------------------------------------
-- Server version	8.0.34

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
  `user_id` int NOT NULL AUTO_INCREMENT,
  `age` int NOT NULL,
  `app_password` varchar(75) DEFAULT NULL,
  `barcode` tinyint DEFAULT NULL,
  `birth` varchar(255) DEFAULT NULL,
  `fingerprint` tinyint DEFAULT NULL,
  `name` varchar(10) NOT NULL,
  `password` varchar(75) NOT NULL,
  `phone_uuid` varchar(255) DEFAULT NULL,
  `recommend_type` tinyint DEFAULT NULL,
  `registed_date` datetime(6) NOT NULL,
  `sign_image` varchar(255) DEFAULT NULL,
  `tel` varchar(13) NOT NULL,
  `uuid` int DEFAULT NULL,
  `withdraw_date` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UK_nbfia2ok6c7at4i0er6uyskkx` (`tel`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (97,0,NULL,0,'970922',0,'김서영','{bcrypt}$2a$10$LCu8Ej8k2kR0gKGPEhoOK.x3DpU9IEuFp88mH/o3lX9Mlg5V4Ar3m',NULL,0,'2023-10-05 07:46:35.737321',NULL,'01073216556',7,NULL),(99,0,NULL,0,'970922',0,'한성현','{bcrypt}$2a$10$Mp3vYG49orYyNvJo34.cp.8nCJta1Hf4IGfA6vapryh7UPtGvfRNG',NULL,0,'2023-10-05 08:07:34.199981',NULL,'01051365349',1,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_card`
--

DROP TABLE IF EXISTS `user_card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_card` (
  `user_card_id` int NOT NULL AUTO_INCREMENT,
  `card_custom_image` varchar(255) DEFAULT NULL,
  `card_default_image` varchar(255) DEFAULT NULL,
  `card_name` varchar(50) DEFAULT NULL,
  `card_nickname` varchar(50) DEFAULT NULL,
  `card_order` int DEFAULT NULL,
  `card_type` smallint DEFAULT NULL,
  `card_uuid` int DEFAULT NULL,
  `coco_type` tinyint DEFAULT NULL,
  `master` bit(1) DEFAULT NULL,
  `registed_date` datetime(6) NOT NULL,
  `serial_number` varchar(19) DEFAULT NULL,
  `valid_date` varchar(255) DEFAULT NULL,
  `visa` bit(1) DEFAULT NULL,
  `withdraw_date` datetime(6) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`user_card_id`),
  KEY `FKmeit1ul0skwyx74bewpxx8gml` (`user_id`),
  CONSTRAINT `FKmeit1ul0skwyx74bewpxx8gml` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=432 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_card`
--

LOCK TABLES `user_card` WRITE;
/*!40000 ALTER TABLE `user_card` DISABLE KEYS */;
INSERT INTO `user_card` VALUES (407,NULL,'https://storage.googleapis.com/cocopay/cocopay.png',NULL,NULL,0,NULL,NULL,1,_binary '\0','2023-10-05 07:46:35.803405',NULL,NULL,_binary '\0',NULL,97),(408,NULL,'https://storage.googleapis.com/cocopay/DA%40%EC%B9%B4%EB%93%9C%EC%9D%98%EC%A0%95%EC%84%9D-%EA%B0%80%EB%A1%9C.png','DA@카드의정석',NULL,2,1,22,0,_binary '','2023-10-05 07:46:42.402814','2801-36**-****-7024','12/25',_binary '',NULL,97),(409,NULL,'https://storage.googleapis.com/cocopay/KB%EA%B5%AD%EB%AF%BC%20My%20WESH%20%EC%B9%B4%EB%93%9C.png','My WE:SH',NULL,3,1,23,0,_binary '\0','2023-10-05 07:46:42.412929','7388-12**-****-1920','12/25',_binary '',NULL,97),(410,NULL,'https://storage.googleapis.com/cocopay/%ED%98%84%EB%8C%80%EC%B9%B4%EB%93%9CZERO%20Edition2(%ED%95%A0%EC%9D%B8%ED%98%95).png','ZERO Edition2(할인형)',NULL,4,1,21,0,_binary '','2023-10-05 07:46:42.420289','9766-89**-****-1437','12/25',_binary '',NULL,97),(411,NULL,'https://storage.googleapis.com/cocopay/%ED%98%84%EB%8C%80%EC%B9%B4%EB%93%9CZ%20family.png','Z family',NULL,5,1,24,0,_binary '\0','2023-10-05 07:46:42.429968','2525-69**-****-8455','12/25',_binary '',NULL,97),(422,NULL,'https://storage.googleapis.com/cocopay/cocopay.png',NULL,NULL,0,NULL,NULL,1,_binary '\0','2023-10-05 08:07:34.249276',NULL,NULL,_binary '\0',NULL,99),(423,NULL,'https://storage.googleapis.com/cocopay/%EC%8B%A0%ED%95%9C%EC%B9%B4%EB%93%9C%20Deep%20Dream%20%EC%B2%B4%ED%81%AC.png','Deep Dream',NULL,2,0,8,0,_binary '','2023-10-05 08:07:43.959827','4390-53**-****-9871','12/25',_binary '',NULL,99),(424,NULL,'https://storage.googleapis.com/cocopay/%EC%8B%A0%ED%95%9C%EC%B9%B4%EB%93%9C%20Mr.png','Mr.Life',NULL,3,1,9,0,_binary '','2023-10-05 08:07:43.975296','9270-49**-****-7451','12/25',_binary '',NULL,99),(425,NULL,'https://storage.googleapis.com/cocopay/DA%40%EC%B9%B4%EB%93%9C%EC%9D%98%EC%A0%95%EC%84%9D-%EA%B0%80%EB%A1%9C.png','DA@카드의정석',NULL,4,1,1,0,_binary '','2023-10-05 08:07:43.989391','3885-16**-****-7133','12/25',_binary '',NULL,99),(426,NULL,'https://storage.googleapis.com/cocopay/%EB%85%B8%EB%A6%AC2%20%EC%B2%B4%ED%81%AC%EC%B9%B4%EB%93%9C(KB%20Pay).png','노리2 (KB Pay)',NULL,5,0,4,0,_binary '','2023-10-05 08:07:43.998119','8266-06**-****-7241','12/25',_binary '',NULL,99),(427,NULL,'https://storage.googleapis.com/cocopay/KB%EA%B5%AD%EB%AF%BC%20My%20WESH%20%EC%B9%B4%EB%93%9C.png','My WE:SH',NULL,6,1,5,0,_binary '\0','2023-10-05 08:07:44.005142','7417-55**-****-0712','12/25',_binary '',NULL,99),(428,NULL,'https://storage.googleapis.com/cocopay/image%20135.png','프렌즈',NULL,7,0,7,0,_binary '','2023-10-05 08:07:44.012867','8040-76**-****-0564','12/25',_binary '',NULL,99),(429,NULL,'https://storage.googleapis.com/cocopay/%EC%82%BC%EC%84%B1%20iD%20ON%20%EC%B9%B4%EB%93%9C.png','iD ON',NULL,8,1,6,0,_binary '','2023-10-05 08:07:44.021604','8557-97**-****-0681','12/25',_binary '',NULL,99),(430,NULL,'https://storage.googleapis.com/cocopay/taptap%20DIGITAL.png','taptap DIGITAL',NULL,9,1,10,0,_binary '','2023-10-05 08:07:44.029585','0748-02**-****-1807','12/25',_binary '',NULL,99),(431,NULL,'https://storage.googleapis.com/cocopay/%ED%98%84%EB%8C%80%EC%B9%B4%EB%93%9CZERO%20Edition2(%ED%95%A0%EC%9D%B8%ED%98%95).png','ZERO Edition2(할인형)',NULL,10,1,3,0,_binary '','2023-10-05 08:07:44.042312','8135-48**-****-6059','12/25',_binary '',NULL,99);
/*!40000 ALTER TABLE `user_card` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-05 22:42:08
