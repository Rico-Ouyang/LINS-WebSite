<template>
  <div>
    <!-- 页面标题 -->
    <div>
      <div>
        <h2>资源</h2>
      </div>
      <hr />
    </div>

    <!-- 资源主体内容-->
    <div class="container-main">
      <el-card class="box-card">
        <div slot="header" class="box-header">
          <h3>大家的论文和成果 ✨</h3>
        </div>
        <div v-for="(paper,index) in papers" :key="index" class="card-items">
          <a :href="paper.paperUrl" target="blank">📜 <b>{{paper.name}}</b></a>
          <div class="key">提取码：{{paper.key}}</div>
        </div>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="box-header">
          <h3>代码分享！🐱‍🏍</h3>
        </div>
        <div v-for="(code,index) in codes" :key="index" class="card-items">
          <a :href="code.codeUrl" target="blank">🏹 <b>{{code.name}}</b></a>
          <div class="key">提取码：{{code.key}}</div>
        </div>
      </el-card>


      <el-card class="box-card">
        <div slot="header" class="box-header">
          <h3>答辩PPT ~ 学习分享 💻</h3>
        </div>
        <div v-for="(ppt,index) in PPTs" :key="index" class="card-items">
          <a :href="ppt.pptUrl" target="blank">✍ <b>{{ppt.name}}</b></a>
          <div class="key">提取码：{{ppt.key}}</div>
        </div>
      </el-card>
    </div>

  </div>
</template>

<script >
export default {
  name: "Publication",
  data() {
    return {
      papers: [
        {
          name: '基于移动边缘计算的通信与计算资源协同优化-董沛然',
          paperUrl: 'https://pan.baidu.com/s/1Fl6YBr7o_cfNm6LxacUe3w',
          key: 'emy9'
        },
        {
          name: '基于脑电和机器学习的脑功能网络异常分析-孙兰芳',
          paperUrl: 'https://pan.baidu.com/s/12iWzQcN3CWczOKhRPamJBw',
          key: '78sr'
        },
        {
          name: '基于区块链的智能物联网通信和计算资源管理-孙守铭',
          paperUrl: 'https://pan.baidu.com/s/1JGVpqKLozkKMi1mYx3Zc5A',
          key: 'cyd5'
        },
        {
          name: '基于无服务器架构的卖家合规系统设计与实现-许和风',
          paperUrl: 'https://pan.baidu.com/s/1V9OvGrYVXDPEda-TlBnnIA',
          key: 'dc22'
        },
      ],
      codes: [
        {
          name: 'ScienceChina代码-孙守铭',
          codeUrl: 'https://pan.baidu.com/s/1jTS2XFlQwI0PdCVifcHYfw',
          key: '5f2n'
        },
        {
          name: 'ScienceChina论文源文件-孙守铭',
          codeUrl: 'https://pan.baidu.com/s/1SJb-nHtJtYK1qMmRICEKqA',
          key: 'tw8o'
        },
        {
          name: 'TITS代码-孙守铭',
          codeUrl: 'https://pan.baidu.com/s/1w7YeH50dtHVabrLo08N_ug',
          key: 'rsan'
        },
        {
          name: 'TITS论文源文件-孙守铭',
          codeUrl: 'https://pan.baidu.com/s/1DcUSyP3egqSnOGgcLckIgw',
          key: 'baqo'
        },
        {
          name: 'TMC代码-孙守铭',
          codeUrl: 'https://pan.baidu.com/s/1v82UksUUTDkZzA6p-r3drA',
          key: '3y6h'
        },
        {
          name: 'TMC论文源文件-孙守铭',
          codeUrl: 'https://pan.baidu.com/s/1T5ccZ_CsXklpULGcgo73JQ',
          key: 's0c9'
        },
        {
          name: 'Access论文源文件-孙兰芳',
          codeUrl: 'https://pan.baidu.com/s/18H9XwTY5cHZVN8lcHj898A',
          key: 'xo4k'
        },
      ],
      PPTs: [
        {
          name: '毕业答辩-董沛然',
          pptUrl: 'https://pan.baidu.com/s/1Fl6YBr7o_cfNm6LxacUe3w',
          key: 'emy9'
        },
        {
          name: '答辩PPT-许和风',
          pptUrl: 'https://pan.baidu.com/s/1V9OvGrYVXDPEda-TlBnnIA',
          key: 'dc22'
        }
      ]
    };
  },
};
</script>

<style scoped>
/* 分割线 */
.dividing-lines {
  position: relative;
  height: 30px;
}
/* 伪元素画横线 */
.dividing-lines::after {
  content: "";
  position: absolute;
  left: 0px;
  top: 15px;
  height: 1px;
  width: 100%;
  background-color: #bbbbbb;
}

.container-main {
  margin: 30px 0px 30px 0px;
  padding: 0px;
}
.box-card {
  margin: 40px 0px;
}
.box-header {
  text-align: center;
}
a {
  /* 去掉超链接下划线 */
  text-decoration: none;
  color: black;
  font-size: 16px;
  line-height: 35px;
}
/* 提取码 */
.key {
  font-size: 14px;
}

@media (max-width: 450px) {
  
}
</style>