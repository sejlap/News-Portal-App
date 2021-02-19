create table dbo.Admins(
AdminsId int identity(1,1),
AdminsUsername varchar (500),
AdminsPassword varchar(1000)
)

select * from dbo.Admins;


insert into dbo.Admins values  ('admin1', 'pass1')
insert into dbo.Admins values  ('admin2', 'pass2')
insert into dbo.Admins values  ('admin3', 'pass3')
