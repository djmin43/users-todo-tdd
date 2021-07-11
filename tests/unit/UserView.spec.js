import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import UserView from '@/views/UserView'
import VUserSearchForm from '@/components/VUserSearchForm'
import VUserProfile from '@/components/VUserProfile'
import initialState from '@/store/state'
import userFixture from './fixtures/user'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('UserView', () => {
    let state

    const build = () => {
        const wrapper = shallowMount(UserView, {
           localVue,
           store: new Vuex.Store({ state })
        })
        return {
            wrapper,
            userSearchForm: () => wrapper.findComponent(VUserSearchForm),
            userProfile: () => wrapper.findComponent(VUserProfile)
        }
    }

    beforeEach(() => {
        state = { ...initialState }
    })

    it('passes a binded user prop to user profile component', () => {
        // arrange
        state.user = userFixture
        const { userProfile } = build()

        // assert
        expect(userProfile().vm.user).toBe(state.user)
    })

    it('renders the component', () => {
        // arrange
        const { wrapper } = build()

        // assert
        expect(wrapper.html()).toMatchSnapshot() 
    })

    it('renders main child component', () => {
        // arrange
        const { userSearchForm, userProfile } = build()

        // assert
        expect(userSearchForm().exists()).toBe(true)
        expect(userProfile().exists()).toBe(true) 
    })

    it('passes a binded user prop to user profile component', () => {
        // arrange
        const { wrapper, userProfile } = build()
        wrapper.setData({
            user: {
                name: 'Jay'
            }
        })

        // assert
        expect(userProfile().vm.user).toBe(wrapper.vm.user)
    })

})