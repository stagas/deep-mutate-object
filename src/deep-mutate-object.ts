export const deepMutate = (obj: any, walkFn: (key: string, value: any, holder: any) => [string, any]): any =>
  Object.entries(obj).reduce((p, [k, v]) => {
    const [key, value] = walkFn(k, v, obj)

    p[key] = typeof value === 'object' && value !== null
      ? deepMutate(value, walkFn)
      : value

    return p
  }, (Array.isArray(obj) ? [] : {}) as any)
