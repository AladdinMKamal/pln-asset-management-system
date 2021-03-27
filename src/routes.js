import FuelHistory from "./pages/FuelHistory";
import PlaceHolderPage from "./pages/PlaceHolderPage";

import car from './assets/img/ico/car.png';
import report from './assets/img/ico/report.png';
import person from './assets/img/ico/person.png';

const routes = [
    {
        name: "VEHICLES",
        icon: car,
        pages: []
    },
    {
        name: "REPORT",
        icon: report,
        pages: [
            {
                path: "/placeholder",
                name: "Operating Cost",
                component: PlaceHolderPage
            },
            {
                path: "/fuel-history",
                name: "Fuel History",
                component: FuelHistory
            },
            {
                path: "/placeholder",
                name: "Total Cost",
                component: PlaceHolderPage
            },
            {
                path: "/placeholder",
                name: "Cost/Meter",
                component: PlaceHolderPage
            },
            {
                path: "/placeholder",
                name: "Expense Summary",
                component: PlaceHolderPage
            },
            {
                path: "/placeholder",
                name: "Utilization",
                component: PlaceHolderPage
            },
            {
                path: "/placeholder",
                name: "Maintenance",
                component: PlaceHolderPage
            },
            {
                path: "/placeholder",
                name: "Service",
                component: PlaceHolderPage
            },

        ]
    },
    {
        name: "PEOPLE",
        icon: person,
        pages: []
    }
];

export default routes;