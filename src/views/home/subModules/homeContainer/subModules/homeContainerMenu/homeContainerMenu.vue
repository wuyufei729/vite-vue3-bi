<template>
    <div class="home-menu">
        <a href="javascript:;" class="slide-top-btn"></a>
        <ul>
            <li @click="toast">
                <img src="/src/assets/image/home_icon.png" alt="">
                <label>首页</label>
            </li>
            <li @click="slideTree(true)">
                <img src="/src/assets/image/device_icon.png" alt="">
                <label>选择设备</label>
            </li>
            <li @click="toast">
                <img src="/src/assets/image/sys_setting_icon.png" alt="">
                <label>系统设置</label>
            </li>
            <li @click="toast">
                <img src="/src/assets/image/tec_book_icon.png" alt="">
                <label>技术资料</label>
            </li>
            <li @click="toast">
                <img src="/src/assets/image/warning_icon.png" alt="">
                <label>故障报警</label>
            </li>
            <li @click="toast">
                <img src="/src/assets/image/work_mange_icon.png" alt="">
                <label>作业管理</label>
            </li>
        </ul>
        <div class="department-tree-wrap" :class="isShowTree?'show':''">
            <el-icon class="close-tree" :size="20" @click="slideTree(false)">
                <CircleClose />
            </el-icon>
            <!-- <el-button type="danger" class="close-tree" :icon="Delete" circle /> -->
            <el-tree style="max-width: 600px" :data="data" :props="defaultProps" @node-click="handleNodeClick"
                class="department-tree" />
        </div>

    </div>
</template>
<script setup lang="ts">
import UseChartHook from '@/hook/chartHook'
import { CircleClose } from '@element-plus/icons-vue'
import { ref } from 'vue'
const usechartHook = UseChartHook('homeContainerMenu')
interface Tree {
    label: string
    children?: Tree[]
}

const handleNodeClick = (data: Tree) => {
    usechartHook.toRefresh((data as any).$treeNodeId)
}

const isShowTree = ref(false)

const slideTree = (val: boolean) => {
    isShowTree.value = val
}

const data: Tree[] = [
    {
        label: '二级部门',
        children: [
            {
                label: '设备班组一',

            },
            {
                label: '设备班组二',
            },
        ],
    },
    {
        label: '二级部门',
        children: [],
    }
    
]

const defaultProps = {
    children: 'children',
    label: 'label',
}

const toast = () => {
    window.alert('功能维护中...')
}


</script>