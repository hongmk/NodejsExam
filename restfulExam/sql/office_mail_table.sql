use restful;

create table officemail(
	id integer primary key auto_increment,
    mail varchar(100),
    phonenumber varchar(20),
	signup_yn integer
);

drop table officemail;

insert into officemail(mail, phonenumber) values("testmail6@shinhan.com", "01066663333");

ALTER TABLE offciemail MODIFY mail officemail;

select * from officemail