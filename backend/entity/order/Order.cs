namespace entity.order
{
    public class Order
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public Logged Client { get; set; }
        public double Tip { get; set; }
        public double Price { get; set; }
        public Product Product { get; set; }
        public Logged Worker { get; set; }
        public Table Table { get; set; }
        public enum status { }
    }
}