import { mount } from '@vue/test-utils'
import FormTable from '@/components/Form.vue'

describe('Table', async () => {
  test('is a Form Table', () => {
    const wrapper = mount(FormTable)
    const tableUser = wrapper.findAll('table')

    expect(tableUser.contains('table')).toBe(true)
  })
})