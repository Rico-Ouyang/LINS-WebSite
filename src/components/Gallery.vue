<template>
  <div>
    <!-- 页面标题 -->

    <el-row :gutter="30">
      <h3>
        实验室获奖情况
        <hr />
      </h3>

      <el-col
        :span="12"
        v-for="(student, o) in students"
        :key="o"
        :xs="{ span: 24 }"
        :md="{ span: 12 }"
        :lg="{ span: 8 }"
        :xl="{ span: 6 }"
      >
        <div class="box">
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <el-image
              :src="student.url"
              :preview-src-list="Array(student.srcList)"
              class="image"
            ></el-image>

            <!-- <img src="../assets/1.jpg" class="image" /> -->
            <div style="padding: 0 0 14px 28px; height: 110px">
              <section class="vertical">
                <br />
                <p>{{ student.message }}</p>
                <p>{{ student.time }}</p>
              </section>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>

    <!-- 走马灯效果 -->
    <h3 class="activity">
      实验室活动
      <hr />
    </h3>

    <!-- 走马灯效果开始 -->
    <el-carousel
      :interval="3000"
      type="card"
      height="40vh"
      class="scenery-el-carousel"
    >
      <el-carousel-item
        class="scenery-carousel-item"
        v-for="(item, index) in scenerys"
        :key="index"
        style="margin: 0px"
      >
        <div class="sceneryPhoto-box">
          <img :src="item.url" />
        </div>
      </el-carousel-item>
    </el-carousel>

    <!-- 屏幕小于450时显示基础走马灯效果 -->
    <el-carousel :interval="3000" class="small-scenery-el-carousel">
      <el-carousel-item
        class="scenery-carousel-item"
        v-for="(item, index) in scenerys"
        :key="index"
        style="margin: 0px"
      >
        <div class="sceneryPhoto-box">
          <el-image
            :src="item.url"
            :preview-src-list="Array(item.url)"
            class="image"
          ></el-image>
