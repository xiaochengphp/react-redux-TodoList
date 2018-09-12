/**
 * Action 类型
 */

export const Types = {
    CHANGE_INPUT_VALUE: 'change_input_value',
    ADD_LIST: 'add_list',
    DELETE_LIST_ITEM: 'delete_list_item',
    INIT_LIST_ACTION: 'init_list_action',
    GET_INIT_LIST: 'get_init_list'
};
// 改变Input值
export const changeInputValue = (value) => ({ type: Types.CHANGE_INPUT_VALUE, value: value })
// 添加事项
export const addList = (value) => ({ type: Types.ADD_LIST, value: value })
// 删除事项
export const deleteListItem = (index) => ({ type: Types.DELETE_LIST_ITEM, index: index })
// 初始化
export const initListAction = (data) => ({ type: Types.INIT_LIST_ACTION, data: data })
// redux-thunk异步获取
export const getTodoList = () => {
    return (dispatch) => {
        dispatch(initListAction(['Redux-thunk', 'Redux-saga']))
    }
}
// redux-saga
export const getInitList = () => ({ type: Types.GET_INIT_LIST })
