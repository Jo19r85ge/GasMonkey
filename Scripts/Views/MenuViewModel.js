class MenuViewModel
{
    constructor()
    {
    }

    ShowView(menuView)
    {
        switch(menuView)
        {
            case MenusViews.Clients:
                ClientsView.style.display = "block";
                WorkersView.style.display = "none";
                RepairsView.style.display = "none";

                break;
            
            case MenusViews.Workers:
                ClientsView.style.display = "none";
                WorkersView.style.display = "block";
                RepairsView.style.display = "none";

            break;

            case MenusViews.Repairs:
                ClientsView.style.display = "none";
                WorkersView.style.display = "none";
                RepairsView.style.display = "block";

            break;
        }
    }
}

MenusViews =
{
    Clients : 1,
    Workers : 2,
    Repairs : 3
}
