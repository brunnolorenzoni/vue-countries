import { shallowMount } from '@vue/test-utils'
import HeaderComponent from '@/components/HeaderComponent.vue'

describe('HeaderComponent.vue', () => {
  it('renders header', () => {
    const wrapper = shallowMount(HeaderComponent)
    expect(wrapper.find('header#header').exists()).toBeTruthy()
  })
  it('should render logo', () => {
    const wrapper = shallowMount(HeaderComponent)
    expect(wrapper.find('img').exists()).toBeTruthy()
  })
  it('should render site name', () => {
    const wrapper = shallowMount(HeaderComponent)
    expect(wrapper.find('h1').text()).toEqual('Vue Countries')
  })
})
