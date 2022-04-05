<template>
    <div class="memo">
        <div class="act">
            <button class="btn btn-primary" @click="add()">+메모 추가</button>
        </div>
        <ul>
            <li v-for="d in state.data" :key="d.id" @click="edit(d.id)">{{d.content}}
            </li>
        </ul>
    </div>
</template>
<!--scss 를 주면 memo ul 안에 li 영역을 따로 사용할 수 있음
cd project명
npm i node-sass@6.0.1 -D
-D option은 배포환경이 아닌 개발환경에서만!
npm i sass-loader@10.2.0 -D
 -->

 <!-- 
 return 해준 data 객체를 template 안에서 사용할 수 있음!
 반대로 template 안의 객체를 script 안으로 불러올 수도 있음 (2-way-binding)

 cf ) return 문 안에는 객체 형태로!!
 -->
<script>

    import {reactive} from 'vue';
    import axios from 'axios';

    export default{
        setup(){
            const state=reactive({
                data:[]
            });
            const add = () => {

            const content = prompt("내용을 입력해주세요");

            if(!content){
                alert("내용을 입력해주세요");
                return add();
            };


            axios.post("/api/memos",{content}).then((res)=>{
                console.log(res);
                state.data = res.data;
                });
            };

            const edit = (id)=>{
            const content = prompt('내용을 입력해주세요',state.data.find(d=>d.id===id).content);
            console.log(content);
            // data 수정시 사용하는 method : put
            axios.put("/api/memos/"+id,{content}).then((res)=>{
                state.data = res.data;
            });
        };


            //front-end 에서 back-end 에 데이터 요청하는 것!
            axios.get("/api/memos").then((res)=>{
                console.log(res);
                state.data = res.data;
            });
            
            return {state,add,edit};
        },
    }
</script>

<style lang="scss" scoped>
    .memo {
        .act{
            padding:10px 10px 5px 5px;
            text-align:right;
        }

        ul {
        border-top: 1px solid #eee;
        list-style:none;
        padding:15px;
        margin:0;

        li {
            padding:15px;
            margin:10px 0;
            border: 1px solid #eee;

        }
    }
}

</style>
