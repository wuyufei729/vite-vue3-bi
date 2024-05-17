<template>
    <div class="group-item video-monitoring" v-loading="isLoading">
        <h3 class="common-btn-title">视频监控</h3>
        <span class="decoration-arrow" @click="toast"></span>
        <p class="animate-liner-line"></p>
        <ul>
            <li>
                <img src="/src/assets/image/video1.png" />
            </li>
            <li>
                <img src="/src/assets/image/video2.png" />
            </li>
            <li>
                <img src="/src/assets/image/video3.png" />
            </li>
            <li>
                <img src="/src/assets/image/video4.png" />
            </li>
        </ul>
    </div>
    
</template>

<script lang='ts' setup>
import UseChartHook from '@/hook/chartHook'
const { isLoading } = UseChartHook('videoMonitoring');
const toast = ()=>{
    window.alert('功能维护中...')
}
</script>
