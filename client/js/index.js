var app = new Vue({
  	el: '#app',
  	data:{
  		header:"今日计划",
  		items:[],
  		newItem: "",
      finished:false,
      finishedList:[],
  	},
  	methods: {
      //计划
/*      CountPrice:function(){
        this.$http.get('/server/plan.json')
          .then((response) => {
            dataPlan = '{"workDay": "3",  "details": "ZT4ewrew",  "state": " 未完成"}';
          }, (response) => {
          });
      },*/
    	addItems: function () {
        if(this.newItem==""){
          alert("计划不能为空")
          return
        }
    		this.items.unshift({
    			details: this.newItem,
        	isEmphasis: false,
          markShow:false,
          markLists:[{
            'text':"重点"
            },{
            'text':"已完成"
            },{
            'text':"删除"
            },{
            'text':"备注"
            }]
    		})
        this.newItem=""
        
    	},
      //标记设置操作
      toggleMark: function (item){
        //只能显示一个标记目录
        for(var o in this.items){
          this.items[o].markShow = false
        }
        item.markShow = !item.markShow
      },
      //标记项目的点击操作
      //参数分别为(设置项的index,该条计划本身,计划本身的index)
      markControl :function (mark_index,item,item_index,f_markList){
        if(item.markLists[mark_index.markindex].text==="重点"){
          item.isEmphasis = true
          item.markLists[mark_index.markindex].text="取消重点"
          item.markShow = !item.markShow
          return
        }
        if(item.markLists[mark_index.markindex].text==="取消重点"){
          item.isEmphasis = false
          item.markShow = !item.markShow
          item.markLists[mark_index.markindex].text = "重点"
          return
        }
        if(item.markLists[mark_index.markindex].text==="删除"){
          //已完成项目的删除会多传一个字段
          if(f_markList){
            this.finishedList.splice(item_index.index,1)
            //当已完成项为零
            if(this.finishedList.length<=0){
              this.finished = false
            }
          }else{
            this.items.splice(item_index.index,1)
          }
          return
        }
        if(item.markLists[mark_index.markindex].text==="已完成"){
          //显示已完成项
          this.finished = true
          //在已完成数组中添加数据
          this.finishedList.unshift({
            details: item.details,
            markShow:false,
            markLists:[{
            'text':"删除"
            },{
            'text':"备注"
            }]
          })
          //在未完成中删除该项数据
          this.items.splice(item_index.index,1)
          return
        }
      }
  	}
})