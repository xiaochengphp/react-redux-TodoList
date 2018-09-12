/**
 * Reducer 数据处理 => 笔记本
 */
import { Types } from './action';

const defaultState = {
    inputValue: '',
    list: ['Hello React', 'Hello Vue']
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case Types.INIT_LIST_ACTION:
            return {
                ...state,
                list: action.data
            }
        case Types.CHANGE_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.value
            }
        case Types.ADD_LIST:
            return {
                ...state,
                list: [...state.list, action.value],
                inputValue: ''
            }
        case Types.DELETE_LIST_ITEM:
            const list = [...state.list];
            list.splice(action.index, 1);
            return {
                ...state,
                list: list
            }
        default:
            return { ...state }
    }
}
