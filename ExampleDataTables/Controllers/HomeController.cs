using ExampleDataTables.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ExampleDataTables.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult SaveUsers(List<UserModel> userList)
        {
            foreach(UserModel user in userList)
            {
                
            }

            return Json(new { Success = true, Data = userList });
        }
    }
}