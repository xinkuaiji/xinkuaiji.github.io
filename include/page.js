 var obj = document.getElementById("frameContent");  //获取内容层
 var pages = document.getElementById("pages");         //获取翻页层
 var pgindex=1;                                      //当前页
 window.onload = function()                             //重写窗体加载的事件
 {
 var allpages = Math.ceil(parseInt(obj.scrollHeight)/parseInt(obj. offsetHeight));//获取页面数量
     pages.innerHTML = "<b>共"+allpages+"页</b> ";     //输出页面数量
 for (var i=1;i<=allpages;i++){
         pages.innerHTML += "<a href=\"javascript:showPage('"+i+"');\">第"+i+"页</a> ";
 //循环输出第几页
     }
  pages.innerHTML += " <a href=\"javascript:gotopage('-1');\">上一页</a>  <a href=\"javascript:gotopage('1');\">下一页</a>"
 }
 function gotopage(value){
try{
  value=="-1"?showPage(pgindex-1):showPage(pgindex+1);
  }catch(e){
  }
 }
 function showPage(pageINdex)
 {
  obj.scrollTop=(pageINdex-1)*parseInt(obj.offsetHeight);                                                                  //根据高度，输出指定的页
  pgindex=pageINdex;
 }