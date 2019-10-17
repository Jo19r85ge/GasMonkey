class GasMonkeyGarage
{
    constructor()
    {
        this.MenuVM = null;
    }

    Start()
    {
        this.ClientsVM = new ClientsViewModel();
        this.WorkersVM = new WorkersViewModel();
        this.RepairsVM = new RepairsViewModel();
        this.MenuVM = new MenuViewModel();
        this.MenuVM.ShowView(MenusViews.Clients);
    }

    ShowView(menuView)
    {

        if (this.MenuVM != null)
        {
            this.MenuVM.ShowView(menuView);
        }
    }
}

var App = new GasMonkeyGarage();

window.onload = function(event)
{
    App.Start();
};
