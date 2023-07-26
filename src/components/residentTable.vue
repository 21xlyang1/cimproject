<template>
  <div class="p-4 rounded-2" style="background: #2d3035">
    <div
      class="w-100 mb-4 d-flex justify-content-between align-items-center"
      style="height: 40px"
    >
      <div style="font-size: 24px; color: #b1b1b1">常驻人员列表</div>
      <div></div>
      <div class="d-flex">
        <el-button type="success" @click="dialogAddVisible = true"
          >添加常驻人员</el-button
        >
        <el-button type="info" @click="dialogRecordVistble = true"
          >查看记录</el-button
        >
      </div>
    </div>
    <el-table
      :data="showInf"
      style="width: 100%"
      :row-style="TableRowStyle"
      :header-cell-style="{
        background: '#2d3035',
        color: '#b1b1b1',
        border: '#343a40',
      }"
      :cell-style="setCellStyle"
    >
      <el-table-column min-width="100px" label="姓名" prop="realname">
      </el-table-column>
      <el-table-column min-width="80px" label="年龄" prop="age">
      </el-table-column>
      <el-table-column min-width="80px" label="性别" prop="sex">
      </el-table-column>
      <el-table-column min-width="180px" label="电话" prop="phone">
      </el-table-column>
      <el-table-column min-width="80px" label="类型" prop="type">
      </el-table-column>
      <el-table-column min-width="300px" label="地址" prop="address">
      </el-table-column>
      <el-table-column min-width="200px" header-align="right">
        <template slot="header" slot-scope="">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button
            type="primary me-3"
            size="small"
            icon="el-icon-edit"
            circle
            @click="nativeEdit(scope.row)"
          ></el-button>
          <el-popconfirm title="确定该常驻人员删除吗？">
            <el-button
              type="danger"
              size="small"
              icon="el-icon-delete"
              circle
              slot="reference"
            ></el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页导航 -->
    <div class="w-100 mt-4 d-flex justify-content-center">
      <el-pagination
        background
        :current-page.sync="currentPage"
        :total="rows"
        :per-page="perPage"
        first-number
        layout="prev, pager, next"
      >
      </el-pagination>
    </div>
    <!-- 添加对话框 -->
    <el-dialog
      title="添加常驻人员"
      custom-class="dialog"
      :modal="false"
      :visible.sync="dialogAddVisible"
      width="600px"
      style="color: rgb(211, 211, 211)"
    >
      <template slot="title">
        <div style="font-size: 22px">添加常驻人员</div>
      </template>
      <div style="color: rgb(211, 211, 211)" class="ps-4 pe-4">
        <div class="d-flex mb-4 align-items-center">
          <div class="text-nowrap">姓名</div>
          <el-input class="ms-3" v-model="form.realname"></el-input>
        </div>
        <div class="d-flex mb-4 align-items-center">
          <div class="text-nowrap">性别</div>
          <el-radio class="ms-3" v-model="form.sex" label="男">男</el-radio>
          <el-radio v-model="form.sex" label="女">女</el-radio>
        </div>
        <div class="d-flex mb-4 align-items-center">
          <div class="text-nowrap">手机号码</div>
          <el-input class="ms-3" v-model="form.phone"></el-input>
        </div>

        <div class="d-flex mb-4 align-items-center">
          <div class="text-nowrap">出生年月</div>
          <el-date-picker
            class="ms-3"
            v-model="form.birthday"
            type="month"
            placeholder="选择年月"
          >
          </el-date-picker>
        </div>
        <div class="d-flex mb-4 align-items-center">
          <div class="text-nowrap">人员类型</div>
          <el-select class="ms-3" v-model="form.type" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="d-flex mb-4 align-items-center">
          <div class="text-nowrap">地址</div>
          <el-input class="ms-3" v-model="form.address"></el-input>
        </div>
        <div>点击以下按钮上传人脸图片，请确保照片清晰且采光良好。</div>
        <el-upload action="#" list-type="picture-card" :auto-upload="false">
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{ file }">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url"
              alt=""
            />
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
              >
                <i class="el-icon-zoom-in"></i>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleDownload(file)"
              >
                <i class="el-icon-download"></i>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <i class="el-icon-delete"></i>
              </span>
            </span>
          </div>
        </el-upload>
      </div>

      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>

      <div slot="footer" class="d-flex justify-content-center">
        <el-button type="success" @click="addResident">确定添加</el-button>
      </div>
    </el-dialog>
    <!-- 修改对话框 -->
    <el-dialog
      title="添加常驻人员"
      custom-class="dialog"
      :modal="false"
      :visible.sync="dialogUpsetVisible"
      width="600px"
      style="color: rgb(211, 211, 211)"
    >
      <template slot="title">
        <div style="font-size: 22px">修改常驻人员</div>
      </template>
      <div style="color: rgb(211, 211, 211)" class="ps-4 pe-4">
        <div class="d-flex mb-4 align-items-center">
          <div class="text-nowrap">姓名</div>
          <el-input class="ms-3" v-model="upsetForm.realname"></el-input>
        </div>
        <div class="d-flex mb-4 align-items-center">
          <div class="text-nowrap">性别</div>
          <el-radio class="ms-3" v-model="upsetForm.sex" label="男"
            >男</el-radio
          >
          <el-radio v-model="upsetForm.sex" label="女">女</el-radio>
        </div>
        <div class="d-flex mb-4 align-items-center">
          <div class="text-nowrap">手机号码</div>
          <el-input class="ms-3" v-model="upsetForm.phone"></el-input>
        </div>

        <div class="d-flex mb-4 align-items-center">
          <div class="text-nowrap">出生年月</div>
          <el-date-picker
            class="ms-3"
            v-model="upsetForm.birthday"
            type="month"
            placeholder="选择年月"
          >
          </el-date-picker>
        </div>
        <div class="d-flex mb-4 align-items-center">
          <div class="text-nowrap">人员类型</div>
          <el-select class="ms-3" v-model="upsetForm.type" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="d-flex mb-4 align-items-center">
          <div class="text-nowrap">地址</div>
          <el-input class="ms-3" v-model="upsetForm.address"></el-input>
        </div>
      </div>

      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>

      <div slot="footer" class="d-flex justify-content-center">
        <el-button type="success" @click="upsetResident">确定修改</el-button>
      </div>
    </el-dialog>
    <!-- 历史记录对话框 -->
    <el-dialog
      title="添加常驻人员"
      custom-class="dialog2"
      :modal="false"
      :visible.sync="dialogRecordVistble"
      width="500px"
      style="color: rgb(211, 211, 211)"
    >
      <template slot="title">
        <div style="font-size: 22px">查看历史记录</div>
      </template>
      <el-scrollbar style="height: 500px">
        <div style="color: rgb(211, 211, 211)" class="ps-4 pe-4">
          <el-timeline>
            <el-timeline-item
              v-for="(item, index) in record"
              :key="index"
              :icon="
                item.type == 'add'
                  ? 'el-icon-plus'
                  : item.type == 'delate'
                  ? 'el-icon-delete'
                  : 'el-icon-edit'
              "
              :type="
                item.type == 'add'
                  ? 'success'
                  : item.type == 'delate'
                  ? 'danger'
                  : 'primary'
              "
              size="large"
              :timestamp="item.time"
            >
              <div class="d-flex">
                <div class="me-1" style="color: aqua">{{ item.user }}</div>
                <div style="color: aliceblue">{{ item.content }}</div>
              </div>
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-scrollbar>
    </el-dialog>
  </div>
