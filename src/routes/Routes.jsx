import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
import SurveyTest from "../SurveyTest";

const Routes = () => {
    const { token } = useAuth();


    const routesForPublic = [
        {
            path: "/",
            element: <Login/>
        }
    ]
    

    const routesForAuthenticatedOnly = [
        {
            path: "/",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "/welcome",
                    element: <WelcomePage />,
                },
                {
                    path: "/addevent",
                    element: <NewSurvey />,
                },
                {
                    path: "/addevent-scrolling",
                    element: <NewSurveyScroll />,
                },
                {
                    path: "/surveypaging",
                    element: <SurveyPaging />,
                },
                {
                    path: "/surveyscrolling",
                    element: <SurveyScroll />,
                },
                {
                    path: "/surveyend",
                    element: <EndSurvey />,
                },
                {
                    path: "/surveylists",
                    element: <SurveyLists />,
                },
                {
                    path: "/surveytest",
                    element: <SurveyTest />,
                },

            ],
        },
    ];

    const routesforNotAuthenticatedOnly = [
        {

            
        },
    ];

    const router = createBrowserRouter([
        ...routesForPublic,
        ...(!token ? routesforNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,
    ]);

    return <RouterProvider router={router} />;
};

export default Routes;

