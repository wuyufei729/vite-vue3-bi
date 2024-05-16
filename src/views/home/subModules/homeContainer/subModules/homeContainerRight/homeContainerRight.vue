<template>
    <div class="right" :class="slideUp?'slide-up':'slide-down'">
        <a href="javascript:;" class="slide-btn right" @click="handleSlide"><span>{{slideUp?'展开':'收起'}}</span></a>
        <!-- 生命周期监测 -->
        <PeriodicDetection/>
        <!-- 性能曲线 -->
        <PerformanceTrends/>
    </div>
    
</template>

<script lang='ts' setup>
import { ref } from 'vue';
import PerformanceTrends from './subModules/performanceTrends.vue'
import PeriodicDetection from './subModules/periodicDetection.vue';


const slideUp = ref(false)

//切换展开和收起
const handleSlide = () => {
    slideUp.value = !slideUp.value
}
</script>
