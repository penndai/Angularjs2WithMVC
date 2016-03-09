using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication1.Controllers
{
	[Serializable]
	public class Hero
	{
		public int id { get; set; }
		public string name { get; set; }
	}

    [Route("api/[controller]")]
    public class HeroController : Controller
    {
		private static List<Hero> _heroes;
		private static List<Hero> Heroes
		{
			get
			{
				if (_heroes == null || _heroes.Count == 0)
				{
					_heroes = new List<Hero>();
					_heroes.Add(new Hero() { id = 11, name = "Mr. Nice" });
					_heroes.Add(new Hero() { id = 12, name = "Narco" });
					_heroes.Add(new Hero() { id = 13, name = "Bombasto" });
					_heroes.Add(new Hero() { id = 14, name = "Celeritas" });
				}

				return _heroes;
			}
		}

        // GET: api/values
        [HttpGet]
        public async Task<JsonResult> Get()
        {	
			var rand = new Random();
			//await Task.Delay(rand.Next(0, 50));

			return new JsonResult(new { heros = Heroes });
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
			return new JsonResult(new { hero = Heroes.Find(x => x.id == id) });
        }

        // POST api/values
        [HttpPost]
        public JsonResult Post([FromBody]Hero newhero)
        {
			//Hero newhero = new Hero();
			//newhero.name = value;
			newhero.id = Heroes.Max(x => x.id) + 1;

			Heroes.Add(newhero);
			return new JsonResult(new { hero=newhero});
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
