import ClientPage from './components/ClientPage.vue'
import AdminPage from './components/AdminPage.vue'

import WelcomePage from './components/WelcomePage.vue'

import PizzaList from './components/client_page-components/PizzaList.vue'
import ShoppingCart from './components/client_page-components/ShoppingCart.vue'
import ThankyouPage from './components/client_page-components/ThankyouPage.vue'
import OrderHistory from './components/client_page-components/OrderHistory.vue'

import MenuList from './components/admin_page-components/MenuList.vue'
import AddForm from './components/admin_page-components/AddForm.vue'

const routes = [
    { 
        path:'/', 
        component: ClientPage, 
        children: [
            { path: '/', component: WelcomePage },
            { path: 'pizza/', component: PizzaList },
            { path: 'cart/', component: ShoppingCart },
            { path: 'thankyou/', component: ThankyouPage},
            { path: '/orders/', component: OrderHistory },
        ]
    },
    {
        path: '/admin',
        component: AdminPage,
        children: [
            { path: 'menu-list/', component: MenuList },
            { path: 'add-form/', component: AddForm },
        ]
    }
]

export default routes