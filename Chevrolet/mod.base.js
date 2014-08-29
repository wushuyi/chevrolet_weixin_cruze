/*******************************
 * Description:基类
 *******************************/
/*_WXShare('http://www.oootooo.com/app/hilifestyle/static/img/share.jpg','100','100','不一样的饭局，HI百货邀你来尝鲜！','广州正佳HI百货时装区touch7月6号正式开幕，欧阳应霁亲自下厨要你来尝鲜！','http://www.oootooo.com/app/hilifestyle/');*/
_WXShare('index/logo.jpg','100','100','生来不同  创新BMWX4','啊车网宝马BMW X4首发','');		
KISSY.use('node,dom,event,io,cookie,gallery/simple-mask/1.0/,gallery/kissy-mscroller/1.3/index,gallery/simple-mask/1.0/,gallery/datalazyload/1.0.1/index,gallery/musicPlayer/2.0/index',function(S,Node,DOM,Event,IO,Cookie,Mask,KSMscroller,Mask,DataLazyload,MusicPlayer){
	var $=Node.all;

    /*
	var musicPlayer = new MusicPlayer({
			type:'auto',
        	mode:'random',
        	volume:1,
            auto:'true', //自动播放 默认不播放.
         //   mode:'order', //如果几首歌想随机播放,设置为 random, 默认为order.
            musicList:[{"name":"不如夜跑背景音乐", "path":"./static/yepao.mp3"}]
        });
	var status_bool=false;

	$(".player-button").on("click",function(){
	 	if(status_bool==true){
	 		musicPlayer.stop();
	 		$(this).addClass('.player-button-stop');
	 		status_bool=false;
	 	}else{
	 		musicPlayer.play();
	 		$(this).removeClass('.player-button-stop');
	 		status_bool=true;
	 	}
	 });
	 */
	
/*	$(window).on("tab",function(){
		$(".player-tip").hide(0.1);
		$(window).detach("tab");
		$(window).detach("click");
		$(window).detach("swipe");
	});
	 $(window).on("click",function(){
		$(".player-tip").hide(0.1);
		$(window).detach("tab");
		$(window).detach("click");
		$(window).detach("swipe");
	});
	$(window).on("swipe",function(e){
		$(".player-tip").hide(0.1);
		$(window).detach("tab");
		$(window).detach("click");
		$(window).detach("swipe");
	});*/



	_PreLoadImg(['static/img/bg-drop.jpg',
	'static/img/f15-txt.png'],function(){  
		$('.loading').remove();
		$('.p-index').show();
		
	});
	/*$("input").on("focusin",function(){
	$("body").css("overflow","auto");
	});*/
	if($('#J_index_btn').length>0){   

	      $('#J_index_btn').on('click',function(){
	          btn_sub();
	      });
	   }
	  var REG={
	      name:/^[a-zA-Z0-9\u4e00-\u9fa5]{2,12}$/,
	      phone:/(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/,
	      isIDCard1:/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/,
		  //身份证正则表达式(18位) 
		  isIDCard2:/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/ ,
		  isIDCard3:/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,
		  isIDCard4:/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|x)$/
	   }
	   var btn_sub=function(){
	   			if (Cookie.get('WIT_flag_0324_yepao_xian')==1) {
	   				alert("您已经提交过了！"); 
	   				$('#J_username').attr("disabled","disabled");
	                $('#J_usertel').attr("disabled","disabled");
	                $('#J_cardid').attr("disabled","disabled");
	                return false;
	            };
	          var name=$('#J_username').val();
	           var phone=$('#J_usertel').val();
	            var weixin=$('#J_weixin').val();
           var intro=$('#intro').val();
	           if(name==''){
	              alert('请正确填写姓名!');
	               return ;
	           }else if(!REG.name.test(name)){
	               alert('请正确填写姓名！');
	               return ;
	           }
	           if(phone==''){
	              alert('手机号码不能为空！');
	               return ;
	           }else if(!REG.phone.test(phone)){
	               alert('请正确填写手机号码！');
	               return ;
	           }

	           var level=Cookie.get("WIT_level_0305_caishen");
	            IO.post('http://www.oootooo.com/app/saveq/',{name:name,phone:phone,weixin:weixin,'intro':intro},function(data){
	                        if(data.status==200){
	                             //提交成功
	                            // window.location.href="get.html";
	                           
	                             alert("报名成功！");
	                             Cookie.set('WIT_flag_0324_yepao_xian',1,365);
	                             $('#J_username').attr("disabled","disabled");
	                             $('#J_usertel').attr("disabled","disabled");
	                             $('#J_cardid').attr("disabled","disabled");
	                        }else if(data.status==130){
	                             //提交成功
	                            // window.location.href="get.html";
	                           // alert("谢谢参与，活动人数已满！");
	                             alert("来晚一步，名额已满。关注“城市画报”官方微信，另有机会参与抽奖哦！");
	                             Cookie.set('WIT_flag_0324_yepao_xian',1,365);
	                             $('#J_username').attr("disabled","disabled");
	                             $('#J_usertel').attr("disabled","disabled");
	                             $('#J_cardid').attr("disabled","disabled");
	                        }else{
	                            alert('信息提交失败！\n原因：\n1、不能重复！\n2、网络问题，请检查手机联网状态！');
	                        }
	                     },'json');
	   }
});