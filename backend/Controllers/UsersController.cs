using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.entity.user;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using entity.order;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserContext _context;

        public UsersController(UserContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // POST: api/Users/5
        [HttpPost("/register")]
        public async Task<ActionResult<User>> CreateUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.Id}, user);
        }

        // POST: api/Users/5
        [HttpPost("/login")]
        public async Task<ActionResult<User>> LogUser(User user) // Add Logged ENTITY
        {
            if (UserExists(user.Id) == false)
            {
                return NotFound();
            }
            
            _context.Logged.Add(new LogIn(user.Id, user.Name, user.Rights));
            await _context.SaveChangesAsync();
            
            return CreatedAtAction("LogUser", new { id = user.Id});
        }

        // Delete: api/Users/5
        [HttpDelete("/logout")]
        public async Task<ActionResult<User>> LogOutUser(User user) // Add Logged ENTITY
        {
            if (LoggedUserExists(user.Id) == false)
            {
                return NotFound();

            }
            var UserToLogOut = _context.Logged.Single(x => x.User_Id == user.Id);
            _context.Logged.Remove(UserToLogOut);
                
            await _context.SaveChangesAsync();

            return NoContent();
        }
    // GET: api/Users/5
    [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(Guid id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(Guid id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.Id }, user);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(Guid id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(Guid id)
        {
            return _context.Users.Any(e => e.Id == id);
        }

        private bool LoggedUserExists(Guid id)
        {
            return _context.Logged.Any(e => e.User_Id == id);
        }

    }
}
