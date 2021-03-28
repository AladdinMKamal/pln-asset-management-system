import car1 from '../assets/img/cars/car1.png';
import car2 from '../assets/img/cars/car2.png';
import car3 from '../assets/img/cars/car3.png';
import car4 from '../assets/img/cars/car4.png';
import flag1 from '../assets/img/flags/eg.png';
import flag2 from '../assets/img/flags/us.png';

export const carsList = [
    { name: "[001] Toyota Avanza", image: car1, status: 0 },
    { name: "[005] Daihatsu Xenia", image: car2, status: 1 },
    { name: "[001] Toyota Avanza", image: car3, status: 0 },
    { name: "[005] Daihatsu Xenia", image: car4, status: 2 },
    { name: "[001] Toyota Avanza", image: car3, status: 0 },
    { name: "[005] Daihatsu Xenia", image: car3, status: 0 }
];

export const ShortCarsList = [
    { name: "[001] Toyota Avanza", image: car1 },
    { name: "[005] Daihatsu Xenia", image: car2 }
];

export const statusList = [
    { name: "Active", color: "#21A21E" },
    { name: "In shop", color: "#C1931B" },
    { name: "Out of service", color: "#C11B1B" }
];

export const timezone = [
    { name: "Eg", image: flag1 },
    { name: "US", image: flag2 }
];

export const sortList = [
    { id: 1, name: "Date" },
    { id: 2, name: "Status" }
]

export const records = [
    { id: 0, vehicle: 0, date: "Mon, Jun 10, 2019", time: "10:23 AM", totalkm: "17.845", volume: "123.35", cost: { cost: 625.000, perLiter: 9.879 }, actions: 0 },
    { id: 1, vehicle: 1, date: "Mon, Jun 10, 2019", time: "9:34 PM", totalkm: "20.201", volume: "170.30", cost: { cost: 950.000, perLiter: 10.200 }, actions: 1 },
    { id: 2, vehicle: 2, date: "Mon, Jun 09, 2019", time: "10:23 AM", totalkm: "17.845", volume: "123.35", cost: { cost: 625.000, perLiter: 9.207 }, actions: 2 },
    { id: 3, vehicle: 3, date: "Mon, Jun 09, 2019", time: "9:34 PM", totalkm: "20.201", volume: "170.30", cost: { cost: 950.000, perLiter: 10.050 }, actions: 3 },
    { id: 4, vehicle: 4, date: "Mon, Jun 09, 2019", time: "10:23 AM", totalkm: "17.845", volume: "123.35", cost: { cost: 625.000, perLiter: 9.800 }, actions: 4 },
    { id: 5, vehicle: 5, date: "Mon, Jun 08, 2019", time: "9:34 PM", totalkm: "20.201", volume: "170.30", cost: { cost: 950.000, perLiter: 9.879 }, actions: 5 },
    { id: 0, vehicle: 0, date: "Mon, Jun 10, 2019", time: "10:23 AM", totalkm: "17.845", volume: "123.35", cost: { cost: 625.000, perLiter: 9.879 }, actions: 0 },
    { id: 1, vehicle: 1, date: "Mon, Jun 10, 2019", time: "9:34 PM", totalkm: "20.201", volume: "170.30", cost: { cost: 950.000, perLiter: 10.200 }, actions: 1 },
    { id: 2, vehicle: 2, date: "Mon, Jun 09, 2019", time: "10:23 AM", totalkm: "17.845", volume: "123.35", cost: { cost: 625.000, perLiter: 9.207 }, actions: 2 },
    { id: 3, vehicle: 3, date: "Mon, Jun 09, 2019", time: "9:34 PM", totalkm: "20.201", volume: "170.30", cost: { cost: 950.000, perLiter: 10.050 }, actions: 3 },
    { id: 4, vehicle: 4, date: "Mon, Jun 09, 2019", time: "10:23 AM", totalkm: "17.845", volume: "123.35", cost: { cost: 625.000, perLiter: 9.800 }, actions: 4 },
    { id: 5, vehicle: 5, date: "Mon, Jun 08, 2019", time: "9:34 PM", totalkm: "20.201", volume: "170.30", cost: { cost: 950.000, perLiter: 9.879 }, actions: 5 },
    { id: 0, vehicle: 0, date: "Mon, Jun 10, 2019", time: "10:23 AM", totalkm: "17.845", volume: "123.35", cost: { cost: 625.000, perLiter: 9.879 }, actions: 0 },
    { id: 1, vehicle: 1, date: "Mon, Jun 10, 2019", time: "9:34 PM", totalkm: "20.201", volume: "170.30", cost: { cost: 950.000, perLiter: 10.200 }, actions: 1 },
    { id: 2, vehicle: 2, date: "Mon, Jun 09, 2019", time: "10:23 AM", totalkm: "17.845", volume: "123.35", cost: { cost: 625.000, perLiter: 9.207 }, actions: 2 },
    { id: 3, vehicle: 3, date: "Mon, Jun 09, 2019", time: "9:34 PM", totalkm: "20.201", volume: "170.30", cost: { cost: 950.000, perLiter: 10.050 }, actions: 3 },
    { id: 4, vehicle: 4, date: "Mon, Jun 09, 2019", time: "10:23 AM", totalkm: "17.845", volume: "123.35", cost: { cost: 625.000, perLiter: 9.800 }, actions: 4 },
    { id: 5, vehicle: 5, date: "Mon, Jun 08, 2019", time: "9:34 PM", totalkm: "20.201", volume: "170.30", cost: { cost: 950.000, perLiter: 9.879 }, actions: 5 }
];