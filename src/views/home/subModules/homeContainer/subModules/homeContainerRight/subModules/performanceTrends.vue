
<template>
    <div class="group-item performance-trends">
        <h3 class="common-btn-title">性能曲线</h3>
        
        <p class="animate-liner-line"></p>
        <div class="performance-chart-wrap">
            <dv-charts
                :option="option"
                style="width:100%;height:100%;"
            />
        </div>
    </div>

</template>

<script lang='ts' setup>
const option = {
    title: {
        show: false,
    },
    grid: {
        left: '10%',
        right: '10%',
        top: '4%',
        bottom: '10%',
    },
    xAxis: {
        axisTick:{
            show: false,
        },
        axisLine:{
            style: {
                stroke: '#01DDFE',
                lineWidth: 1
            }
        },

        axisLabel:{
            style: {
                fill: '#01DDFE',
                fontSize: 10,
                rotate: 0
            }
        },

        name: "第二周",
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
    },
    yAxis: {
        name: "负荷压力值",
        nameTextStyle: {
            fill: '#01DDFE',
            fontSize: 10
        },
        data: "value",
        axisTick:{
            show: false,
        },
        axisLine:{
            style: {
                stroke: '#01DDFE',
                lineWidth: 1
            }
        },
        axisLabel:{
            style: {
                fill: '#01DDFE',
                fontSize: 10,
                rotate: 0
            }
        },
        splitLine:{
            style: {
                stroke: '#08687C',
                lineWidth: 1
            }
        }
    },
    series: [
        {
            smooth: true,
            data: [1200, 4230, 3900, 2100, 1500, 4200, 3985],
            type: "line",
            lineArea: {
                show: true,
                gradient: ["rgba(55, 162, 218, 0.6)", "rgba(55, 162, 218, 0)"]
            }
        }
    ]
};
</script>

