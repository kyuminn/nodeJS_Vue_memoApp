const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  // eslint error handling
  lintOnSave:false,
  // url이 api로 시작하는 요청은 target으로 보내주라는 의미.
  devServer:{
    proxy:{
      "/api":{
        target:"http://localhost:3000"
      }
    }
  },

});



