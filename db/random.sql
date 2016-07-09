/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 100109
Source Host           : localhost:3306
Source Database       : random

Target Server Type    : MYSQL
Target Server Version : 100109
File Encoding         : 65001

Date: 2016-07-09 17:54:47
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for traffic
-- ----------------------------
DROP TABLE IF EXISTS `traffic`;
CREATE TABLE `traffic` (
  `tb_id` int(11) NOT NULL AUTO_INCREMENT,
  `tb_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `tb_cross_flow` int(11) DEFAULT NULL,
  `tb_cross_density` float DEFAULT NULL,
  `tb_man_flow` float DEFAULT NULL,
  `tb_waiting_time` float DEFAULT NULL,
  `tb_car_speed` float DEFAULT NULL,
  PRIMARY KEY (`tb_id`)
) ENGINE=InnoDB AUTO_INCREMENT=119 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of traffic
-- ----------------------------
INSERT INTO `traffic` VALUES ('1', '2004-05-06 05:06:03', '5', '27.26', '26.99', '36.45', '55.69');
INSERT INTO `traffic` VALUES ('2', '2004-05-06 05:06:03', '5', '27.26', '26.99', '36.45', '55.69');
INSERT INTO `traffic` VALUES ('3', '2004-05-06 05:06:03', '5', '27.26', '26.99', '36.45', '55.69');
INSERT INTO `traffic` VALUES ('4', '2004-05-06 05:06:03', '5', '27.26', '26.99', '36.45', '55.69');
INSERT INTO `traffic` VALUES ('5', '2004-05-06 05:06:03', '5', '27.26', '26.99', '36.45', '55.69');
INSERT INTO `traffic` VALUES ('6', '2004-05-06 05:06:03', '5', '27.26', '26.99', '36.45', '55.69');
INSERT INTO `traffic` VALUES ('7', '2004-05-06 05:06:03', '5', '27.26', '26.99', '36.45', '55.69');
INSERT INTO `traffic` VALUES ('8', '2004-05-06 05:06:03', '5', '27.26', '26.99', '36.45', '55.69');
INSERT INTO `traffic` VALUES ('9', '2004-05-06 05:06:03', '5', '27.26', '26.99', '36.45', '55.69');
INSERT INTO `traffic` VALUES ('10', '2016-07-09 17:02:00', '5', '27.26', '26.99', '36.45', '55.69');
INSERT INTO `traffic` VALUES ('11', '2016-07-09 17:02:02', '5', '27.26', '26.99', '36.45', '55.69');
INSERT INTO `traffic` VALUES ('12', '2016-07-09 17:02:04', '5', '27.26', '26.99', '36.45', '55.69');
INSERT INTO `traffic` VALUES ('13', '2016-07-09 17:02:06', '5', '27.26', '26.99', '36.45', '55.69');
INSERT INTO `traffic` VALUES ('14', '2016-07-09 17:02:08', '5', '27.26', '26.99', '36.45', '55.69');
INSERT INTO `traffic` VALUES ('15', '2016-07-09 17:02:10', '5', '27.26', '26.99', '36.45', '55.69');
INSERT INTO `traffic` VALUES ('16', '2016-07-09 17:04:02', '5', '27.26', '26.99', '36.45', '55.69');
INSERT INTO `traffic` VALUES ('17', '2016-07-09 17:04:04', '5', '27.26', '26.99', '36.45', '55.69');
INSERT INTO `traffic` VALUES ('18', '2016-07-09 17:04:06', '5', '27.26', '26.99', '36.45', '55.69');
INSERT INTO `traffic` VALUES ('19', '2016-07-09 17:04:08', '5', '27.26', '26.99', '36.45', '55.69');
INSERT INTO `traffic` VALUES ('20', '2016-07-09 17:04:10', '5', '27.26', '26.99', '36.45', '55.69');
INSERT INTO `traffic` VALUES ('21', '2016-07-09 17:04:12', '5', '27.26', '26.99', '36.45', '55.69');
INSERT INTO `traffic` VALUES ('22', '2016-07-09 17:04:14', '5', '27.26', '26.99', '36.45', '55.69');
INSERT INTO `traffic` VALUES ('23', '2016-07-09 17:27:21', '26', '0.26', '0.99', '0.452719', '0.69');
INSERT INTO `traffic` VALUES ('24', '2016-07-09 17:27:23', '51', '0.26', '0.99', '0.344594', '0.69');
INSERT INTO `traffic` VALUES ('25', '2016-07-09 17:27:25', '95', '0.26', '0.99', '0.151815', '0.69');
INSERT INTO `traffic` VALUES ('26', '2016-07-09 17:27:27', '25', '0.26', '0.99', '0.359859', '0.69');
INSERT INTO `traffic` VALUES ('27', '2016-07-09 17:27:29', '29', '0.26', '0.99', '0.43066', '0.69');
INSERT INTO `traffic` VALUES ('28', '2016-07-09 17:27:31', '78', '0.26', '0.99', '0.184805', '0.69');
INSERT INTO `traffic` VALUES ('29', '2016-07-09 17:27:33', '19', '0.26', '0.99', '0.272686', '0.69');
INSERT INTO `traffic` VALUES ('30', '2016-07-09 17:28:46', '9', '0.26', '0.99', '3', '0.69');
INSERT INTO `traffic` VALUES ('31', '2016-07-09 17:28:48', '80', '0.26', '0.99', '4', '0.69');
INSERT INTO `traffic` VALUES ('32', '2016-07-09 17:28:50', '71', '0.26', '0.99', '0', '0.69');
INSERT INTO `traffic` VALUES ('33', '2016-07-09 17:28:52', '59', '0.26', '0.99', '6', '0.69');
INSERT INTO `traffic` VALUES ('34', '2016-07-09 17:28:54', '46', '0.26', '0.99', '6', '0.69');
INSERT INTO `traffic` VALUES ('35', '2016-07-09 17:28:56', '90', '0.26', '0.99', '3', '0.69');
INSERT INTO `traffic` VALUES ('36', '2016-07-09 17:28:58', '15', '0.26', '0.99', '7', '0.69');
INSERT INTO `traffic` VALUES ('37', '2016-07-09 17:29:00', '34', '0.26', '0.99', '4', '0.69');
INSERT INTO `traffic` VALUES ('38', '2016-07-09 17:29:02', '90', '0.26', '0.99', '3', '0.69');
INSERT INTO `traffic` VALUES ('39', '2016-07-09 17:29:04', '29', '0.26', '0.99', '4', '0.69');
INSERT INTO `traffic` VALUES ('40', '2016-07-09 17:29:06', '96', '0.26', '0.99', '5', '0.69');
INSERT INTO `traffic` VALUES ('41', '2016-07-09 17:29:08', '41', '0.26', '0.99', '3', '0.69');
INSERT INTO `traffic` VALUES ('42', '2016-07-09 17:29:10', '64', '0.26', '0.99', '0', '0.69');
INSERT INTO `traffic` VALUES ('43', '2016-07-09 17:29:12', '95', '0.26', '0.99', '3', '0.69');
INSERT INTO `traffic` VALUES ('44', '2016-07-09 17:29:14', '67', '0.26', '0.99', '1', '0.69');
INSERT INTO `traffic` VALUES ('45', '2016-07-09 17:29:16', '83', '0.26', '0.99', '6', '0.69');
INSERT INTO `traffic` VALUES ('46', '2016-07-09 17:30:42', '0', '13.94', '0.99', '3', '0.69');
INSERT INTO `traffic` VALUES ('47', '2016-07-09 17:30:44', '0', '69.93', '0.99', '4', '0.69');
INSERT INTO `traffic` VALUES ('48', '2016-07-09 17:30:47', '0', '83.19', '0.99', '9', '0.69');
INSERT INTO `traffic` VALUES ('49', '2016-07-09 17:30:49', '0', '81.12', '0.99', '4', '0.69');
INSERT INTO `traffic` VALUES ('50', '2016-07-09 17:30:51', '0', '38.21', '0.99', '7', '0.69');
INSERT INTO `traffic` VALUES ('51', '2016-07-09 17:30:53', '0', '18.16', '0.99', '1', '0.69');
INSERT INTO `traffic` VALUES ('52', '2016-07-09 17:30:55', '0', '78.59', '0.99', '1', '0.69');
INSERT INTO `traffic` VALUES ('53', '2016-07-09 17:30:57', '0', '52.58', '0.99', '10', '0.69');
INSERT INTO `traffic` VALUES ('54', '2016-07-09 17:33:58', '0', '55.97', '0.99', '1', '0.69');
INSERT INTO `traffic` VALUES ('55', '2016-07-09 17:33:59', '0', '77.88', '0.99', '7', '0.69');
INSERT INTO `traffic` VALUES ('56', '2016-07-09 17:34:00', '0', '52.55', '0.99', '4', '0.69');
INSERT INTO `traffic` VALUES ('57', '2016-07-09 17:34:01', '0', '59.54', '0.99', '7', '0.69');
INSERT INTO `traffic` VALUES ('58', '2016-07-09 17:34:02', '0', '70.38', '0.99', '8', '0.69');
INSERT INTO `traffic` VALUES ('59', '2016-07-09 17:34:03', '0', '23.94', '0.99', '2', '0.69');
INSERT INTO `traffic` VALUES ('60', '2016-07-09 17:34:04', '0', '0.32', '0.99', '4', '0.69');
INSERT INTO `traffic` VALUES ('61', '2016-07-09 17:34:05', '0', '49.82', '0.99', '2', '0.69');
INSERT INTO `traffic` VALUES ('62', '2016-07-09 17:34:06', '0', '43.75', '0.99', '5', '0.69');
INSERT INTO `traffic` VALUES ('63', '2016-07-09 17:34:07', '0', '11.71', '0.99', '9', '0.69');
INSERT INTO `traffic` VALUES ('64', '2016-07-09 17:34:08', '0', '26.07', '0.99', '6', '0.69');
INSERT INTO `traffic` VALUES ('65', '2016-07-09 17:34:09', '0', '34.25', '0.99', '10', '0.69');
INSERT INTO `traffic` VALUES ('66', '2016-07-09 17:34:10', '0', '2', '0.99', '8', '0.69');
INSERT INTO `traffic` VALUES ('67', '2016-07-09 17:34:11', '0', '51.66', '0.99', '3', '0.69');
INSERT INTO `traffic` VALUES ('68', '2016-07-09 17:34:12', '0', '91.89', '0.99', '6', '0.69');
INSERT INTO `traffic` VALUES ('69', '2016-07-09 17:34:13', '0', '31.94', '0.99', '7', '0.69');
INSERT INTO `traffic` VALUES ('70', '2016-07-09 17:34:14', '0', '16.27', '0.99', '8', '0.69');
INSERT INTO `traffic` VALUES ('71', '2016-07-09 17:34:15', '0', '86.63', '0.99', '8', '0.69');
INSERT INTO `traffic` VALUES ('72', '2016-07-09 17:34:16', '0', '79.42', '0.99', '9', '0.69');
INSERT INTO `traffic` VALUES ('73', '2016-07-09 17:34:17', '0', '98.64', '0.99', '3', '0.69');
INSERT INTO `traffic` VALUES ('74', '2016-07-09 17:34:18', '0', '45.16', '0.99', '9', '0.69');
INSERT INTO `traffic` VALUES ('75', '2016-07-09 17:34:19', '0', '3.73', '0.99', '8', '0.69');
INSERT INTO `traffic` VALUES ('76', '2016-07-09 17:34:20', '0', '65.72', '0.99', '7', '0.69');
INSERT INTO `traffic` VALUES ('77', '2016-07-09 17:34:21', '0', '81.99', '0.99', '5', '0.69');
INSERT INTO `traffic` VALUES ('78', '2016-07-09 17:34:22', '0', '11.57', '0.99', '1', '0.69');
INSERT INTO `traffic` VALUES ('79', '2016-07-09 17:34:23', '0', '55.44', '0.99', '1', '0.69');
INSERT INTO `traffic` VALUES ('80', '2016-07-09 17:34:24', '0', '40.16', '0.99', '1', '0.69');
INSERT INTO `traffic` VALUES ('81', '2016-07-09 17:34:25', '0', '4.74', '0.99', '7', '0.69');
INSERT INTO `traffic` VALUES ('82', '2016-07-09 17:34:26', '0', '49.74', '0.99', '7', '0.69');
INSERT INTO `traffic` VALUES ('83', '2016-07-09 17:35:27', '0', '4.97', '0.99', '2', '0.69');
INSERT INTO `traffic` VALUES ('84', '2016-07-09 17:35:28', '0', '26.47', '0.99', '3', '0.69');
INSERT INTO `traffic` VALUES ('85', '2016-07-09 17:35:29', '0', '22.53', '0.99', '2', '0.69');
INSERT INTO `traffic` VALUES ('86', '2016-07-09 17:35:30', '0', '79.98', '0.99', '10', '0.69');
INSERT INTO `traffic` VALUES ('87', '2016-07-09 17:35:31', '0', '11.79', '0.99', '6', '0.69');
INSERT INTO `traffic` VALUES ('88', '2016-07-09 17:35:32', '0', '49.66', '0.99', '10', '0.69');
INSERT INTO `traffic` VALUES ('89', '2016-07-09 17:35:33', '0', '66.06', '0.99', '0', '0.69');
INSERT INTO `traffic` VALUES ('90', '2016-07-09 17:35:34', '0', '45.08', '0.99', '0', '0.69');
INSERT INTO `traffic` VALUES ('91', '2016-07-09 17:35:35', '0', '61.72', '0.99', '9', '0.69');
INSERT INTO `traffic` VALUES ('92', '2016-07-09 17:35:36', '0', '34.41', '0.99', '9', '0.69');
INSERT INTO `traffic` VALUES ('93', '2016-07-09 17:35:37', '0', '35.1', '0.99', '6', '0.69');
INSERT INTO `traffic` VALUES ('94', '2016-07-09 17:35:38', '0', '82.48', '0.99', '0', '0.69');
INSERT INTO `traffic` VALUES ('95', '2016-07-09 17:35:39', '0', '24.08', '0.99', '2', '0.69');
INSERT INTO `traffic` VALUES ('96', '2016-07-09 17:35:40', '0', '27.54', '0.99', '3', '0.69');
INSERT INTO `traffic` VALUES ('97', '2016-07-09 17:36:08', '0', '94.37', '0.99', '7', '0.69');
INSERT INTO `traffic` VALUES ('98', '2016-07-09 17:36:09', '0', '64.36', '0.99', '8', '0.69');
INSERT INTO `traffic` VALUES ('99', '2016-07-09 17:36:10', '0', '7.89', '0.99', '4', '0.69');
INSERT INTO `traffic` VALUES ('100', '2016-07-09 17:36:11', '0', '86.53', '0.99', '6', '0.69');
INSERT INTO `traffic` VALUES ('101', '2016-07-09 17:36:12', '0', '54.27', '0.99', '9', '0.69');
INSERT INTO `traffic` VALUES ('102', '2016-07-09 17:36:13', '0', '44.89', '0.99', '2', '0.69');
INSERT INTO `traffic` VALUES ('103', '2016-07-09 17:36:14', '0', '89.22', '0.99', '1', '0.69');
INSERT INTO `traffic` VALUES ('104', '2016-07-09 17:36:15', '0', '40.18', '0.99', '4', '0.69');
INSERT INTO `traffic` VALUES ('105', '2016-07-09 17:36:16', '0', '58.31', '0.99', '4', '0.69');
INSERT INTO `traffic` VALUES ('106', '2016-07-09 17:36:17', '0', '0.86', '0.99', '10', '0.69');
INSERT INTO `traffic` VALUES ('107', '2016-07-09 17:36:18', '0', '84.78', '0.99', '7', '0.69');
INSERT INTO `traffic` VALUES ('108', '2016-07-09 17:36:19', '0', '40.86', '0.99', '4', '0.69');
INSERT INTO `traffic` VALUES ('109', '2016-07-09 17:36:20', '0', '45.99', '0.99', '7', '0.69');
INSERT INTO `traffic` VALUES ('110', '2016-07-09 17:36:21', '0', '46.55', '0.99', '4', '0.69');
INSERT INTO `traffic` VALUES ('111', '2016-07-09 17:36:22', '0', '47.25', '0.99', '1', '0.69');
INSERT INTO `traffic` VALUES ('112', '2016-07-09 17:36:23', '0', '34.97', '0.99', '4', '0.69');
INSERT INTO `traffic` VALUES ('113', '2016-07-09 17:36:24', '0', '17.63', '0.99', '5', '0.69');
INSERT INTO `traffic` VALUES ('114', '2016-07-09 17:36:25', '0', '52.31', '0.99', '1', '0.69');
INSERT INTO `traffic` VALUES ('115', '2016-07-09 17:36:26', '0', '85.68', '0.99', '1', '0.69');
INSERT INTO `traffic` VALUES ('116', '2016-07-09 17:36:27', '0', '69.03', '0.99', '8', '0.69');
INSERT INTO `traffic` VALUES ('117', '2016-07-09 17:36:28', '0', '88.95', '0.99', '8', '0.69');
INSERT INTO `traffic` VALUES ('118', '2016-07-09 17:36:29', '0', '71.25', '0.99', '8', '0.69');
