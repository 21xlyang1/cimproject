<template>
  <div class="p-3">
    <div class="card" style="background: #2d3035; color: aliceblue">
      <div class="card-header">文章列表</div>
      <div class="card-body">
        <!-- 搜索栏 -->
        <div class="d-flex justify-content-center align-items-center">
          <div class="input-group mb-3 w-50">
            <input
              type="text"
              class="form-control border-primary-subtle"
              placeholder="搜索常驻人员"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              v-model="search"
              style="background: rgb(0, 0, 0, 0.85); color: aliceblue"
            />
            <button
              class="btn p-1 btn-outline-primary"
              type="button"
              id="button-addon2"
              @click="getartInf"
            >
              <img
                src="../assets/通用图标/搜索.png"
                alt=""
                style="height: 30px"
              />
            </button>
          </div>
        </div>
        <!-- 排序方式 -->
        <!-- <select class="form-select w-25" style="background: #2d3035; color: aliceblue" aria-label="Default select example">
          <option selected>选择排序方式</option>
          <option value="1">最新发布</option>
          <option value="2">最多阅读</option>
          <option value="3">最多点赞</option>
          <option value="4">最多收藏</option>
          <option value="5">最多评论</option>
          <option value="6">最多字数</option>
        </select> -->
        <!-- 操作 -->
        <div class="d-flex justify-content-between align-items-center">
          <div class="form-check"></div>
          <div class="">
            <button class="btn p-1">
              <img
                src="../assets/通用图标/删除.png"
                alt=""
                style="height: 20px"
              />
            </button>
            <button class="btn p-1">
              <img
                src="../assets/通用图标/添加.png"
                alt=""
                style="height: 20px"
              />
            </button>
          </div>
        </div>
        <!-- 表格 -->
        <table
          class="table table-striped table-centered mb-0"
          style="color: aliceblue"
        
        >
          <thead>
            <tr>
              <th>姓名</th>
              <th>年龄</th>
              <th>性别</th>
              <th>电话</th>
              <th>人员类型</th>
              <th>住址</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr  v-for="item in showInf" :key="item.Id">
              <!-- 姓名 -->
              <td class="table-user tdcolor" style="color: #eceaea">
                {{ item.realname }}
              </td>

              <!-- 年龄 -->
              <td
                class="text-truncate"
                @mouseover="window.console.log('fasd')"
                style="max-width: 150px"
              >
                {{ item.age }}
              </td>

              <!-- 性别 -->
              <td>{{ item.sex }}</td>
              <!-- 电话 -->
              <td>
                <span
                  v-for="item2 in item.Label"
                  :key="item2.ID"
                  class="badge rounded-pill bg-secondary"
                  >{{ item.phone }}</span
                >
              </td>
              <!-- 人员类型 -->
              <td class="text-truncate" style="max-width: 150px">
                {{ item.type }}
              </td>
              <!-- 住址 -->
              <td class="text-truncate" style="max-width: 150px">
                {{ item.address }}
              </td>
              <!-- 操作 -->
              <td>
                <div class="d-flex align-items-center justify-content-evenly">
                  <button class="btn p-0 border-0 col">
                    <img
                      src="../assets/通用图标/修改.png"
                      alt=""
                      style="height: 20px"
                    />
                  </button>
                  <button class="btn p-0 border-0 col">
                    <img
                      src="../assets/通用图标/删除.png"
                      alt=""
                      style="height: 20px"
                    />
                  </button>
                  <button class="btn p-0 border-0 col">
                    <img
                      src="../assets/通用图标/添加.png"
                      alt=""
                      style="height: 20px"
                    />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- 分页导航 -->
        <div class="overflow-auto d-flex justify-content-center mt-3">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            first-number
            style="background: #000"
          ></b-pagination>
        </div>
        <button class="btn btn-danger" @click="getartInf">adfs</button>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "@/utils/http";
