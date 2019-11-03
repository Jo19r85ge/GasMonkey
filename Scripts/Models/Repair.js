class Repair
{
    constructor(client, worker)
    {
        this.ClientName = client === undefined ? "" : client.Name;
        this.Car = client === undefined ? "" : client.Car;
        this.Worker = worker === undefined ? "" : worker.Name;
        this.LendedOn = new Date();
        this.ExpiresOn = new Date();
        this.LendedOn = (this.LendedOn.getDate() + "/" + (this.LendedOn.getMonth() +1) + "/" + this.LendedOn.getFullYear());
        this.ExpiresOn = (this.ExpiresOn.getDate() + "/" + (this.ExpiresOn.getMonth() +2) + "/" + this.ExpiresOn.getFullYear());
    }
    
}
