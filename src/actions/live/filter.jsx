export const SELECT_NODE = 'SELECT_NODE';
export const SELECT_VIEW = 'SELECT_VIEW';

export function selectNodeFilter(node) {
  return {
    type: SELECT_NODE,
    node: node
  };
}

export function selectViewFilter(view) {
  return {
    type: SELECT_VIEW,
    view: view
  };
}