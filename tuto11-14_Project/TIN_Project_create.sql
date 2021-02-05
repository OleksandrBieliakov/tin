-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2021-02-05 09:26:16.984

-- tables
-- Table: app_user
CREATE TABLE app_user (
    id int NOT NULL,
    u_name varchar(20) NOT NULL,
    email varchar(256) NOT NULL UNIQUE,
    hashed_password varchar(256) NOT NULL,
    CONSTRAINT app_user_pk PRIMARY KEY (id)
);

-- Table: membership
CREATE TABLE membership (
    app_user_id int NOT NULL,
    team_id int NOT NULL,
    accepted bool NOT NULL,
    CONSTRAINT membership_pk PRIMARY KEY (app_user_id,team_id)
);

-- Table: task
CREATE TABLE task (
    id int NOT NULL,
    team_id int NOT NULL,
    description varchar(256) NOT NULL,
    status varchar(11) NOT NULL,
    CONSTRAINT task_pk PRIMARY KEY (id)
);

-- Table: team
CREATE TABLE team (
    id int NOT NULL,
    title varchar(50) NOT NULL,
    owner_id int NOT NULL,
    CONSTRAINT team_pk PRIMARY KEY (id)
);

-- foreign keys
-- Reference: membership_app_user (table: membership)
ALTER TABLE membership ADD CONSTRAINT membership_app_user FOREIGN KEY membership_app_user (app_user_id)
    REFERENCES app_user (id);

-- Reference: membership_team (table: membership)
ALTER TABLE membership ADD CONSTRAINT membership_team FOREIGN KEY membership_team (team_id)
    REFERENCES team (id);

-- Reference: task_team (table: task)
ALTER TABLE task ADD CONSTRAINT task_team FOREIGN KEY task_team (team_id)
    REFERENCES team (id);

-- Reference: team_app_user (table: team)
ALTER TABLE team ADD CONSTRAINT team_app_user FOREIGN KEY team_app_user (owner_id)
    REFERENCES app_user (id);

-- End of file.

