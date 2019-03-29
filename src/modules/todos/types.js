const _NAMESPACE = 'TODOS';

const actionName = (name) => `${_NAMESPACE}/${name}`; 

export default {
  CREATE_TODO: actionName('createTodo'),
  EDIT_TODO: actionName('editTodo')
}
