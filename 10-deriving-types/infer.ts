function add(a: number, b: number) {
  return a + b;
}

type AddFn = typeof add;
// there is a native solution in TS - ReturnType (see utility types in docs):
type ReturnValueType<T> = T extends (...args: any[]) => infer RV ? RV : never;
type AddFnReturnValueType = ReturnValueType<AddFn>; // type number
