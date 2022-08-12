// import ClientPage from './components/ClientPage.vue'
// import AdminPage from './components/AdminPage.vue'

import WelcomePage from './components/WelcomePage.vue'

import PizzaList from './components/client_page-components/PizzaList.vue'
import ShoppingCart from './components/client_page-components/ShoppingCart.vue'
import ThankyouPage from './components/client_page-components/ThankyouPage.vue'
import OrderHistory from './components/client_page-components/OrderHistory.vue'

import MenuList from './components/admin_page-components/MenuList.vue'
import AddForm from './components/admin_page-components/AddForm.vue'

// import LoginPage from './components/LoginPage.vue'

// import auth from './store/auth'
// import { apply } from 'core-js/fn/reflect'

const routes = [
    // {
    //     path: '/login',
    //     component: LoginPage
    // },

    // { 
    //     path:'/', 
    //     component: ClientPage, 
    //     children: [
    //         { path: '/', component: WelcomePage },
    //         { path: 'pizza/', component: PizzaList },
    //         { path: 'cart/', component: ShoppingCart },
    //         { path: 'thankyou/', component: ThankyouPage},
    //         { path: '/orders/', component: OrderHistory },
    //     ]
    // },
    // {
    //     path: '/',
    //     component: AdminPage,
    //     children: [
    //         { path: 'menu-list/', component: MenuList },
    //         { path: 'add-form/', component: AddForm },
    //     ]
    // }

    { path: '/', components: { client: WelcomePage, admin: WelcomePage }  },
    { path: '/pizza/', components: { client: PizzaList }},
    { path: '/cart/', components: { client: ShoppingCart } },
    { path: '/thankyou/', components: { client: ThankyouPage }},
    { path: '/orders/', components: { client: OrderHistory } },

    { path: '/admin/menu-list/', components: { admin: MenuList } },
    { path: '/admin/add-form/', components: { admin: AddForm } },
    
    // {
    //     path: '/',
    //     get component() {
    //         if (!auth.state.user.is_admin && auth.state.user.password !== null) {
    //             console.log(auth.state.user)
    //             return ClientPage
    //         }
    //         else if (auth.state.user.is_admin) {
    //             return AdminPage
    //         }
    //         return LoginPage
    //     },
    //     get children() {
    //         if (!auth.state.user.is_admin) {
    //             return [
    //                 { path: '/', component: WelcomePage },
    //                 { path: 'pizza/', component: PizzaList },
    //                 { path: 'cart/', component: ShoppingCart },
    //                 { path: 'thankyou/', component: ThankyouPage},
    //                 { path: '/orders/', component: OrderHistory },
    //             ]
    //         }
    //         else if (auth.state.user.is_admin) {
    //             return [
    //                 { path: 'menu-list/', component: MenuList },
    //                 { path: 'add-form/', component: AddForm },
    //             ]
    //         }

    //         return WelcomePage
    //     }
    // }
]

export default routes