<template>
    <div class="left" :class="slideUp?'slide-up':'slide-down'">
        <a href="javascript:;" class="slide-btn left" @click="handleSlide"><span>{{slideUp?'展开':'收起'}}</span></a>
        <!-- 设备管理 -->
        <DeviceManager/>
        <!-- 状态监测 -->
        <StatusDetection/>
        <!-- 视频监控 -->
        <VideoMonitoring/>
    </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
import DeviceManager from './subModules/deviceManager.vue'
import StatusDetection from './subModules/statusDetection.vue'
import VideoMonitoring from './subModules/videoMonitoring.vue'


const slideUp = ref(false)

//切换展开和收起
const handleSlide = () => {
    slideUp.value = !slideUp.value
}


</script>
