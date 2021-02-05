-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2021-02-05 09:26:16.984

-- foreign keys
ALTER TABLE membership
    DROP FOREIGN KEY membership_app_user;

ALTER TABLE membership
    DROP FOREIGN KEY membership_team;

ALTER TABLE task
    DROP FOREIGN KEY task_team;

ALTER TABLE team
    DROP FOREIGN KEY team_app_user;

-- tables
DROP TABLE app_user;

DROP TABLE membership;

DROP TABLE task;

DROP TABLE team;

-- End of file.

