import { deepMutate } from '../src/deep-mutate-object'

describe('deepMutate(obj, walkFn)', () => {
  it('simple', () => {
    const result = deepMutate({
      foo: 'bar',
    }, (key, value) => {
      return [key + 'zoo', value + 'land']
    })
    expect(result).toMatchSnapshot()
  })

  it('deep', () => {
    const result = deepMutate({
      foo: 'bar',
      some: {
        other: 'deeper',
      },
    }, (key, value) => {
      return [key + 'zoo', typeof value === 'string' ? value + 'land' : value]
    })
    expect(result).toMatchSnapshot()
  })

  it('array', () => {
    const result = deepMutate({
      foo: 'bar',
      some: {
        other: [1, 2, {
          inside: 'array',
        }],
      },
    }, (key, value, holder) => {
      return [Array.isArray(holder) ? key : key + 'zoo', typeof value === 'string' ? value + 'land' : value]
    })
    expect(result).toMatchSnapshot()
  })
})
