export const initialState = {
    title: '首页',
    count: 0
}
export const UPDATE_COUNT = (state, payLoad) => {
    return {
        ...state,
        count: payLoad.count
    }
}