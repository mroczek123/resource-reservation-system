namespace entity.order
{
    public class Order
    {
        public int ID { get; set; }
        public string name { get; set; }
        public Logged client { get; set; }
        public double tip { get; set; }
        public double price { get; set; }
        public Product product { get; set; }
        public Logged worker { get; set; }
        public Table table { get; set; }
        public enum status { }
    }
}