/* eslint-disable @typescript-eslint/explicit-function-return-type */

const removeEmpty = obj =>
  Object.fromEntries(
    Object.entries(obj)
      .filter(([, v]) => v !== "" && v !== null)
      .map(([k, v]) => (typeof v === "object" ? [k, removeEmpty(v)] : [k, v]))
  );

export default removeEmpty;
