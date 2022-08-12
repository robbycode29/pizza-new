import WelcomePage from './components/WelcomePage.vue'

import PizzaList from './components/client_page-components/PizzaList.vue'
import ShoppingCart from './components/client_page-components/ShoppingCart.vue'
import ThankyouPage from './components/client_page-components/ThankyouPage.vue'
import OrderHistory from './components/client_page-components/OrderHistory.vue'

import MenuList from './components/admin_page-components/MenuList.vue'
import AddForm from './components/admin_page-components/AddForm.vue'


const routes = [

    { path: '/', components: { client: WelcomePage, admin: WelcomePage }  },
    { path: '/pizza/', components: { client: PizzaList }},
    { path: '/cart/', components: { client: ShoppingCart } },
    { path: '/thankyou/', components: { client: ThankyouPage }},
    { path: '/orders/', components: { client: OrderHistory } },

    { path: '/admin/menu-list/', components: { admin: MenuList } },
    { path: '/admin/add-form/', components: { admin: AddForm } },
    
]

export default routes