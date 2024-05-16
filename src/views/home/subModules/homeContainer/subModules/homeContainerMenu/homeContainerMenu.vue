<template>
    <div class="home-menu">
        <a href="javascript:;" class="slide-top-btn"></a>
        <ul>
            <li @click="toast">
                <img src="/src/assets/image/home_icon.png" alt="">
                <label>首页</label>
            </li>
            <li @click="toast">
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
    </div>

    
</template>
<script setup lang="ts">
const toast = ()=>{
    window.alert('功能维护中...')
}
</script>