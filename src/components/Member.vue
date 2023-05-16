<template>
    <div class="mrmberInfo">
        <el-row class="teachers" :gutter="30">
            <!-- span栅格占据的列数，offset栅格左侧的间隔格数:offset="index > 0 ? 0 : 0
            :xs={span:12}屏幕小于768px时显示，span变为12,sm:>768;md:>992；lg:>1200 -->
            <el-col :md={span:8} :xs={span:24} :sm={span:12}>
                <h3>
                    Teachers 教师
                </h3>
                <p>
                    “If we knew what we were doing, it wouldn't be called research, would it?”<br>———爱因斯坦
                </p>
            </el-col>
            <el-col :md={span:8} v-for="(teacher, index) in teachers" :key="index"
                :xs={span:24} :sm={span:12}>
                <!-- shadow="hover" 悬浮鼠标时出现阴影 -->
                <el-card shadow="hover" :body-style="{ padding: '0px' }"
                    style="background-color: rgba(218, 242, 280, 0.24)">
                    <div class="card-left">
                        <img :src="teacher.imgUrl" class="image">
                    </div>
                    <!-- 卡片右边内容 -->
                    <!-- 上半部分 -->
                    <div class="infoDetail">
                        <div class="grade">
                            <img :src="gradeUrl"
                                style="vertical-align:middle;
                                width:18px;
                                height:18px;
                                padding:0 8px 0 0">
                            <span style="vertical-align:middle">
                                {{teacher.grade}}
                            </span>
                        </div>
                        <div style="border-top: 1px solid #dedede">
                            <div style="margin-top: 5px">
                                <!-- 点击名字打开个人主页 -->
                                <a class="infoTitle" :href="teacher.pageUrl" target="_blank">
                                    {{teacher.nameEng}}<br>
                                    {{teacher.nameCh}}
                                </a>
                            </div>
                            
                            <div class="infoSubTitle">{{teacher.major}}</div>                                
                        </div>
                    </div>
                    <!-- 邮箱 -->
                    <div class="email">
                        <!-- img样式使其与右侧文字居中 -->
                        <img :src="emailUrl"
                            style="vertical-align:middle;
                            width:20px;
                            height:20px;
                            padding:0 8px 0 0">
                        <span>{{teacher.email}}
                        </span>      
                    </div>
                    <div class="clearfix"></div>
                </el-card>
            </el-col>
        </el-row>

        <!-- 分割线 -->
        <div class="dividing-lines"></div>

        <!-- el-row的gutter 属性来指定每一栏之间的间隔 -->
        <el-row class="students" :gutter="30">
            <el-col :md={span:8} :xs={span:24} :sm={span:12}>
                <h3>
                    Students 学生
                </h3>
                <p>
                    “以梦为马，莫负韶华”<br>———海子
                </p>
            </el-col>
            <!-- span栅格占据的列数，offset栅格左侧的间隔格数:offset="index > 0 ? 0 : 0
            :xs={span:12}屏幕小于768px时显示，span变为12,sm:>768;md:>992；lg:>1200 -->
            <el-col :md={span:8} v-for="(student, index) in students" :key="index"
                :xs={span:24} :sm={span:12}>
                <!-- shadow="hover" 悬浮鼠标时出现阴影 -->
                <el-card shadow="hover" :body-style="{ padding: '0px' }"
                    style="background-color: rgba(218, 242, 280, 0.24)">
                    <!-- 卡片左边，人物图片 -->
                    <div class="card-left">
                        <img :src="student.imgUrl" class="image">
                    </div>
                    <!-- 卡片右边内容 -->
                    <!-- 上半部分 -->
                    <div class="infoDetail">
                        <!-- 年级/任教 -->
                        <div class="grade">
                            <img :src="gradeUrl"
                                style="vertical-align:middle;
                                width:18px;
                                height:18px;
                                padding:0 8px 0 0">
                            <span style="vertical-align:middle">
                                {{student.grade}}
                            </span>
                        </div>
                        <!-- 名片右边中间部分 -->
                        <div style="border-top: 1px solid #dedede">
                            <!-- 个人姓名及超链接 -->
                            <div style="margin-top: 5px">
                                <!-- 点击名字打开个人主页 -->
                                <a class="infoTitle" :href="student.pageUrl" target="_blank">
                                    {{student.nameEng}}<br>
                                    {{student.nameCh}}
                                </a>
                            </div>
                            <!-- 个人研究方向 -->
                            <div class="infoSubTitle">{{student.major}}</div>                                
                        </div>
                    </div>
                    <!-- 邮箱 -->
                    <div class="email">
                        <!-- img样式vertical-align使其与右侧文字居中 -->
                        <img :src="emailUrl"
                            style="vertical-align:middle;
                            width:20px;
                            height:20px;
                            padding:0 8px 0 0">
                        <span>
                            {{student.email}}
                        </span>
                    </div>
                    <div class="clearfix"></div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
