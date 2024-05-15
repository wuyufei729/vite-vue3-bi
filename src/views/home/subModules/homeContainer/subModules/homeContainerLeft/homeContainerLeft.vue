<template>
    <div class="left">
        <a href="javascript:;" class="slide-btn left"><span>收起</span></a>
        <!-- 设备管理 -->
        <DeviceManager/>
        <!-- 状态监测 -->
        <StatusDetection/>
        <!-- 视频监控 -->
        <VideoMonitoring/>
    </div>
</template>

<script lang='ts' setup>
import DeviceManager from './subModules/deviceManager.vue'
import StatusDetection from './subModules/statusDetection.vue'
import VideoMonitoring from './subModules/videoMonitoring.vue'


</script>
