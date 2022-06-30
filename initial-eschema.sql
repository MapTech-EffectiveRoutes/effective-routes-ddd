CREATE TABLE `notificaciones`.`user` (
  `id_user` INT NOT NULL,
  `name_user` VARCHAR(100) NOT NULL,
  `dni_user` CHAR(8) NOT NULL,
  `phone_user` CHAR(9) NOT NULL,
  `address_user` TEXT NOT NULL,
  PRIMARY KEY (`id_user`));

CREATE TABLE `notificaciones`.`status_message` (
  `id_status_message` INT NOT NULL,
  `name_status_message` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`id_status_message`));

CREATE TABLE `notificaciones`.`status_order` (
  `id_status` INT NOT NULL,
  `name_status` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_status`));

CREATE TABLE `notificaciones`.`brand` (
  `id_brand` INT NOT NULL,
  `name_brand` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_brand`));

CREATE TABLE `notificaciones`.`seller` (
  `id_seller` INT NOT NULL,
  `name_seller` VARCHAR(45) NULL,
  `dni_seller` CHAR(8) NULL,
  `phone_seller` CHAR(9) NULL,
  `id_brand` INT NULL,
  PRIMARY KEY (`id_seller`),
  INDEX `id_brand_idx` (`id_brand` ASC) VISIBLE,
  CONSTRAINT `id_brand`
    FOREIGN KEY (`id_brand`)
    REFERENCES `notificaciones`.`brand` (`id_brand`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `notificaciones`.`notifications` (
  `id_notifications` INT NOT NULL,
  `user_receptor` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_notifications`));

CREATE TABLE `notificaciones`.`message_order_status` (
  `id_message_order_status` INT NOT NULL,
  `id_status` INT NULL,
  PRIMARY KEY (`id_message_order_status`),
  INDEX `id_status_idx` (`id_status` ASC) VISIBLE,
  CONSTRAINT `id_status`
    FOREIGN KEY (`id_status`)
    REFERENCES `notificaciones`.`status_order` (`id_status`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `notificaciones`.`notification_order` (
  `id_notification_order` INT NOT NULL,
  `id_message_order_status` INT NULL,
  `id_notification` INT NULL,
  PRIMARY KEY (`id_notification_order`),
  INDEX `id_message_order_status_idx` (`id_message_order_status` ASC) VISIBLE,
  INDEX `id_notification_idx` (`id_notification` ASC) VISIBLE,
  CONSTRAINT `id_message_order_status`
    FOREIGN KEY (`id_message_order_status`)
    REFERENCES `notificaciones`.`message_order_status` (`id_message_order_status`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_notification`
    FOREIGN KEY (`id_notification`)
    REFERENCES `notificaciones`.`notifications` (`id_notifications`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `notificaciones`.`message_u_s` (
  `id_message_u_s` INT NOT NULL,
  `id_user` INT NULL,
  `id_seller` INT NULL,
  `message` MEDIUMTEXT NULL,
  `status_message_id_status` INT NULL,
  PRIMARY KEY (`id_message_u_s`),
  INDEX `id_user_idx` (`id_user` ASC) VISIBLE,
  INDEX `id_seller_idx` (`id_seller` ASC) VISIBLE,
  INDEX `status_message_id_status_idx` (`status_message_id_status` ASC) VISIBLE,
  CONSTRAINT `id_user`
    FOREIGN KEY (`id_user`)
    REFERENCES `notificaciones`.`user` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_seller`
    FOREIGN KEY (`id_seller`)
    REFERENCES `notificaciones`.`seller` (`id_seller`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `status_message_id_status`
    FOREIGN KEY (`status_message_id_status`)
    REFERENCES `notificaciones`.`status_message` (`id_status_message`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `notificaciones`.`notification_u_s` (
  `id_notification_u_s` INT NOT NULL,
  `id_message_u_s` INT NOT NULL,
  `id_notifications` INT NOT NULL,
  PRIMARY KEY (`id_notification_u_s`),
  INDEX `id_message_u_s_idx` (`id_message_u_s` ASC) VISIBLE,
  INDEX `id_notification_idx` (`id_notifications` ASC) VISIBLE,
  CONSTRAINT `id_message_u_s`
    FOREIGN KEY (`id_message_u_s`)
    REFERENCES `notificaciones`.`message_u_s` (`id_message_u_s`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_notifications`
    FOREIGN KEY (`id_notifications`)
    REFERENCES `notificaciones`.`notifications` (`id_notifications`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);