const MS1 = "MS-1Y 研一";
const MS2 = "MS-2Y 研二";
const MS3 = "MS-3Y 研三";
const PHD1 = "PhD-1Y 博一";
const PHD2 = "PhD-2Y 博二";
const PHD3 = "PhD-3Y 博三";
const PHD4 = "PhD-4Y 博四";
const PHD5 = "PhD-5Y 博五";
const PHD6 = "PhD-6Y 博六";
export default {
    name: "Member",
    data() {
        return {
            MS1: "MS-1Y 研一",
            MS2: "MS-2Y 研二",
            MS3: "MS-3Y 研三",
            PHD1: "PhD-1Y 博一",
            PHD2: "PhD-2Y 博二",
            PHD3: "PhD-3Y 博三",
            PHD4: "PhD-4Y 博四",
            PHD5: "PhD-5Y 博五",
            PHD6: "PhD-6Y 博六",
            
            teachers: [
                {
                    nameCh: "宁兆龙",
                    nameEng: "Zhaolong Ning",
                    grade: "Prosessor 教授",
                    major: "Internet of Things, Edge Intelligence, Vehicular Network Security and Privacy, Resource Optimization",
                    email: "ningzl@cqupt.edu.cn",
                    pageUrl: "https://faculty.cqupt.edu.cn/ningzhaolong/zh_CN/index/107933/list/index.htm",
                    imgUrl: require("../assets/membersphoto/teachers/宁兆龙.jpg")
                },
                {
                    nameCh: "宋清洋",
                    nameEng: "Qingyang Song",
                    grade: "Prosessor 教授",
                    major: "Mobile Network Resource Management, Edge Computing, Internet of Vehicles, Intelligent Reflecting Surface",
                    email: "songqy@cqupt.edu.cn",
                    pageUrl: "https://faculty.cqupt.edu.cn/qysong/zh_CN/index.htm",
                    imgUrl: require("../assets/membersphoto/teachers/宋清洋.jpg")
                },
                {
                    nameCh: "王小洁",
                    nameEng: "Xiaojie Wang",
                    grade: "Prosessor 教授",
                    major: "Mobile Blockchain，Wireless Power Transfer",
                    email: "wangxj@cqupt.edu.cn",
                    pageUrl: "https://faculty.cqupt.edu.cn/wangxiaojie/zh_CN/index.htm",
                    imgUrl: require("../assets/membersphoto/teachers/王小洁.jpg")
                },
                {
                    nameCh: "亓伟敬",
                    nameEng: "Weijing Qi",
                    grade: "Lecture 讲师",
                    major: "Edge Intelligence; Vehicular Security; Wireless Resource Allocation",
                    email: "qiwj@cqupt.edu.cn",
                    pageUrl: "",
                    imgUrl: require("../assets/membersphoto/teachers/亓伟敬.jpg")
                },
            ],
            students: [
                /* 博五 */
                {
                    nameCh: "管莹莹",
                    nameEng: "Yingying Guan",
                    grade: PHD6,
                    major: "Network virtualization, Mobile Computing",
                    email: "yyingguan@126.com",
                    imgUrl: require("../assets/membersphoto/students/管莹莹.jpg")
                },
                {
                    nameCh: "孙巍",
                    nameEng: "Wei Sun",
                    grade: PHD6,
                    major: "Reconfigurable Intelligent Surface, Simultaneous Wireless Information and Power Transfer",
                    email: "sunweivv@foxmail.com",
                    imgUrl: require("../assets/membersphoto/students/孙巍.jpg")
                },
                /* 博四 */
                {
                    nameCh: "宋静",
                    nameEng: "Jing Song",
                    grade: PHD5,
                    major: "Virtual Reality, Deep Reinforcement Learning, Blockchain",
                    email: "singjingchn@foxmail.com",
                    imgUrl: require("../assets/membersphoto/students/宋静.jpg")
                },
                {
                    nameCh: "吴梦如",
                    nameEng: "Mengru WU",
                    grade: PHD5,
                    major: "Wireless Power Transfer，Edge Computing",
                    email: "mengruwu@foxmail.com",
                    imgUrl: require("../assets/membersphoto/students/吴梦如.jpg")
                },
                /* 博二 */
                {
                    nameCh: "杨震",
                    nameEng: "Zhen Yang",
                    grade: PHD3,
                    major: "Network for Federated Learning",
                    email: "yangzhencupt@foxmail.com",
                    imgUrl: require("../assets/membersphoto/students/杨震.jpg")
                },
                /* 博一 */
                {
                    nameCh: "康亚",
                    nameEng: "Ya Kang",
                    grade: PHD2,
                    major: "Resource Management",
                    email: "d210101008@stu.cqupt.edu.cn",
                    imgUrl: require("../assets/membersphoto/students/康亚.jpg")
                },
                /* 研三 */
                {
                    nameCh: "陈维熙",
                    nameEng: "Weixi Chen",
                    grade: "MS-3Y 研三",
                    major: "Wirelees Virtual reality， Mobile Edge Computing",
                    email: "18580572725@163.com",
                    imgUrl: require("../assets/membersphoto/students/陈维熙.jpg")
                },
                {
                    nameCh: "朱泽林",
                    nameEng: "Zelin Zhu",
                    grade: "MS-3Y 研三",
                    major: "5G Air Interface Waveform",
                    email: "drewzhu@foxmail.com",
                    imgUrl: require("../assets/membersphoto/students/朱泽林.jpg")
                },
                /* 研二 */
                {
                    nameCh: "豆舒楠",
                    nameEng: "Shunan Dou",
                    grade: MS3,
                    major: "Symbiotic Radio，Intelligent Reflecting Surface",
                    email: "1009608590@qq.com",
                    imgUrl: require("../assets/membersphoto/students/豆舒楠.jpg")
                },
                {
                    nameCh: "廖延静",
                    nameEng: "Yanjing Liao",
                    grade: MS3,
                    major: "Resource Allocation",
                    email: "3430007832@qq.com",
                    imgUrl: require("../assets/membersphoto/students/廖延静.jpg")
                },
                {
                    nameCh: "田照云",
                    nameEng: "Zhaoyun Tian",
                    grade: MS3,
                    major: "IRS，WPCN security",
                    email: "1041786560@qq.com",
                    imgUrl: require("../assets/membersphoto/students/田照云.jpg")
                },
                {
                    nameCh: "王辉",
                    nameEng: "Hui Wang",
                    grade: MS3,
                    major: "Symbiotic Radio，IRS，Physical Layer Security",
                    email: "HHWang0921@163.com",
                    imgUrl: require("../assets/membersphoto/students/王辉.jpg")
                },
                {
                    nameCh: "徐桂喜",
                    nameEng: "Guixi Xu",
                    grade: MS3,
                    major: "UAV，Internet of Vehicle",
                    email: "913241475@qq.com",
                    imgUrl: require("../assets/membersphoto/students/徐桂喜.jpg")
                },
                {
                    nameCh: "张丽杰",
                    nameEng: "Lijie Zhang",
                    grade: MS3,
                    major: "Mobile Edge Computing",
                    email: "1298256315@qq.com",
                    imgUrl: require("../assets/membersphoto/students/张丽杰.jpg")
                },

                /* 研一 */
                {
                    nameCh: "欧阳瑞崎",
                    nameEng: "Ruiqi Ouyang",
                    grade: MS2,
                    major: "Network Security",
                    email: "ouyangruiqi77@163.com",
                    imgUrl: require("../assets/membersphoto/students/欧阳瑞崎.jpg")
                },
                {
                    nameCh: "郭琪",
                    nameEng: "Qi Guo",
                    grade: MS2,
                    major: "ITS(intelligent transportation systems)，IoV",
                    email: "guoqicqupt@163.com",
                    imgUrl: require("../assets/membersphoto/students/郭琪.jpg")
                },
                {
                    nameCh: "李家梦",
                    nameEng: "Jiameng Li",
                    grade: MS2,
                    major: "Unmanned Aerial Vehicles，Mobile Edge Computing，Wireless Power Transfer",
                    email: "krystal_liruan@sina.com",
                    imgUrl: require("../assets/membersphoto/students/李家梦.jpg")
                },
                {
                    nameCh: "刘贺",
                    nameEng: "He Liu",
                    grade: MS2,
                    major: "UAV ad hoc networking",
                    email: "s210131126@stu.cqupt.edu.cn",
                    imgUrl: require("../assets/membersphoto/students/刘贺.jpg")
                },
                {
                    nameCh: "杨彪",
                    nameEng: "Biao Yang",
                    grade: MS2,
                    major: "UAV ad hoc networking",
                    email: "994880908@qq.com",
                    imgUrl: require("../assets/membersphoto/students/杨彪.jpg")
                },
                {
                    nameCh: "祝海琳",
                    nameEng: "Hailin Zhu",
                    grade: MS2,
                    major: "BlockChain，Internet of Vehicles",
                    email: "zhuhal10@163.com",
                    imgUrl: require("../assets/membersphoto/students/祝海琳.jpg")
                },
                {
                    nameCh: "胡浩",
                    nameEng: "Hao Hu",
                    grade: MS2,
                    major: "Machine Learning，MEC，UAV",
                    email: "S210101045@stu.cqupt.edu.cn",
                    imgUrl: require("../assets/membersphoto/students/胡浩.jpg")
                },
                {
                    nameCh: "王杰",
                    nameEng: "Jie Wang",
                    grade: MS2,
                    major: "Internet of Vehicles Security，BlockChain",
                    email: "1394391863@qq.com",
                    imgUrl: require("../assets/membersphoto/students/王杰.jpg")
                },
                {
                    nameCh: "邓鶱闯",
                    nameEng: "Xianchuang Deng",
                    grade: MS2,
                    major: "Network Slicing",
                    email: "1097402982@qq.com",
                    imgUrl: require("../assets/membersphoto/students/邓鶱闯.jpg")
                },
                {
                    nameCh: "李振斌",
                    nameEng: "Zhenbin Li",
                    grade: MS2,
                    major: "Internet of vehicles",
                    email: "397852322@qq.com",
                    imgUrl: require("../assets/membersphoto/students/李振斌.jpg")
                },
                {
                    nameCh: "李慧",
                    nameEng: "Hui Li",
                    grade: MS2,
                    major: "Cell-free 、Intelligent Reflecting Surface",
                    email: "1104095073@qq.com",
                    imgUrl: require("../assets/membersphoto/students/李慧.jpg")
                },
                {
                    nameCh: "张茂",
                    nameEng: "Mao Zhang",
                    grade: MS2,
                    major: "Cell-free 、Intelligent Reflecting Surface",
                    email: "2504178347@qq.com",
                    imgUrl: require("../assets/membersphoto/students/张茂.jpg")
                },
                {
                    nameCh: "任贵易",
                    nameEng: "Guiyi Ren",
                    grade: MS2,
                    major: "SR，RIS，V2X",
                    email: "1208590991@qq.com",
                    imgUrl: require("../assets/membersphoto/students/任贵易.jpg")
                },
                {
                    nameCh: "万金鑫",
                    nameEng: "Jinxin Wan",
                    grade: MS2,
                    major: "SR，RIS，V2X",
                    email: "838251031@qq.com",
                    imgUrl: require("../assets/membersphoto/students/万金鑫.jpg")
                },
            ],
            gradeUrl: require("../assets/logo/grade-logo.png"),
            emailUrl: require("../assets/logo/email.png"),
        }
    }
    
}
</script>

