class ClientsViewModel
{
    constructor()
    {
        this.Clients = new Array();
        this.InputHandler = new InputDataHandler();
        this.EditingClient = null;
        
        let buttons = 
        [
            new TableButtonInfo("Edit", (client) => { this.OnSelectedClient(client); }),
            new TableButtonInfo("Remove", (client) => { this.OnDeletedClient(client); })
        ];

        this.TableHandler = new TableHandler(ClientsTableContent, Client, buttons);
    }

    AddNewClient()
    {
        let client = new Client();
        this.InputHandler.FillModel(client, ClientsView);
        this.AddClient(client);
        this.CleanClientForm();
    }

    AddClient(client)
    {
        this.Clients.push(client);
        this.TableHandler.AddRow(client);
    }

    UpdateClient()
    {
        this.InputHandler.FillModel(this.EditingClient, ClientsView);
        this.TableHandler.UpdateRow(this.EditingClient);
        this.CleanClientForm();
    }

    CleanClientForm()
    {
        this.InputHandler.CleanForm(ClientsView);
        this.TableHandler.Clean();
    }

    OnSelectedClient(client)
    {
        this.EditingClient = client;
        this.InputHandler.FillForm(client, ClientsView);

        BtAddClient.classList.add("BtnInvisible");
        BtUpdateClient.classList.remove("BtnInvisible");
    }

    OnDeletedClient(client)
    {
        var response = confirm("¿Te atreves a borrar el libro !! ??");
        if (response == true)
        {
            console.log("You pressed OK! jajaja");
            let i = this.Clients.findIndex((x)=>x === client);
            this.Clients.splice(i, 1);

            this.TableHandler.DeleteRow(client);
        }
        else
        {
            console.log("You pressed Cancel !!");
        }
    }
}
