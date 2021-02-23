import {VuexModule, Module, getModule} from 'vuex-module-decorators'
import store from '@/store'


@Module({
    namespaced: true,
    name: 'users',
    store
})
class UsersModule extends VuexModule{
    user: any;
    profile: any
}

export default getModule(UsersModule);