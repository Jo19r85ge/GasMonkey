class WorkersViewModel
{
    constructor()
    {
        this.Workers = new Array();
        this.InputHandler = new InputDataHandler();
        this.EditingWorker = null;  

        let buttons = 
        [
            new TableButtonInfo("Edit", (worker) => { this.OnSelectedWorker(worker); }),
            new TableButtonInfo("Remove", (worker) => { this.OnDeletedWorker(worker); })
        ];

        this.TableHandler = new TableHandler(WorkersTableContent, Worker, buttons);
    }

    AddNewWorker()
    {
        let worker = new Worker();
        this.InputHandler.FillModel(worker, WorkersView);
        this.AddWorker(worker);
        this.CleanWorkerForm();
    }

    AddWorker(worker)
    {
        this.Workers.push(worker);
        this.TableHandler.AddRow(worker);
    }

    UpdateWorker()
    {
        this.InputHandler.FillModel(this.EditingWorker, WorkersView);
        this.TableHandler.UpdateRow(this.EditingWorker);
        this.CleanWorkerForm();
    }

    CleanWorkerForm()
    {
        this.InputHandler.CleanForm(WorkersView);
        this.TableHandler.Clean()
    }

    OnSelectedWorker(worker)
    {
        this.EditingWorker = worker;
        this.InputHandler.FillForm(worker, WorkersView);

        BtAddWorker.classList.add("BtnInvisible");
        BtUpdateWorker.classList.remove("BtnInvisible");
    }

    OnDeletedWorker(worker)
    {
        var response = confirm("¿Te atreves a borrar el libro !! ??");
        if (response == true)
        {
            console.log("You pressed OK! jajaja");
            let i = this.Workers.findIndex((x)=>x === worker);
            this.Workers.splice(i, 1);

            this.TableHandler.DeleteRow(worker);
        }
        else
        {
            console.log("You pressed Cancel !!");
        }
    }
}
