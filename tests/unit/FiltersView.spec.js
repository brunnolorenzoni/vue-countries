import { mount } from '@vue/test-utils'
import FiltersView from '@/components/FiltersView.vue'


describe('FiltersView', () => {
  it('filters section', () => {
    const wrapper = mount(FiltersView)
    expect(wrapper.find('#filters').exists()).toBeTruthy()
  })
  it('select region', () => {
    const wrapper = mount(FiltersView)
    expect(wrapper.find('#filters label[for=region]').text()).toEqual('Region')
    expect(wrapper.find('#filters select#region').exists()).toBeTruthy()
  })
  it('input countryName', () => {
    const wrapper = mount(FiltersView)
    expect(wrapper.find('#filters label[for=countryName]').text()).toEqual('Country')
    expect(wrapper.find('#filters input#countryName').exists()).toBeTruthy()
  })
})
