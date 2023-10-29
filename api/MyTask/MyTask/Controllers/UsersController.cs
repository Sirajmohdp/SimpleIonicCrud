using MyTask.Class;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MyTask.Controllers
{
    public class UsersController : ApiController
    {

        MyTaskEntities Mytask = new MyTaskEntities();


        [HttpPost]
        public IEnumerable<spInsertUsers_Result> spInsertUsers(Users us)
        {

            try
            {
                return Mytask.spInsertUsers(us.Id, us.Name, us.Email,us.Mobile,us.Password,us.UserName).AsEnumerable();

            }
            catch (Exception ex)
            {
                string val = ex.Message;
                return null;
            }
        }

        [HttpGet]
        public IEnumerable<spdeleteUsers_Result> spdeleteUsers(int Id, int Status)
        {

            try
            {
                return Mytask.spdeleteUsers(Id, Status).AsEnumerable();
            }
            catch (Exception ex)
            {
                string val = ex.Message;
                return null;
            }
        }

        [HttpGet]
        public IEnumerable<GetAllUsers_Result> GetAllUsers()
        {

            try
            {
                return Mytask.GetAllUsers().AsEnumerable();
            }
            catch (Exception ex)
            {
                string val = ex.Message;
                return null;
            }
        }
    }
}
