create table USERS
(
    USERID NUMBER,
    EMAIL VARCHAR2(100),
    PASSWORD VARCHAR2(100),
    FULLNAME VARCHAR2(100),
    ACTIVE NUMBER
)
/

create table ROLES
(
    ROLEID NUMBER,
    ROLENAME VARCHAR2(100)
)
/

create unique index ROLES_ROLEID_UINDEX
    on ROLES (ROLEID)
/

create table PERMISSIONS
(
    PERMISSIONID NUMBER,
    PERMISSIONNAME VARCHAR2(100),
    PERMISSIONDESCRIPTION VARCHAR2(500)
)
/

create table USERROLE
(
    USERID NUMBER,
    ROLEID NUMBER
)
/

create table ROLEPERMISSIONS
(
    ROLEID NUMBER,
    PERMISSIONID NUMBER
)
/

