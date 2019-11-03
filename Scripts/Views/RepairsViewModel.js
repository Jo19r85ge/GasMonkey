class RepairsViewModel
{
    constructor()
    {
        this.SelectedClient = null;
        this.SelectedWorker = null;
        this.ClientsDDHandler = new DropDownHandler(App.ClientsVM.Clients, DDClients, "Name", RepairsVM_BtSelectedClient, (client) => { this.SelectedClient = client;
                                        
                if (this.SelectedClient != null)
                BtWork.style.display = "block";  

                this.ShowClientsRepairs(client);
                                    });
        this.WorkersDDHandler = new DropDownHandler(App.WorkersVM.Workers, DDWorkers, "Name", RepairsVM_BtSelectedWorker, (worker) => { this.SelectedWorker = worker;

                                        if (this.SelectedWorker != null)
                                            BtWork.style.display = "block";                                        
                                    });

        let buttons = 
        [
            new TableButtonInfo("Reparacion Terminada", (repair) => { alert("El vehiculo " + repair.Car + " ha sido reparado"); })
        ];

        this.TableHandler = new TableHandler(
            RepairsTableContent, 
            Repair,               
            buttons,
            ["Client"]);
    }

    ShowClientsRepairs(client)
    {
        this.TableHandler.Clean();
        for (let i in client.Repairs)
        {
            AddRepairToTable(client.Repairs[i]);
        }
    }

    AddRepair()
    {
        if (this.SelectedWorker != null && this.SelectedClient != null)
        {
            let workerHasClient = false;
            for (let i in this.SelectedWorker.Repairs)
            {
                let repair = this.SelectedWorker.Repairs[i];
                if (repair.Client == this.SelectedClient)
                {
                    workerHasClient = true;
                    break;
                }
            }  
            
            if (!workerHasClient)
            {
                let repair = new Repair(this.SelectedClient, this.SelectedWorker);
                this.SelectedWorker.Repairs.push(repair);

                this.AddRepairToTable(repair);
            }
        }
    }

    AddRepairToTable(repair)   //este puede venir de cualquier lado
    {
        this.TableHandler.AddRow(repair);
    }

    ShowClients()
    {
        this.ClientsDDHandler.ShowOptions();
    }

    ShowWorkers()
    {
        this.WorkersDDHandler.ShowOptions();
    }
}