export default {
  name: "adminArtChe",
  data() {
    return {
      label: [{ ID: 1, Name: "后端" }],
      choosed: [],
      rows: 99,
      perPage: 10,
      currentPage: 2,
      showInf: [
        {
          realname: "王小刚",
          age: "26",
          sex: "男",
          phone: "1231231222",
          type: "村民",
          address: "发斯蒂芬进化萨",
        },
        {
          realname: "王小刚",
          age: "26",
          sex: "男",
          phone: "1231231222",
          type: "村民",
          address: "发斯蒂芬进化萨",
        },
        {
          realname: "王小刚",
          age: "26",
          sex: "男",
          phone: "1231231222",
          type: "村民",
          address: "发斯蒂芬进化萨",
        },
        {
          realname: "王小刚",
          age: "26",
          sex: "男",
          phone: "1231231222",
          type: "村民",
          address: "发斯蒂芬进化萨",
        },
        {
          realname: "王小刚",
          age: "26",
          sex: "男",
          phone: "1231231222",
          type: "村民",
          address: "发斯蒂芬进化萨",
        },
        {
          realname: "王小刚",
          age: "26",
          sex: "男",
          phone: "1231231222",
          type: "村民",
          address: "发斯蒂芬进化萨",
        },
        {
          realname: "王小刚",
          age: "26",
          sex: "男",
          phone: "1231231222",
          type: "村民",
          address: "发斯蒂芬进化萨",
        },
        {
          realname: "王小刚",
          age: "26",
          sex: "男",
          phone: "1231231222",
          type: "村民",
          address: "发斯蒂芬进化萨",
        },
        {
          realname: "王小刚",
          age: "26",
          sex: "男",
          phone: "1231231222",
          type: "村民",
          address: "发斯蒂芬进化萨",
        },
        {
          realname: "王小刚",
          age: "26",
          sex: "男",
          phone: "1231231222",
          type: "村民",
          address: "发斯蒂芬进化萨",
        },
        {
          realname: "王小刚",
          age: "26",
          sex: "男",
          phone: "1231231222",
          type: "村民",
          address: "发斯蒂芬进化萨",
        },
        {
          realname: "王小刚",
          age: "26",
          sex: "男",
          phone: "1231231222",
          type: "村民",
          address: "发斯蒂芬进化萨",
        },
      ],
      articleInf: [],
      search: "",
    };
  },
  methods: {
    // getartInf() {
    //   var LabelId = [];
    //   if (this.choosed != [])
    //     for (var i = 0; i < this.choosed.length; i++) {
    //       LabelId.push(this.choosed[i].ID);
    //     }
    //   get("/article/getinflist", {
    //     Keyword: this.search,
    //     LabelId: LabelId,
    //     Order: 0,
    //   }).then(
    //     (Response) => {
    //       console.log("请求成功", Response);
    //       this.articleInf = Response;
    //       //去重
    //       for (var k = 0; k < this.articleInf.length; k++) {
    //         for (var i = 0; i < this.articleInf[k].Label.length; i++) {
    //           for (var j = i + 1; j < this.articleInf[k].Label.length; j++) {
    //             if (
    //               this.articleInf[k].Label[i].ID ==
    //               this.articleInf[k].Label[j].ID
    //             ) {
    //               console.log(i);
    //               this.articleInf[k].Label.splice(j, 1);
    //               j--;
    //             }
    //           }
    //         }
    //       }
    //       // console.log("asdfads")
    //       this.rows = this.articleInf.length;
    //       this.currentPage = 1;
    //       this.upshowinf();
    //     },
    //     (error) => {
    //       console.log("请求失败", error.message);
    //     }
    //   );
    // },
    // upshowinf() {
    //   this.showInf = [];
    //   if (this.articleInf == []) return;
    //   for (var i = 0; i < this.perPage; i++) {
    //     var j = (this.currentPage - 1) * this.perPage + i;
    //     if (j >= this.articleInf.length) break;
    //     this.showInf[i] = this.articleInf[j];
    //   }
    // },
    // getlab() {
    //   get("/article/getlab").then(
    //     (Response) => {
    //       console.log("请求成功", Response);
    //       this.label = Response;
    //     },
    //     (error) => {
    //       console.log("请求失败", error.message);
    //     }
    //   );
    // },
    // addlabel(id, name) {
    //   console.log(id);
    //   // this.choosed[this.choosedNum++]=this.label[id-1]
    //   for (var i = 0; i < this.choosed.length; i++) {
    //     if (this.choosed[i].ID == id) return;
    //   }
    //   this.choosed.push({ ID: id, Name: name });
    //   console.log(this.choosed);
    // },
    // delabel(id) {
    //   console.log(id);
    //   for (var i = 0; i < this.choosed.length; i++) {
    //     if (id == this.choosed[i].ID) {
    //       this.choosed.splice(i, 1);
    //     }
    //   }
    //   // console.log(this.choosed)
    // },
  },
  beforeMount() {
    // this.getlab();
    // this.getartInf();
  },
  mounted() {},
  // watch: {
  //   currentPage: {
  //     handler() {
  //       console.log("3", this.rows, this.perPage, this.currentPage);
  //       // this.upshowinf();
  //     },
  //     immediate: true,
  //   },
  // },
};
</script>

<style lang="css" scoped>
input[type="text"]::placeholder {
  color: rgb(196, 196, 197);
}
.tdcolor {
  color: aliceblue;
}
</style>