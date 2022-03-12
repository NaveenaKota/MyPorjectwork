/* B"H
*/

export interface User {
    firstName: string;
    lastName: string;
    handle: string;
    password: string;
    email: string;
    pic: string;
    id: number;
    tasks:any
}

export const list: User[] = [
    {
        firstName: 'Naveena',
        lastName: 'Kota',
        handle: 'naveena',
        password: 'password',
        email: 'naveenakota14@gmail.com',
        pic: 'https://randomuser.me/api/portraits/women/1.jpg',
        id: 1,
        tasks:([
            { title: 'Add some more features',dueDate:'04/21/2022', isCompleted: false, assignedBy: "Bharath" },
            { title: 'Add some more features',dueDate:'04/21/2022', isCompleted: false, assignedBy: "Yash" },
        ]),
    },
    {
        firstName: 'Yash',
        lastName: 'Ghatge',
        handle: 'yash',
        password: 'password',
        email: 'yash14@gmail.com',
        pic: 'https://randomuser.me/api/portraits/men/2.jpg',
        id: 2,
        tasks:([
            { title: 'Add some more features for Jquery',dueDate:'04/21/2022', isCompleted: false, assignedBy: "Bharath" },
            { title: 'Add some more features for CSS',dueDate:'04/21/2022', isCompleted: false, assignedBy: "Yash" },
        ]),
    },
    {
        firstName: 'Bharath',
        lastName: 'Rongali',
        handle: 'bharath',
        password: 'password',
        email: 'rss14@gmail.com',
        pic: 'https://randomuser.me/api/portraits/men/3.jpg',
        id: 3,
        tasks:([
            { title: 'Add some more features for html',dueDate:'04/21/2022', isCompleted: false, assignedBy: "Naveena" },
            { title: 'Add some more features for vue',dueDate:'04/21/2022', isCompleted: false, assignedBy: "Yash" },
        ]),
    },

];