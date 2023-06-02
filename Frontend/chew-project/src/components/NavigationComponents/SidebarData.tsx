import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
    {
        title: 'Hjem',
        path: '/',
        icon: <BiIcons.BiHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Profil',
        path: '/Profile',
        icon: <BiIcons.BiUser/>,
        cName: 'nav-text'
    },
    {
        title: 'Oppskrifter',
        path: '/RecipePage',
        icon: <BiIcons.BiRestaurant/>,
        cName: 'nav-text'
    },
    {
        title: 'Kjøleskap',
        path: '/MyFridge',
        icon: <BiIcons.BiFridge/>,
        cName: 'nav-text'
    },
    {
        title: 'Handleliste',
        path: '/ShoppingListPage',
        icon: <BiIcons.BiShoppingBag/>,
        cName: 'nav-text'
    },
]