<style scoped>
    .mrmberInfo{
        width: 100%;
        height: 100%;
    }


    /* 分割线 */
    .dividing-lines {
        position: relative;
        height: 55px;
    }
    /* 伪元素画横线 */
    .dividing-lines::after {
        content: '';
        position: absolute;
        left: 0px;
        top: 15px;
        bottom: 40px;
        height: 1px;
        width: 100%;
        background-color: #bbbbbb ;
    }
    
    .el-row {
        justify-content: space-between;
    }    
    .el-row:last-child {
        margin-bottom: 0;
    }
    .el-col {
        border-radius: 4px;
        margin-bottom: 25px;
        text-align: center;
    }
    .el-col:last-child {
        margin-bottom: 0;
    }
    /* 卡片整体样式 */
    .el-card {
        border-color: rgb(233, 233, 233) !important;
        width: 100%;
        float: left;
        display: block;
    }
    /* 强行自定义改卡片背景色 */
/*     .el-card__body {
        background-color: rgba(218, 242, 252, 0.247);
    } */
    /* 卡片左右分布,左边的样式，宽高规定内部图片的大小 */
    .card-left {
        display: block;
        float: left;
        overflow: hidden;
        width: 120px;
        height: 160px;
    }
    /***************************************/
    /* 卡片左边的图片样式,图片需要长宽比4:3大小 */
    .image {
        width: 100%;
        height: 100%;
        display: block;
    }
    /***************************************/
    /* 卡片右边上部分 */
    .infoDetail {
        height: 128px;
        padding: 0px 0 10px 0;
        display: block;
        font-size: 12px;
    }
    .grade {
        color: rgb(87, 87, 87);
        padding: 0 0 5px 0px;
    }
    /* 个人信息名字 */
    .infoTitle {
        font-weight: 800;
        font-size: 16px;
        /* 去掉超链接下划线 */
        text-decoration: none;
        color: black;
        margin-top: 0px;
    }
    /* 个人信息研究方向 */
    .infoSubTitle{
        line-height: 18px;
        font-size: 13px;
        color: rgb(87, 87, 87);
        padding: 4px 0 4px 0;
    }
    /* 邮箱div样式 */
    .email {
        display: block;
        height: 20px;
        width: 100%;
        padding: 1px 0;
        font-size: 12px;
        color: rgb(87, 87, 87);
        border-top: 1px solid #dedede
    }
    /* 卡片最后清除样式，避免互相影响 */
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    
    .clearfix:after {
        clear: both
    }
</style>