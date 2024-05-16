<template>
    <dv-border-box10 class="card-item">
        <div class="container">
            <h4>{{props?.data?.title}}</h4>
            <p>更新日期：{{props?.data?.updateTime}}</p>
            <p>到期日期：{{props?.data?.expireTime}}</p>
            <dv-charts :option="option" class="period-chart-gauge" />
        </div>
    </dv-border-box10>
</template>

<script lang='ts' setup>
import { PeriodModel } from '@/interface'
import { PropType } from "vue"
const props = defineProps({
    data: Object as PropType<PeriodModel>
})


const option = {
    series: [
        {
            type: 'gauge',
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 8,
            data: [
                { name: 'itemA', value: props?.data?.dayValue, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'] }
            ],
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            pointer: {
                show: false
            },
            dataItemStyle: {
                lineCap: 'round'
            },
            details: {
                show: true,
                formatter: '{value}%',
                style: {
                    fill: '#1ed3e5',
                    fontSize: 14
                }
            }
        }
    ]
}
</script>

