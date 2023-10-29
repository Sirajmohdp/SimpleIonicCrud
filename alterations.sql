Create database MyTask
-------------------------------------------

 Create table Users(
 Id int primary key identity (1,1),
 Name varchar(max),
 Systime datetime default getdate(),
 Status int default 0,
 Email varchar(max),
 Mobile int,
 PassWord varchar(50),
 UserName varchar(max)
 )

 --------------------------------------------------
 create proc [dbo].[spInsertUsers]
 @Id int ,
 @Name varchar(max),
 @Email varchar(max),
 @Mobile int,
 @PassWord varchar(50),
 @UserName varchar(max)
 as
 begin try
 if @Id>0
 begin
 update users set Name=@Name,UserName=@UserName,Email=@Email,Mobile=@Mobile,PassWord=@PassWord where Id=@Id
 
				 SELECT @Id AS Id,CAST(@@ERROR as int) as Error
				 end
				 else
				 begin
				 insert into Users (Name,Email,Mobile,PassWord,UserName) values(@Name,@Email,@Mobile,@PassWord,@UserName)
				 
			select CAST(scope_identity() as int) as Id,CAST(@@ERROR as int) as Error
			end
						


 end try 
 begin catch
 
        SELECT 0 AS Id, cast(@@Error as int) AS Error;
 end catch


 -----------------------------------------------------------------------------------
  create proc [dbo].[spdeleteUsers]
 @Id int ,
@Status int
 as
 begin try
 update Users set Status=@Status where Id=@Id
 
	SELECT @Id AS Id,CAST(@@ERROR as int) as Error
 end try
 begin catch
 
				 SELECT 0 AS Id,CAST(@@ERROR as int) as Error
 end catch

 ----------------------------------------------------------------------
   create proc [dbo].[GetAllUsers]

 as
 begin 
 select Name,Id,UserName,PassWord,Mobile,Email from Users  where status !=1
 end
 -------------------------------------------------------------

 select * from Users
