using backend.entity.user;

namespace entity.order
{
    public class Order
    {
        public int id { get; set; }
        public string Name { get; set; }
        public User Client { get; set; }
        public double Tip { get; set; }
        public double Price { get; set; }
        public Product Product { get; set; }
        public User Worker { get; set; }
        public Table Table { get; set; }
        public Status status { get; set; }
        public enum Status 
        { 
            Recevied = 1,
            InProgress = 2,
            Done = 3
        }
        
    }
}