<template>
    <div class="right">
        <a href="javascript:;" class="slide-btn right"><span>收起</span></a>
        <!-- 生命周期监测 -->
        <PeriodicDetection/>
        <!-- 性能曲线 -->
        <PerformanceTrends/>
    </div>
    
</template>

<script lang='ts' setup>
import PerformanceTrends from './subModules/performanceTrends.vue'
import PeriodicDetection from './subModules/periodicDetection.vue';
</script>
