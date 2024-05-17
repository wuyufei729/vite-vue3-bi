import { onMounted, onUnmounted, ref } from 'vue'
import mitt from 'mitt'

// type IUseEventbus = {
//     customEmit: (eventName: string) => void
//     customOn: (eventName: string, callback: () => void) => void
//     toRefresh: (params: any) => void
//     refresh: (callback: () => void) => void
// }
const isLoading = ref(false)
const emitter = mitt()

/**
* @description: 自定义触发器
* @param {*} eventName 名称
*/
const customEmit = (eventName: string) => {
    emitter.emit(eventName)
}

/**
* @description: 自定义接收器
* @param {*} name 名称
* @param {*} callback 回调的函数
*/
const customOn = (eventName: string, callback: () => void) => {
    emitter.on(eventName, () => callback())
}

/**
* @description: 通知刷新表格数据
*/
const toRefresh = (params: any) => {
    emitter.emit('refresh', params)
}

/**
* @description: 刷新表格数据
* @param {*} callback 回调的函数
*/
const refresh = (callback: () => void) => {
    emitter.on('refresh', (params: any) => {
        isLoading.value = true;
        setTimeout(()=>{
            isLoading.value = false
        },2000)
        callback()
    })
}

/**
* @description: 导出useEventbus
*/
const UseChartHook = (chartName?: String) => {

    onMounted(()=>{
        (emitter as any).on('refresh', (deptId: String) => {
            console.log(`模块文件为 ${chartName} 的已经监听到部门ID为 ${deptId} 变化`)
            isLoading.value = true;
            setTimeout(()=>{
                isLoading.value = false
            },2000)
            
        })
    })

    // 销毁的事件
    onUnmounted(() => {
        // 清空所有的事件，避免多组件互相清理
        emitter.all.clear()
    })

    return {
        isLoading,
        customEmit,
        customOn,
        toRefresh,
        refresh
    }
}

export default UseChartHook
