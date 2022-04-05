<template>
    <div class="header">Memo App</div>
</template>

<!--style 속성에 scoped를 주면 component 안에서만 style이 적용된다!
예를 들면 하나의 페이지에 여러개의 component가 있고 , header 라는 class가 여러개 있을 때 특정 component의 header class 에만 style 적용이 가능하다는 소리임. -->
<style scoped>
    .header{
        text-align:center;
        padding:25px;
        border-bottom:1px solid #eee;
        background:#f7f7f7;
    }
</style>
