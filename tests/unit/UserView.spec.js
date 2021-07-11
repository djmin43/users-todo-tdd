import { shallowMount } from '@vue/test-utils'
import UserView from '@/views/UserView'
import VUserSearchForm from '@/components/VUserSearchForm'
import VUserProfile from '@/components/VUserProfile'

describe('UserView', () => {
    it('renders the component', () => {
        // arrange
        const wrapper = shallowMount(UserView)

        // assert
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders main child components', () => {
        // arrange
        const wrapper = shallowMount(UserView)
        const userSearchForm = wrapper.findComponent(VUserSearchForm)
        const userProfile = wrapper.findComponent(VUserProfile)

        // assert
        expect(userSearchForm.exists()).toBe(true)
        expect(userProfile.exists()).toBe(true)
    })
})