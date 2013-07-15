$(function() {
  var Slide = function($el) {
    this.node = $el;
    this.imgNode = this.node.find(".imgs");
    this.numNode = this.node.find(".number");
    this.number = this.numNode.children().length;//for auto
    this.currentNumber = 1;//for auto
    this.numNode.find("a").on("mouseover",{that:this},this.onMouseover);
    this.auto(this);
  }
  Slide.prototype = {
    onMouseover: function(e) {
      if($(this).hasClass("current")) return;
      var that = e.data.that;
      that.numNode.find("a").removeClass("current");
      $(this).addClass("current");
      var ind = that.numNode.find("a").index($(this));
      that.imgNode.children().hide();
      that.imgNode.children().eq(ind).fadeIn(1000);

      //for auto
      if(that.currentNumber === that.number-1) {
        that.currentNumber = 0;
      }
      else {
        that.currentNumber = ind + 1;
      }
    },
    auto: function(that) {
      var _auto = function() {
        that.numNode.find("a").eq(that.currentNumber).mouseover();
      }
      setInterval(_auto,3000);
    }
  }

  $(".slide-element").each(function(e,el) {
    var slide = new Slide($(el));
  });
});