</template>
<script>
import { get, post } from "@/utils/http";
export default {
  name: "residentTable",
  data() {
    return {
      showInf: [],
      tableInf: [
        {
          id: 1,
          realname: "王小刚",
          age: "26",
          sex: "男",
          phone: "1231231222",
          type: "村民",
          address: "陇头工业区二区4号",
        },
      ],

      record: [
        {
          time: "2018-04-12 20:46:12",
          user: "张三",
          content: "添加了一位常驻人员信息",
          type: "add", //add添加，delate删除,edit修改
        },
        {
          time: "2018-04-12 08:36:45",
          user: "李四",
          content: "删除了一位常驻人员信息",
          type: "delate",
        },
        {
          time: "2018-04-12 19:42:42",
          user: "王五",
          content: "修改了一位常驻人员信息",
          type: "edit",
        },
        {
          time: "2018-04-12 20:46:12",
          user: "张三",
          content: "添加了一位常驻人员信息",
          type: "add", //add添加，delate删除,edit修改
        },
        {
          time: "2018-04-12 08:36:45",
          user: "李四",
          content: "删除了一位常驻人员信息",
          type: "delate",
        },
        {
          time: "2018-04-12 19:42:42",
          user: "王五",
          content: "修改了一位常驻人员信息",
          type: "edit",
        },
        {
          time: "2018-04-12 20:46:12",
          user: "张三",
          content: "添加了一位常驻人员信息",
          type: "add", //add添加，delate删除,edit修改
        },
        {
          time: "2018-04-12 08:36:45",
          user: "李四",
          content: "删除了一位常驻人员信息",
          type: "delate",
        },
        {
          time: "2018-04-12 19:42:42",
          user: "王五",
          content: "修改了一位常驻人员信息",
          type: "edit",
        },
        {
          time: "2018-04-12 20:46:12",
          user: "张三",
          content: "添加了一位常驻人员信息",
          type: "add", //add添加，delate删除,edit修改
        },
        {
          time: "2018-04-12 08:36:45",
          user: "李四",
          content: "删除了一位常驻人员信息",
          type: "delate",
        },
        {
          time: "2018-04-12 19:42:42",
          user: "王五",
          content: "修改了一位常驻人员信息",
          type: "edit",
        },
        {
          time: "2018-04-12 20:46:12",
          user: "张三",
          content: "添加了一位常驻人员信息",
          type: "add", //add添加，delate删除,edit修改
        },
        {
          time: "2018-04-12 08:36:45",
          user: "李四",
          content: "删除了一位常驻人员信息",
          type: "delate",
        },
        {
          time: "2018-04-12 19:42:42",
          user: "王五",
          content: "修改了一位常驻人员信息",
          type: "edit",
        },
        {
          time: "2018-04-12 20:46:12",
          user: "张三",
          content: "添加了一位常驻人员信息",
          type: "add", //add添加，delate删除,edit修改
        },
        {
          time: "2018-04-12 08:36:45",
          user: "李四",
          content: "删除了一位常驻人员信息",
          type: "delate",
        },
        {
          time: "2018-04-12 19:42:42",
          user: "王五",
          content: "修改了一位常驻人员信息",
          type: "edit",
        },
      ],
      rows: 99,
      perPage: 10,
      currentPage: 2,
      search: "",
      dialogAddVisible: false,
      dialogUpsetVisible: false,
      dialogRecordVistble: false,
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      options: [
        {
          value: "选项1",
          label: "村民",
        },
        {
          value: "选项2",
          label: "租客",
        },
        {
          value: "选项3",
          label: "其他",
        },
      ],
      form: {
        realname: "",
        birthday: "",
        phone: "",
        sex: "男",
        type: "",
        address: "",
      },
      upsetForm: {
        realname: "",
        birthday: "",
        phone: "",
        sex: "男",
        type: "",
        address: "",
      },
    };
  },
  methods: {
    nativeEdit(row) {
      this.dialogUpsetVisible = true;
      this.upsetForm = row;
      console.log(row.id);
    },
    TableRowStyle({ row, rowIndex }) {
      // 注意，这里返回的是一个对象
      let rowBackground = {};

      rowBackground.color = "#b1b1b1";
      return rowBackground;
    },
    setCellStyle({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 == 1) {
        return "background:#2d3035;border: #343a40";
      } else {
        return "background:#25272c;border: #343a40";
      }
    },
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    upShowInf() {
      this.showInf = [];
      if (this.tableInf == []) return;
      for (var i = 0; i < this.perPage; i++) {
        var j = (this.currentPage - 1) * this.perPage + i;
        if (j >= this.tableInf.length) break;
        this.showInf.push(this.tableInf[j]);
      }
    },
    calculateAge(birthdate) {
      if (birthdate) {
        const birthDateObj = new Date(birthdate);
        const currentDate = new Date();

        if (isNaN(birthDateObj.getTime())) {
          alert("请输入有效的日期，格式为yyyy-mm-dd");
          return;
        }

        let age = currentDate.getFullYear() - birthDateObj.getFullYear();

        // Check if the birthday has already occurred this year
        const currentMonth = currentDate.getMonth();
        const birthMonth = birthDateObj.getMonth();
        const currentDay = currentDate.getDate();
        const birthDay = birthDateObj.getDate();

        if (
          currentMonth < birthMonth ||
          (currentMonth === birthMonth && currentDay < birthDay)
        ) {
          age--;
        }

        return age;
      }
    },
    getTableInf() {
      post("/auth/showresident", {}).then(
        (Response) => {
          console.log("请求成功", Response);
          var data = Response.data;
          console.log(data);
          if (data == undefined) return;
          this.tableInf = [];
          for (var i = 0; i < data.length; i++) {
            var t = data[i];
            var inf = {
              id: t.nativeId,
              realname: t.nativename,
              age: this.calculateAge(t.birthday),
              sex: t.sex,
              phone: t.phoneNumber,
              type: "村民",
              address: t.address,
            };
            this.tableInf.push(inf);
          }
          this.rows = this.tableInf.length;
          this.currentPage = 1;
          this.upShowInf();
        },
        (error) => {
          console.log("请求失败", error.message);
        }
      );
    },
    addResident() {
      this.dialogAddVisible = false;
      this.$cookies.set("IsLogin",null)
      console.log(this.$cookies.get("IsLogin"))
      
      this.$message({
        message: "添加成功",
        type: "success",
      });
    },
    upsetResident(){
      this.dialogUpsetVisible=false

      this.$message({
        message: "修改成功",
        type: "success",
      });
    }
  },
  mounted() {
    this.getTableInf();
  },
  watch: {
    currentPage: {
      handler() {
        console.log("3", this.rows, this.perPage, this.currentPage);
        this.upShowInf();
      },
      immediate: true,
    },
  },
};
</script>

<style lang="css" >
/* /deep/ .el-table--enable-row-hover .el-table__body tr:hover>td.el-table__cell {
    background-color: #dedede;
} */

.dialog {
  background: #255175;
}
.dialog2 {
  background: #5b3f75;
}
.dialog3 {
  background: #214cdb;
}
</style>

