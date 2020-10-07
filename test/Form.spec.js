import { mount } from '@vue/test-utils'
import Form from '@/components/Form.vue'

describe('Form', () => {
  test('searching for projects by username', () => {
    const wrapper = mount(Form)
    const button = wrapper.find('button')
    const input = wrapper.find('input')
    
    button.trigger('click')
    expect(input.contains('input')).toBe(true)
  })
})