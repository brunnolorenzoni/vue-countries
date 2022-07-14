import { mount, RouterLinkStub  } from '@vue/test-utils'
import CountriesView from '@/components/CountriesView.vue'
import router from "@/router/router";

import mock from '../mocks/brazil'

describe('CountriesView', () => {
  it('countries section', () => {
    const wrapper = mount(CountriesView)
    expect(wrapper.find('#countries').exists()).toBeTruthy()
  })

  it('exist card', () => {
    const wrapper = mount(CountriesView, {
      propsData: {
        countries: mock
      },
      stubs: {
        RouterLink: RouterLinkStub
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.find('.card').exists()).toBeTruthy()
  })
})
