import Controller from 'react-imvc/controller' 
import React from 'react'
import View from './view'
import * as model from './model'
import service from './service'

const { initialState, ...actions } = model

export default class Home extends Controller { 
    View = View 
    initialState = initialState
    actions = actions
    preload = {
        'index': '/css/index.css' // 配置 css 文件路径
    }
    // 当页面渲染完成后，调用网络请求
    componentDidMount() {
        this.fetchAndSaveHomeData();
    }
    // 加
    handleCountPlus = () => {
        const {
            count
        } = this.store.getState();
        const {
            UPDATE_COUNT
        } = this.store.actions
        UPDATE_COUNT({
            count: count + 1
        })
    }
    // 减
    handleCountMinus = () => {
        const {
            count
        } = this.store.getState();
        const {
            UPDATE_COUNT
        } = this.store.actions
        UPDATE_COUNT({
            count: count - 1
        })
    }
    // 从接口获取初始count值
    fetchAndSaveHomeData = async () => {
        const {
            UPDATE_COUNT
        } = this.store.actions
        try {
            const data = await service.fetchHomeCount()
            // 将数据更新到store中
            UPDATE_COUNT({
                count: data.count
            })
        } catch (err) {
            console.log(err)
        }
    }
}