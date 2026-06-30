import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home"
import Anime from "../pages/Anime/Anime";
import AnimeDetails from "../pages/AnimeDetails/AnimeDetails";
import Library from "../pages/Library/Library"
import Ratings from "../pages/Ratings/Ratings"
import NotFound from "../pages/NotFound/NotFound"
import Favorites from "../pages/Favorites/Favorites"
import Dashboard from "../pages/Dashboard/Dashboard"
import Characters from "../pages/Characters/Characters"
import  CharactersDetails from "../pages/CharacterDetails/CharacterDetails"

const AppRouter=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children=[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"/anime",
                element:<Anime/>
            },
            {
                path:"/anime/:animeId",
                element:<AnimeDetails/>
            },
            {
                path:"anime/:animeId/characters",
                element:<Characters/>
            },
              {
                path:"characters",
                element:<Characters/>
            },
            {
                path:"characters/:charactersId",
                element:<CharactersDetails/>
            },
            {
                path:"favorites",
                element:<Favorites/>
            },
            {
                path:"my-library",
                element:<Library/>
            },
            {
                path:"my-ratings",
                element:<Ratings/>
            },
            {
                path:"dashboard",
                element:<Dashboard/>
            }
        ]
    }
])
export default AppRouter;