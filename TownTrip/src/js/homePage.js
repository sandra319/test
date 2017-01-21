$(function() {
    $('#slidesPic').slidesjs({
        width: 50,
        height: 30,
		 navigation: {
		 active: false,
			// [boolean] Generates next and previous buttons.
			// You can set to false and use your own buttons.
			// User defined buttons must have the following:
			// previous button: class="slidesjs-previous slidesjs-navigation"
			// next button: class="slidesjs-next slidesjs-navigation"
		  effect: "slide"
			// [string] Can be either "slide" or "fade".
		},
		pagination: {
		  active: true,
			// [boolean] Create pagination items.
			// You cannot use your own pagination. Sorry.
		  effect: "slide"
			// [string] Can be either "slide" or "fade".
		},
        play: {
          active: true,
        // [boolean] Generate the play and stop buttons.
        // You cannot use your own buttons. Sorry.
		  effect: "slide",
			// [string] Can be either "slide" or "fade".
		  interval: 3000,
			// [number] Time spent on each slide in milliseconds.
		  auto: true,
			// [boolean] Start playing the slideshow on load.
		  swap: true,
			// [boolean] show/hide stop and play buttons
		  pauseOnHover: true,
			// [boolean] pause a playing slideshow on hover
		  restartDelay: 1000
			// [number] restart delay on inactive slideshow
        },
		callback: {
		  loaded: function(number) {
			// Do something awesome!
			// Passes start slide number
		  },
		  start: function(number) {
			// Do something awesome!
			// Passes slide number at start of animation
		  },
		  complete: function(number) {
			// Do something awesome!
			// Passes slide number at end of animation
		  }
		}
      });
	  
	$('.slidesjs-pagination-item a').click(function(){
		//alert('test');
		$('.slidesjs-play').click();
	}); 
	  
	$('.room_name').click(function(){
		$(".room_name").removeClass("btn-selected");
		$(this).addClass("btn-selected");
		
		var roomName = $(this).data("room");
		$("#slidesDiv").empty();

		$("#slidesDiv").html(
            '<div class="slidesContainer">' +
			'<div id="slidesPic">' +
            '<img src="src/img/room/' + roomName + '/0.jpg" class="slideImg">' +
	        '<img src="src/img/room/' + roomName + '/1.jpg" class="slideImg">' +
            '</div></div>');
		$('#slidesPic').slidesjs({
		    width: 50,
		    height: 30,
		    navigation: {
		        active: false,
		        // [boolean] Generates next and previous buttons.
		        // You can set to false and use your own buttons.
		        // User defined buttons must have the following:
		        // previous button: class="slidesjs-previous slidesjs-navigation"
		        // next button: class="slidesjs-next slidesjs-navigation"
		        effect: "slide"
		        // [string] Can be either "slide" or "fade".
		    },
		    pagination: {
		        active: true,
		        // [boolean] Create pagination items.
		        // You cannot use your own pagination. Sorry.
		        effect: "slide"
		        // [string] Can be either "slide" or "fade".
		    },
		    play: {
		        active: true,
		        // [boolean] Generate the play and stop buttons.
		        // You cannot use your own buttons. Sorry.
		        effect: "slide",
		        // [string] Can be either "slide" or "fade".
		        interval: 3000,
		        // [number] Time spent on each slide in milliseconds.
		        auto: true,
		        // [boolean] Start playing the slideshow on load.
		        swap: true,
		        // [boolean] show/hide stop and play buttons
		        pauseOnHover: true,
		        // [boolean] pause a playing slideshow on hover
		        restartDelay: 1000
		        // [number] restart delay on inactive slideshow
		    },
		    callback: {
		        loaded: function (number) {
		            // Do something awesome!
		            // Passes start slide number
		        },
		        start: function (number) {
		            // Do something awesome!
		            // Passes slide number at start of animation
		        },
		        complete: function (number) {
		            // Do something awesome!
		            // Passes slide number at end of animation
		        }
		    }
		});
	});

	$('#showBookingBtn').click(function(){
		var bookingDivHtml = $("#bookingModal").html();
			layer.ready(function(){ 
			  //官网欢迎页
			  layer.open({
				type: 1,
				title: 'layer弹层组件官网',
				fix: false,
				maxmin: false,
				shadeClose: true,
				area: ['1100px', '600px'],
				content: bookingDivHtml,
				btn: ['提交订单', '残忍离去'],
				yes: function(){
					$.ajax({
							url:'http://182.254.148.171:5000/book_hotel',
							type:'POST', //GET
							async:true,    //或false,是否异步
							data:{
								name:$('#name').val(),
								phone:$('#phone').val(),
								startdate:$('#startdate').val(),
								howlong:$('#howlong').val(),
								price:$('#price').val(),
								room:$('#room').val(),
								notes:$('#notes').val()
							},
							timeout:5000,    //超时时间
							dataType:'json',    //返回的数据格式：json/xml/html/script/jsonp/text
							beforeSend:function(xhr){
								console.log(xhr)
								console.log('发送前')
							},
							success:function(data,textStatus,jqXHR){
								console.log(data)
								console.log(textStatus)
								console.log(jqXHR)
								
								alert("提交订单成功");
							},
							error:function(xhr,textStatus){
								alert("提交订单失败");
								return false;
							},
							complete:function(){}
						});
				},
				//end: function(){ layer.tips('Hi', '#about', {tips: 1}) }
			});
		});
	});
	
	
	$('#bookingHotelBtn').click(function(){
		//mobile
		console.log(123);
	});
	
});