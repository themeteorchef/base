export const getInputValue = ( component, ref, nested ) => {
  let element = component.refs[ ref ];
  return nested ? element.refs.input.value : element.value;
}