<!--           <img :src="item.url" /> -->
        </div>
      </el-carousel-item>
    </el-carousel>
    <!-- 小屏走马灯效果 -->
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      currentDate: new Date(),

      students: [
        {
          url: "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/Highly%20Cited%20Researchers%2020211.png",
          srcList:
            "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/Highly%20Cited%20Researchers%202021.png",
          message: "Highly Cited Researchers 2021",
          time: "2021年",
        },
        {
          url: "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/%E5%9B%BE%E7%89%8741.png",
          srcList:
            "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/%E5%9B%BE%E7%89%874.png",
          message: "Best Paper Award",
          time: "2021年11月",
        },
        {
          url: "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/%E9%87%8D%E5%BA%86%E8%8B%B1%E6%89%8D%E8%AE%A1%E5%88%921.png",
          srcList:
            "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/%E9%87%8D%E5%BA%86%E8%8B%B1%E6%89%8D%E8%AE%A1%E5%88%92.png",
          message: "重庆英才计划",
          time: "2020年11月",
        },
        {
          url: "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/%E7%88%B1%E6%80%9D%E7%BB%B4%E5%B0%942020%E4%B8%AD%E5%9B%BD%E9%AB%98%E8%A2%AB%E5%BC%95%E5%AD%A6%E8%80%851.png",
          srcList:
            "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/%E7%88%B1%E6%80%9D%E7%BB%B4%E5%B0%942020%E4%B8%AD%E5%9B%BD%E9%AB%98%E8%A2%AB%E5%BC%95%E5%AD%A6%E8%80%85.png",
          message: "爱思维尔2020中国高被引学者",
          time: "2020年11月",
        },
        {
          url: "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/TVT%E6%9C%80%E4%BD%B3%E8%AE%BA%E6%96%871.jpg",
          srcList:
            "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/TVT%E6%9C%80%E4%BD%B3%E8%AE%BA%E6%96%87.jpg",
          message: "2020 Best Land Transportation Paper Award",
          time: "2020年10月",
        },
        {
          url: "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/%E9%A6%99%E6%B1%9F%E5%AD%A6%E8%80%851.png",
          srcList:
            "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/%E9%A6%99%E6%B1%9F%E5%AD%A6%E8%80%85.png",
          message: "香江学者",
          time: "2019年03月",
        },
        {
          url: "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/ISJ%E6%9C%80%E4%BD%B3%E8%AE%BA%E6%96%871.jpg",
          srcList:
            "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/ISJ%E6%9C%80%E4%BD%B3%E8%AE%BA%E6%96%87.jpg",
          message: "2019 IEEE Systems Journal Bast Paper Award",
          time: "2019年",
        },
        /* {
          url: "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/%E5%9B%BE%E7%89%8751.png",
          srcList:
            "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/%E5%9B%BE%E7%89%875.png",
          message: "CITS 2018 Best Paper Award",
          time: "2018年6月",
        }, */
        {
          url: "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/%E5%9B%BE%E7%89%8761.png",
          srcList:
            "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/%E5%9B%BE%E7%89%876.png",
          message: "DataCom-2017 BEST PAPER AWARD",
          time: "2017年",
        },
        {
          url: "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/ACM%E4%BC%98%E5%8D%9A20151.png",
          srcList:
            "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/ACM%E4%BC%98%E5%8D%9A2015.png",
          message: "2015 ACM DALIAN DOCTORAL DISSERTATION AWARD",
          time: "2015年5月",
        },

        {
          url: "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/AI-20001.png",
          srcList: "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/AI-2000.png",
          message: "A2000 Most Influential Scholar Award Honorable Mention",
          time: "2022年1月",
        },
        {
          url: "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/%E7%8E%8B%E5%B0%8F%E6%B4%81%E9%9D%92%E5%B9%B4%E4%BA%BA%E6%89%8D1.png",
          srcList:
            "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/%E7%8E%8B%E5%B0%8F%E6%B4%81%E9%9D%92%E5%B9%B4%E4%BA%BA%E6%89%8D.png",
          message: "青年人才托举工程",
          time: "2020年2月",
        },

        {
          url: "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/ACM%E4%BC%98%E5%8D%9A20191.jpg",
          srcList:
            "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/ACM%E4%BC%98%E5%8D%9A2019.jpg",
          message: "2019 ACM DALIAN DOCTORAL DISSERTATION AWARD",
          time: "2019年",
        },

        {
          url: "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/%E5%9B%BE%E7%89%8731.png",
          srcList:
            "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/%E5%9B%BE%E7%89%873.png",
          message: "辽宁省自然科学奖学术成果奖一等奖",
          time: "2019年11月",
        },

        {
          url: "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/%E9%9D%92%E5%B9%B4%E4%BA%BA%E6%89%8D%E6%89%98%E4%B8%BE%E5%B7%A5%E7%A8%8B1.png",
          srcList:
            "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/%E9%9D%92%E5%B9%B4%E4%BA%BA%E6%89%8D%E6%89%98%E4%B8%BE%E5%B7%A5%E7%A8%8B.png",
          message: "青年人才托举工程",
          time: "2018年02月",
        },
        {
          url: require("../assets/gallery/ACM新星1.jpg"),
          srcList: require("../assets/gallery/ACM新星.jpg"),
          message: "2017 ACM Dalian RISING STAR AWARD",
          time: "2017年",
        },
        {
          url: "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/%E5%9B%BE%E7%89%8721.png",
          srcList:
            "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/%E5%9B%BE%E7%89%872.png",
          message: "辽宁省自然科学奖学术成果奖一等奖",
          time: "2017年9月",
        },
        {
          url: "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/%E5%9B%BE%E7%89%8711.png",
          srcList:
            "http://img.lins-cqupt.cn/%E8%8E%B7%E5%A5%96/%E5%9B%BE%E7%89%871.png",
          message: "辽宁省自然科学奖学术成果奖壹等",
          time: "2013年8月",
        },
      ],
      scenerys: [
        {
          url: "http://img.lins-cqupt.cn/%E6%A0%A1%E5%86%85%E6%99%AF%E8%89%B21.jpg",
        },
        {
          url: "http://img.lins-cqupt.cn/%E6%A0%A1%E5%86%85%E6%99%AF%E8%89%B22.jpg",
        },
        {
          url: "http://img.lins-cqupt.cn/%E6%A0%A1%E5%86%85%E6%99%AF%E8%89%B23.jpg",
        },
        {
          url: "http://img.lins-cqupt.cn/%E6%A0%A1%E5%86%85%E6%99%AF%E8%89%B24.jpg",
        },
        {
          url: "http://img.lins-cqupt.cn/%E6%A0%A1%E5%86%85%E6%99%AF%E8%89%B25.jpg",
        },
        {
          url: "http://img.lins-cqupt.cn/%E6%B4%BB%E5%8A%A8.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.el-row {
  margin: 40px 0 100px 0;
}
.el-carousel {
  margin-top: 15px;
}
.el-row h3 {
  margin: 20px;
}
.activity {
  margin-bottom: 50px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}
.box {
  margin-bottom: 30px;
}

.image {
  width: 100%;
  /* height: 20vw; */
  display: block;
  /* text-align: center; */
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.vertical {
  border-left: 3px solid rgb(0, 183, 255);
  margin-left: -1px;
  padding-left: 5px;
  font-family: "Lucida Bright", "Open Sans";
  font-style: oblique;
}

/* 走马灯效果 */
/******* 风景走马灯效果 *********/
.scenery-el-carousel {
  display: block;
  overflow: hidden;
}
.small-scenery-el-carousel {
  display: none;
}
.sceneryPhoto-box {
  width: 100%;
}
.sceneryPhoto-box img {
  width: 100%;
  height: 25vw;
}

@media (max-width: 1200px) {
  .icon-box {
    width: 100%;
    margin: 15px 0 0 0;
    height: auto;
  }

  /* 显示大的走马灯 */
  .scenery-el-carousel {
    display: block;
    width: 100%;
    height: 25vh;
    overflow: hidden;
  }
  /* 每个图片的box */
  .sceneryPhoto-box {
    width: 100%;
    height: 25vh;
  }
  /* box里面的图片 */
  .sceneryPhoto-box .el-image {
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 450px) {
  /* 隐藏大走马灯 */
  .scenery-el-carousel {
    display: none;
  }
  /* 显示小走马灯 */
  .small-scenery-el-carousel {
    display: block;
    width: 100%;
    height: 25vh;
    overflow: hidden;
  }
}
</style>
