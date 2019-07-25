/**
 * Recursive NonNullable generic type
 *
 * Same functionality as 'NonNullable' built-in generic however it's recursive for all child object properties
 */

export type RecursiveNonNullable<T> = {
  [P in keyof T]: T[P] extends (infer U)[]
    ? RecursiveNonNullable<NonNullable<U>>[]
    : T[P] extends object
    ? RecursiveNonNullable<NonNullable<T[P]>>
    : NonNullable<T[P]>;
};

/**
 * Recursive Partial generic type
 *
 * Same functionality as 'Partial' built-in generic however it's recursive for all child object properties
 */

export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};
