import { mount } from '@vue/test-utils'
import CountriesView from '@/components/CountriesView.vue'

describe('CountriesView', () => {
  it('countries section', () => {
    const wrapper = mount(CountriesView)
    expect(wrapper.find('#countries').exists()).toBeTruthy()
  })

})
