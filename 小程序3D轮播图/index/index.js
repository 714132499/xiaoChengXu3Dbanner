const app = getApp()

Page({
  data: {

  },
  scroll: function(e){
      this.setData({
          intoView: "view"+e.currentTarget.dataset.id
      })
  }
})
