export const getInputValue = (component, ref, nested) => {
  const element = component.refs[ref];
  return nested ? element.refs.input.value : element.value;
};
