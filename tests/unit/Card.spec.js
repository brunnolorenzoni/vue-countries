import { mount, RouterLinkStub  } from '@vue/test-utils'
import Card from '@/components/CountryCard.vue'
import router from "@/router/router";

import mock from '../mocks/brazil'

describe('Card', () => {
  it('card', () => {
    const wrapper = mount(Card, {
      propsData: {
        country: mock[0]
      },
      stubs: {
        RouterLink: RouterLinkStub
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.find('.card').exists()).toBeTruthy()
    expect(wrapper.find('h4.card-title').text()).toEqual(mock[0].name.common)
  })
})
