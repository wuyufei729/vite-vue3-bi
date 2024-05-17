<template>
    <div class="group-item device-manager" v-loading="isLoading">
        <h3 class="common-btn-title">设备管理</h3>
        <p class="animate-liner-line"></p>
        <ul>
            <li>最近小修日期 <span>2022-03-03</span></li>
            <li>最近大修日期 <span>2022-03-03</span></li>
            <li>最近故障次数 <span>1次</span></li>
            <li>重启设备次数 <span>3次</span></li>
            <li>下次年度检测 <span>2022-03-03</span></li>
            <li>下次周期性检测 <span>2022-03-03</span></li>
        </ul>
        <dv-charts :option="option" class="device-chart-gauge" />
    </div>
</template>

<script lang='ts' setup>
import {reactive, ref} from "vue"
import UseChartHook from '@/hook/chartHook'
const { isLoading } = UseChartHook('deviceManager');
const option = reactive({
    title: {
        text: '设备正常率',
        offset: [0, 80],
        style: {
            fill: '#3F66D0',
            fontSize: 14,
        }
    },
    series: [
        {
            type: 'gauge',
            data: [{value: 80, gradient:['#21305F','#2E4890','#3F66D0'], localGradient:true}],
            center: ['50%', '50%'],
            arcLineWidth: 25,
            backgroundArc:{
                show: true,
                style:{
                    stroke: '#04DCF2',
                }
            },
            
            details:{
                show: true,
                formatter: '{value}%',
            },
            
            axisLabel: {
                formatter: '{value}%',
                labelGap: 200,
                style: {
                    fill: 'red'
                }
            },
            axisTick: {
                show: false,
                style: {
                    stroke: '#fff'
                }
            },
            pointer:{
                show: false,
            },
            animationCurve: 'easeInOutBack'
        }
    ]
})



</script>
