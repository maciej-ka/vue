import Vue from 'vue'

describe('Options methods', () => {
  it('should have correct context', () => {
    const vm = new Vue({
      data: {
        a: 1
      },
      methods: {
        plus () {
          this.a++
        }
      }
    })
    vm.plus()
    expect(vm.a).toBe(2)
  })

  it('should warn undefined methods', () => {
    new Vue({
      methods: {
        hello: undefined
      }
    })
    expect(`method "hello" has an undefined value in the component definition`).toHaveBeenWarned()
  })

  it('should warn non object', () => {
    new Vue({
      methods: 'wrong'
    })
    expect('methods should be an object').toHaveBeenWarned()
  })
})
