
using Microsoft.AspNet.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication1.Controllers
{
    public class PartialController : Controller
    {
        public IActionResult Message() => PartialView();

        public IActionResult Numbers() => PartialView();

		public IActionResult Hero() => PartialView();
		public IActionResult DashBoard() => PartialView();
		public IActionResult Herodetailswithparam() => PartialView();

	}
}
