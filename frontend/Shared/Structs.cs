namespace frontend.Shared.Structs
{
    public struct Link
    {
        public readonly string name;
        public readonly string address;
        public Link(string name, string address)
        {
            this.name = name;
            this.address = address;
        }
    }
}