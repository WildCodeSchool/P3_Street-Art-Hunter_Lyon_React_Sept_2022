DROP TABLE IF EXISTS artist
;

CREATE TABLE artist
(
  id INT PRIMARY KEY NOT NULL
  AUTO_INCREMENT,
  artist_name VARCHAR
  (45) NULL DEFAULT NULL
  );

  INSERT INTO artist
    (artist_name)
  VALUESDROP TABLE IF EXISTS artist
;

CREATE TABLE artist
(
  id INT PRIMARY KEY NOT NULL
  AUTO_INCREMENT,
  artist_name VARCHAR
  (45) NULL DEFAULT NULL
  );

  INSERT INTO artist
    (artist_name)
  VALUES
    ('Artiste inconnu'),
    ('Vincent'),
    ('Daryl'),
    ('Younes'),
    ('Gaelle');
  -- -----------------------------------------------------
  -- Table `street_art_hunter`.`badge`
  -- -----------------------------------------------------
  DROP TABLE IF EXISTS badge
  ;

  CREATE TABLE badge
  (
    id INT PRIMARY KEY NOT NULL
    AUTO_INCREMENT,
  badge_name VARCHAR
    (100) NOT NULL,
  badge_desc VARCHAR
    (250) NOT NULL,
  badge_img VARCHAR
    (150) NOT NULL,
  badge_condition VARCHAR
    (200) NOT NULL
  );

    INSERT INTO badge
    VALUES
      (1, "Médaille d'Or", "Tu as atteint le sommet", "https://i.imgur.com/RGyBBHB.png", "Atteindre le rang 1"),
      (2, "Médaille d'Argent", "Tu y es presque!", "https://i.imgur.com/RGyBBHB.png", "Atteindre le rang 2"),
      (3, "Médaille de Bronze", "Tu as atteint le podium", "https://i.imgur.com/RGyBBHB.png", "Atteindre le rang 3"),
      (4, "Centenaire", "Tu as obtenu 100Points", "https://i.imgur.com/RGyBBHB.png", "Obtenir 10Points"),
      (5, "Explorateur", "Tu as découvert un terrain inconnu", "https://i.imgur.com/RGyBBHB.png", "Prendre en photo une oeuvre non repertoriée");

    -- -----------------------------------------------------
    -- Table `street_art_hunter`.`user`
    -- -----------------------------------------------------
    DROP TABLE IF EXISTS user
    ;

    CREATE TABLE user
    (
      id INT PRIMARY KEY NOT NULL
      AUTO_INCREMENT,
  firstname VARCHAR
      (45) NOT NULL,
  lastname VARCHAR
      (45) NOT NULL,
  scorepoint INT NULL DEFAULT '0',
  pseudo VARCHAR
      (45) NOT NULL,
  is_admin TINYINT NULL DEFAULT '0',
  email VARCHAR
      (100) NOT NULL,
  hashedPassword VARCHAR
      (100) NOT NULL,
  avatar VARCHAR
      (150) NULL DEFAULT "https://www.avatarsinpixels.com/Public/images/previews/minipix4.png",
  passwordtoken VARCHAR
      (100) NULL DEFAULT NULL
  );

      INSERT INTO user
        (id, firstname, lastname, scorepoint, pseudo, is_admin, email, hashedPassword)
      VALUES
        (1, 'Vincent', 'Chabosson', 1800, 'Gakchabla', 0, 'chabosson@live.fr', '$argon2id$v=19$m=65536,t=5,p=1$+VCtMnhwkGfgDOodFzoG7g$QaC4BxNuJqXzmRMzem8AVgHHssxGLBqx/Vo4MwMaDI0'),
        (2, 'Daryl', 'Chaise', 3000, 'Darylou', 0, '258@joe.fr', '$argon2id$v=19$m=65536,t=5,p=1$vhAxhurqo/BU2H1lKpe7Gg$T30whlZrvP29WtN9IMTSzzo0eynyty53t/7orN3NyZI'),
        (3, 'Younes', 'Ouasmi', 2500, 'Younz', 0, 'youyou@you.fr', '$argon2id$v=19$m=65536,t=5,p=1$tjIg61g9LJKjuQeK/ABv5A$U/CrlfFbcJUWQ+3OTzLz3zxxvoaZEN8mju82ZFxybDU'),
        (4, 'Gaelle', 'Goyon', 1800, 'gaellz', 0, 'Gaelle@live.fr', '$argon2id$v=19$m=65536,t=5,p=1$+JPlAZnXYXplWEv3p3QPvA$1g+4sW0NdJSwdBm0qfc1EsElwhqtKWQsRP6KeSA9wNg'),
        (5, 'Java', 'Script', 1000, 'JS', 0, 'Js@dev.fr', '$argon2id$v=19$m=65536,t=5,p=1$DkEOWlToH4JRh/kR+DT+Og$WKH0QiY5w9JK0cLMzq/AZW/8lFTcPXZtuKSLDz6kIuU'),
        (6, 'PH', 'P', 2, 'PHP', 0, 'php@dev.fr', '$argon2id$v=19$m=65536,t=5,p=1$aSOTZx466EYnYACZWa0Bug$rFRpJqvOsh4rY2PnIlyeE8/mAddR3Ia9ettG+xarhSg'),
        (7, 'Admin', 'Admin', 0, 'Admin', 1, 'admin@live.fr', '$argon2id$v=19$m=65536,t=5,p=1$RWt6DIUTyWrrc0ylG/Rlsg$hL3U6FjAW+ctL9s6DOYxXV7N1DJjkcxTbVjMcwpGE04'),
        (8, 'test', '01', 0, 'Test01', 0, 'test@live.fr', '$argon2id$v=19$m=65536,t=5,p=1$/IxoAlrwgixDVKnt6WySZw$XQZ3hNaTsEoye3i5kmIRMtbt+ZxmE0OcnWEObU+FgZ0'),
        (9, 'test', '02', 0, 'Test02', 0, 'toast@live.fr', '$argon2id$v=19$m=65536,t=5,p=1$FjSe7NKP24AgOGHuZQviwA$A8+hy8vJP0pmELqXEoKjBjxDxskKISWlMxoTjbhHBs4'),
        (10, 'Burrito', 'Salsa', 0, 'Taco', 0, 'taco@live.fr', '$argon2id$v=19$m=65536,t=5,p=1$D6WDLZAd3QzAqvC+PNqdjQ$JkcbA54pwnwp1RQoIRj6oZjDG2C+FbUkXDQv6DNd+no');

      -- -----------------------------------------------------
      -- Table `street_art_hunter`.`work`
      -- -----------------------------------------------------
      DROP TABLE IF EXISTS work
      ;

      CREATE TABLE work
      (
        id INT PRIMARY KEY NOT NULL
        AUTO_INCREMENT,
  work_name VARCHAR
        (150) NOT NULL,
  longitude DECIMAL
        (20,18) NULL DEFAULT NULL,
  latitude DECIMAL
        (20,18) NULL DEFAULT NULL,
  value_point INT NULL DEFAULT NULL,
  is_validated TINYINT NULL DEFAULT NULL,
  artist_id INT NOT NULL,

  CONSTRAINT fk_work_artist1
  FOREIGN KEY
        (artist_id) REFERENCES artist
        (id),
  added_by INT NOT NULL,

  CONSTRAINT fk_work_user1
  FOREIGN KEY
        (added_by) REFERENCES user
        (id)
  );
        -- -----------------------------------------------------
        -- Table `street_art_hunter`.`picture`
        -- -----------------------------------------------------
        DROP TABLE IF EXISTS picture
        ;

        CREATE TABLE picture
        (
          id INT PRIMARY KEY NOT NULL
          AUTO_INCREMENT,
  picture_url VARCHAR
          (150) NOT NULL,
  creation_date DATETIME NULL DEFAULT NULL,
  is_validated TINYINT NULL DEFAULT NULL,
  work_id INT NOT NULL,
  user_id INT NOT NULL,

  CONSTRAINT fk_picture_user1
  FOREIGN KEY
          (user_id) REFERENCES user
          (id),
  CONSTRAINT fk_picture_work1
  FOREIGN KEY
          (work_id) REFERENCES work
          (id)
  );
          -- -----------------------------------------------------
          -- Table `street_art_hunter`.`shop`
          -- -----------------------------------------------------
          DROP TABLE IF EXISTS shop
          ;

          CREATE TABLE shop
          (
            id INT PRIMARY KEY NOT NULL
            AUTO_INCREMENT,
  shop_type VARCHAR
            (45) NULL DEFAULT NULL,
  longitude DECIMAL
            (20,18) NULL DEFAULT NULL,
  latitude DECIMAL
            (20,18) NULL DEFAULT NULL,
  description VARCHAR
            (45) NULL DEFAULT NULL
  );

            -- -----------------------------------------------------
            -- Table `street_art_hunter`.`user_has_badge`
            -- -----------------------------------------------------
            DROP TABLE IF EXISTS user_has_badge;

            CREATE TABLE user_has_badge
            (
              badge_id INT NOT NULL,
              user_id INT NOT NULL,
              CONSTRAINT fk_user_has_badge_badge1
  FOREIGN KEY (badge_id) REFERENCES badge(id),
              CONSTRAINT fk_user_has_badge_user1
  FOREIGN KEY (user_id) REFERENCES user (id)
            );

            INSERT INTO user_has_badge
            values
              (1, 1),
              (1, 2),
              (3, 3),
              (3, 4),
              (3, 5),
              (2, 1),
              (3, 1),
              (2, 4),
              (1, 4),
              (4, 4);


            -- -----------------------------------------------------
            -- Table `street_art_hunter`.`user_has_fav_picture`
            -- -----------------------------------------------------
            DROP TABLE IF EXISTS user_has_fav_picture;

            CREATE TABLE user_has_fav_picture
            (
              userId INT NOT NULL,
              picture_id INT NOT NULL,
              FOREIGN KEY
(userId) REFERENCES user
(id),
              FOREIGN KEY
(picture_id) REFERENCES picture
(id)
            );


            -- -----------------------------------------------------
            -- Table `street_art_hunter`.`userMessage`
            -- -----------------------------------------------------
            DROP TABLE IF EXISTS userMessage
            ;

            CREATE TABLE userMessage
            (
              id INT PRIMARY KEY NOT NULL
              AUTO_INCREMENT,
  objet VARCHAR
              (150) NOT NULL,
  userMessage VARCHAR
              (500) NOT NULL,
 
  user_id INT NOT NULL,

  CONSTRAINT fk_message_user1
  FOREIGN KEY
              (user_id) REFERENCES user
              (id)

  );
    ('Artiste inconnu'),
    ('Vincent'),
    ('Daryl'),
    ('Younes'),
    ('Gaelle');
  -- -----------------------------------------------------
  -- Table `street_art_hunter`.`badge`
  -- -----------------------------------------------------
  DROP TABLE IF EXISTS badge
  ;

  CREATE TABLE badge
  (
    id INT PRIMARY KEY NOT NULL
    AUTO_INCREMENT,
  badge_name VARCHAR
    (100) NOT NULL,
  badge_desc VARCHAR
    (250) NOT NULL,
  badge_img VARCHAR
    (150) NOT NULL,
  badge_condition VARCHAR
    (200) NOT NULL
  );

    INSERT INTO badge
    VALUES
      (1, "Médaille d'Or", "Tu as atteint le sommet", "https://i.imgur.com/RGyBBHB.png", "Atteindre le rang 1"),
      (2, "Médaille d'Argent", "Tu y es presque!", "https://i.imgur.com/RGyBBHB.png", "Atteindre le rang 2"),
      (3, "Médaille de Bronze", "Tu as atteint le podium", "https://i.imgur.com/RGyBBHB.png", "Atteindre le rang 3"),
      (4, "Centenaire", "Tu as obtenu 100Points", "https://i.imgur.com/RGyBBHB.png", "Obtenir 10Points"),
      (5, "Explorateur", "Tu as découvert un terrain inconnu", "https://i.imgur.com/RGyBBHB.png", "Prendre en photo une oeuvre non repertoriée");

    -- -----------------------------------------------------
    -- Table `street_art_hunter`.`user`
    -- -----------------------------------------------------
    DROP TABLE IF EXISTS user
    ;

    CREATE TABLE user
    (
      id INT PRIMARY KEY NOT NULL
      AUTO_INCREMENT,
  firstname VARCHAR
      (45) NOT NULL,
  lastname VARCHAR
      (45) NOT NULL,
  scorepoint INT NULL DEFAULT '0',
  pseudo VARCHAR
      (45) NOT NULL,
  is_admin TINYINT NULL DEFAULT '0',
  email VARCHAR
      (100) NOT NULL,
  hashedPassword VARCHAR
      (100) NOT NULL,
  avatar VARCHAR
      (150) NULL DEFAULT NULL,
  passwordtoken VARCHAR
      (100) NULL DEFAULT NULL
  );

      INSERT INTO user
        (id, firstname, lastname, scorepoint, pseudo, is_admin, email, hashedPassword)
      VALUES
        (1, 'Vincent', 'Chabosson', 1800, 'Gakchabla', 0, 'chabosson@live.fr', '$argon2id$v=19$m=65536,t=5,p=1$+VCtMnhwkGfgDOodFzoG7g$QaC4BxNuJqXzmRMzem8AVgHHssxGLBqx/Vo4MwMaDI0'),
        (2, 'Daryl', 'Chaise', 3000, 'Darylou', 0, '258@joe.fr', '$argon2id$v=19$m=65536,t=5,p=1$vhAxhurqo/BU2H1lKpe7Gg$T30whlZrvP29WtN9IMTSzzo0eynyty53t/7orN3NyZI'),
        (3, 'Younes', 'Ouasmi', 2500, 'Younz', 0, 'youyou@you.fr', '$argon2id$v=19$m=65536,t=5,p=1$tjIg61g9LJKjuQeK/ABv5A$U/CrlfFbcJUWQ+3OTzLz3zxxvoaZEN8mju82ZFxybDU'),
        (4, 'Gaelle', 'Goyon', 1800, 'gaellz', 0, 'Gaelle@live.fr', '$argon2id$v=19$m=65536,t=5,p=1$+JPlAZnXYXplWEv3p3QPvA$1g+4sW0NdJSwdBm0qfc1EsElwhqtKWQsRP6KeSA9wNg'),
        (5, 'Java', 'Script', 1000, 'JS', 0, 'Js@dev.fr', '$argon2id$v=19$m=65536,t=5,p=1$DkEOWlToH4JRh/kR+DT+Og$WKH0QiY5w9JK0cLMzq/AZW/8lFTcPXZtuKSLDz6kIuU'),
        (6, 'PH', 'P', 2, 'PHP', 0, 'php@dev.fr', '$argon2id$v=19$m=65536,t=5,p=1$aSOTZx466EYnYACZWa0Bug$rFRpJqvOsh4rY2PnIlyeE8/mAddR3Ia9ettG+xarhSg'),
        (7, 'Admin', 'Admin', 0, 'Admin', 1, 'admin@live.fr', '$argon2id$v=19$m=65536,t=5,p=1$RWt6DIUTyWrrc0ylG/Rlsg$hL3U6FjAW+ctL9s6DOYxXV7N1DJjkcxTbVjMcwpGE04'),
        (8, 'test', '01', 0, 'Test01', 0, 'test@live.fr', '$argon2id$v=19$m=65536,t=5,p=1$/IxoAlrwgixDVKnt6WySZw$XQZ3hNaTsEoye3i5kmIRMtbt+ZxmE0OcnWEObU+FgZ0'),
        (9, 'test', '02', 0, 'Test02', 0, 'toast@live.fr', '$argon2id$v=19$m=65536,t=5,p=1$FjSe7NKP24AgOGHuZQviwA$A8+hy8vJP0pmELqXEoKjBjxDxskKISWlMxoTjbhHBs4'),
        (10, 'Burrito', 'Salsa', 0, 'Taco', 0, 'taco@live.fr', '$argon2id$v=19$m=65536,t=5,p=1$D6WDLZAd3QzAqvC+PNqdjQ$JkcbA54pwnwp1RQoIRj6oZjDG2C+FbUkXDQv6DNd+no');

      -- -----------------------------------------------------
      -- Table `street_art_hunter`.`work`
      -- -----------------------------------------------------
      DROP TABLE IF EXISTS work
      ;

      CREATE TABLE work
      (
        id INT PRIMARY KEY NOT NULL
        AUTO_INCREMENT,
  work_name VARCHAR
        (150) NOT NULL,
  longitude DECIMAL
        (20,18) NULL DEFAULT NULL,
  latitude DECIMAL
        (20,18) NULL DEFAULT NULL,
  value_point INT NULL DEFAULT NULL,
  is_validated TINYINT NULL DEFAULT NULL,
  artist_id INT NOT NULL,

  CONSTRAINT fk_work_artist1
  FOREIGN KEY
        (artist_id) REFERENCES artist
        (id),
  added_by INT NOT NULL,

  CONSTRAINT fk_work_user1
  FOREIGN KEY
        (added_by) REFERENCES user
        (id)
  );
        -- -----------------------------------------------------
        -- Table `street_art_hunter`.`picture`
        -- -----------------------------------------------------
        DROP TABLE IF EXISTS picture
        ;

        CREATE TABLE picture
        (
          id INT PRIMARY KEY NOT NULL
          AUTO_INCREMENT,
  picture_url VARCHAR
          (150) NOT NULL,
  creation_date DATETIME NULL DEFAULT NULL,
  is_validated TINYINT NULL DEFAULT NULL,
  work_id INT NOT NULL,
  user_id INT NOT NULL,

  CONSTRAINT fk_picture_user1
  FOREIGN KEY
          (user_id) REFERENCES user
          (id),
  CONSTRAINT fk_picture_work1
  FOREIGN KEY
          (work_id) REFERENCES work
          (id)
  );
          -- -----------------------------------------------------
          -- Table `street_art_hunter`.`shop`
          -- -----------------------------------------------------
          DROP TABLE IF EXISTS shop
          ;

          CREATE TABLE shop
          (
            id INT PRIMARY KEY NOT NULL
            AUTO_INCREMENT,
  shop_type VARCHAR
            (45) NULL DEFAULT NULL,
  longitude DECIMAL
            (20,18) NULL DEFAULT NULL,
  latitude DECIMAL
            (20,18) NULL DEFAULT NULL,
  description VARCHAR
            (45) NULL DEFAULT NULL
  );

            -- -----------------------------------------------------
            -- Table `street_art_hunter`.`user_has_badge`
            -- -----------------------------------------------------
            DROP TABLE IF EXISTS user_has_badge;

            CREATE TABLE user_has_badge
            (
              badge_id INT NOT NULL,
              user_id INT NOT NULL,
              CONSTRAINT fk_user_has_badge_badge1
  FOREIGN KEY (badge_id) REFERENCES badge(id),
              CONSTRAINT fk_user_has_badge_user1
  FOREIGN KEY (user_id) REFERENCES user (id)
            );

            INSERT INTO user_has_badge
            values
              (1, 1),
              (1, 2),
              (3, 3),
              (3, 4),
              (3, 5),
              (2, 1),
              (3, 1),
              (2, 4),
              (1, 4),
              (4, 4);


            -- -----------------------------------------------------
            -- Table `street_art_hunter`.`user_has_fav_picture`
            -- -----------------------------------------------------
            DROP TABLE IF EXISTS user_has_fav_picture;

            CREATE TABLE user_has_fav_picture
            (
              user_id INT NOT NULL,
              picture_id INT NOT NULL,
              FOREIGN KEY
(user_id) REFERENCES user
(id),
              FOREIGN KEY
(picture_id) REFERENCES picture
(id)
            );


            -- -----------------------------------------------------
            -- Table `street_art_hunter`.`userMessage`
            -- -----------------------------------------------------
            DROP TABLE IF EXISTS userMessage
            ;

            CREATE TABLE userMessage
            (
              id INT PRIMARY KEY NOT NULL
              AUTO_INCREMENT,
  objet VARCHAR
              (150) NOT NULL,
  userMessage VARCHAR
              (500) NOT NULL,
 
  user_id INT NOT NULL,


  CONSTRAINT fk_message_user1
  FOREIGN KEY
              (user_id) REFERENCES user
              (id)

  );
