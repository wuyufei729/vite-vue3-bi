<template>
    <section>
        <!-- 左侧内容 -->
        <HomeContainerLeft />
        <!-- 右侧内容 -->
        <HomeContainerRight />
        <!-- 底部菜单 -->
        <HomeContainerMenu />
        
    </section>
</template>

<script lang='ts' setup>
import HomeContainerLeft from './subModules/homeContainerLeft/homeContainerLeft.vue'
import HomeContainerRight from './subModules/homeContainerRight/homeContainerRight.vue'
import HomeContainerMenu from './subModules/homeContainerMenu/homeContainerMenu.vue'
</script>
