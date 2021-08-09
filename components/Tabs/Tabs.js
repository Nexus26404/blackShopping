// components/Tabs/Tabs.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tabs: {
            type: Array,
            value: []
        },
        currentIndex: {
            type: Number,
            value: 0
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 点击事件
        handleItemTap(e){
            // 1. 获取点击事件的索引
            const {index} = e.currentTarget.dataset;
            // 2. 触发 父组件中的事件
            this.triggerEvent("tabsItemChange", {index});
        }
    }
})