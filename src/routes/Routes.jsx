import {RouterProvider, createBrowserRouter} from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider"
import { ProtectedRoute } from "./ProtectedRoute"
import WelcomePage from "../WelcomePage";
import NewSurvey from "../NewSurvey";
import NewSurveyScroll from "../NewSurvey-scrolling";
import SurveyPaging from "../Survey-paging";
import Login from "../Login";
import SurveyScroll from "../Survey-scrolling";
import EndSurvey from "../EndSurvey";
import SurveyLists from "../Survey-lists";

const Routes = () => {
    const { token } = useAuth();
    
    const routesForAuthenticatedOnly = [
        {
            path: "/",
            element: <ProtectedRoute/>,
            children: [
                {
                    path: "/welcome",
                    element: <WelcomePage/>,
                },
                {
                    path: "/addevent",
                    element: <NewSurvey/>,
                },
                {
                    path: "/addevent-scrolling",
                    element: <NewSurveyScroll/>,
                },
                {
                    path: "/surveypaging",
                    element: <SurveyPaging/>,
                },
                {
                    path: "/surveyscrolling",
                    element: <SurveyScroll/>,
                },
                {
                    path: "/surveyend",
                    element: <EndSurvey/>,
                },
                {
                    path: "/surveylists",
                    element: <SurveyLists/>,
                },
            ],
        },
    ];
    
    const routesforNotAuthenticatedOnly = [
        {
            path: "/login",
            element: <Login/>,
        },
    ];
    
    const router = createBrowserRouter([
        ...(!token ? routesforNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,
    ]);
    
    return <RouterProvider router={router}/>;
};

export default Routes;

