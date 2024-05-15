<template>
    <div class="group-item period-detection">
        <h3 class="common-btn-title">生命周期监测</h3>
        <dv-decoration3 style="width:100px;height:14px;" class="period-decoration"/>
        <p class="animate-liner-line"></p>
        <ul>
            <li v-for="(item,i) in data.arr" :key="item.title+i">
                <PeriodCard :data="item"></PeriodCard>
            </li>
        </ul>
    </div>
    
    
</template>

<script lang='ts' setup>
import PeriodCard from '@/components/Card/periodCard.vue'
import { reactive } from 'vue';
import { PeriodModel } from '@/interface'

const data = reactive({
    arr: Array<PeriodModel>()
});

data.arr = [
    {
        title: '冷却剂滤芯',
        updateTime: '2023-03-12',
        expireTime: '2023-05-21',
        dayValue: 30
    },
    {
        title: '空气滤芯',
        updateTime: '2023-03-12',
        expireTime: '2023-05-21',
        dayValue: 46
    },
    {
        title: '冷却剂滤芯',
        updateTime: '2023-03-12',
        expireTime: '2023-05-21',
        dayValue: 60
    },
    {
        title: '空气滤芯',
        updateTime: '2023-03-12',
        expireTime: '2023-05-21',
        dayValue: 16
    }
]
</script>

