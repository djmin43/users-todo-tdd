import { shallowMount } from '@vue/test-utils'
import UserView from '@/views/UserView'
import VUserSearchForm from '@/components/VUserSearchForm'
import VUserProfile from '@/components/VUserProfile'

describe('UserView', () => {
    const build = () => {
        const wrapper = shallowMount(UserView)
        return {
            wrapper,
            userSearchForm: () => wrapper.findComponent(VUserSearchForm),
            userProfile: () => wrapper.findComponent(VUserProfile)
        }
    
    }

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

})