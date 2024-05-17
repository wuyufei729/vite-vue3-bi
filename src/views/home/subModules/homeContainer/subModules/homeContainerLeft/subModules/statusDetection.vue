<template>
    
    <div class="group-item status-detection" v-loading="isLoading">
        <h3 class="common-btn-title">状态监测</h3>
        <p class="animate-liner-line"></p>
        <ul>
            <li>空压机散热 <span class="warning"></span></li>
            <li>空压机运行 <span></span></li>
            <li>储气罐排水 <span class="error"></span></li>
            <li>空压机电源 <span></span></li>
        </ul>
    </div>
    
</template>

<script lang='ts' setup>
import UseChartHook from '@/hook/chartHook'
const { isLoading } = UseChartHook('statusDetection');
</script>
