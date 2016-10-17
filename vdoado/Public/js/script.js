
var ajaxPath4Media; //insert ajaxUrl for media here
var ajaxPath4Res; //insert ajaxUrl for check here 
var testId;
var adoRcr = 0;

//vars for ajaxQuery
var audios = [];
var adoDropd = [];
var video = '';

function getPath(a4m,a4r,id){
    ajaxPath4Media = a4m; //insert ajaxUrl for media here
    ajaxPath4Res = a4r; //insert ajaxUrl for check here 
    testId = id;
    init();
    
}
function loadSrc() {
    for (var i in audios) { //create audio players
    	var j = parseInt(i)+1;
        $('.drag').append('<div id="' + i + '" class="text-center ado">' + j +'<i class="glyphicon glyphicon-play"></i>' + '<a>x</a></div>')
    }
    $('.vdoPlayer').attr({ //setup video player
        src: video
    });
    $('.ado>a').hide().click(function(){
        $(this).hide().parent().appendTo('.drag');
    });
    $('.ado') //setup audios
        .hover(function() {
            $(this).children('i').toggleClass('glyphicon-play').toggleClass('glyphicon-stop');
        })
        .hover(function() {
            var i = $(this).attr('id');
            $('.adoPlayer').attr({
                src: audios[i]
            });
            $('.adoPlayer')[0].play();
        }, function() {
            $('.adoPlayer')[0].pause();
        })
        .draggable({
            
            revert: "invalid",
            connectToSortable: ".drop"
        });
       
}

function init() {
    $.ajax({ //request an json object 
        url: ajaxPath4Media, //like this {"video":"file1Path", "audios":["filen2Path","filen3Path","file4Path"]}
        type: 'POST',
        data: {
            id: testId
        },
        dataType: 'json'
    })
    .done(function(data) { //get sources
        video = data['video'];                      //video source
        audios = data['audios'];                    //audios source (array)
        loadSrc();
        console.log("success");
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });



    $('.drop')
	    .sortable({
	        revert: true
	    })
	    .droppable({
	        accept: '.ado',
	        drop: function(e, ui) {
	            ui.draggable.appendTo(this).children('a').show();
	        }
	    });


    $('.test')
    	.click(function() {
    		var $ado = $('.drop>.ado');
    		if(!$(this).hasClass('testPlay')){																		//if paused,play it
                $('.vdoPlayer')[0].currentTime = 0; 
		        $('.vdoPlayer')[0].play();																			//load vdoPlayer

		        adoRcr = 0;
		        if($ado.length){																					//if has dropd
			        for (var i = 0; i < $ado.length; i++) {
			            adoDropd[i] = parseInt($ado.eq(i).attr('id'));
			        }

			        $('#'+adoDropd[adoRcr]).children('i').removeClass('glyphicon-play').addClass('glyphicon-stop');     //play first 
			        $('.adoPlayer').attr({
			            src:  audios[adoDropd[adoRcr++]]
			        })[0].play();


			        $('.adoPlayer')[0].onended = function() {													//play next
			            if (adoRcr >= adoDropd.length) {														//dropd ado ended
		    				$ado.last().children('i').addClass('glyphicon-play').removeClass('glyphicon-stop');
		    				$('.vdoPlayer')[0].pause();
		    				$('.vdoPlayer')[0].currentTime = 0;
					    	$('.adoPlayer')[0].pause();
					    	$('.adoPlayer')[0].onended = null;
					    	$('.test').removeClass('testPlay');
			            } else {																				//dropd ado playing
							$('#'+adoDropd[adoRcr-1]).children('i').addClass('glyphicon-play').removeClass('glyphicon-stop');
			        		$('#'+adoDropd[adoRcr]).children('i').removeClass('glyphicon-play').addClass('glyphicon-stop');
			                $(this).attr({
			                    src: audios[adoDropd[adoRcr++]]
			                })[0].play();
			            }
			        };
			    }
	    		$(this).addClass('testPlay').text('停止');
		    }
		    else{																									//if playing,pause it
		    	$('#'+adoDropd[adoRcr-1]).children('i').addClass('glyphicon-play').removeClass('glyphicon-stop');
		    	$('.vdoPlayer')[0].pause();
		    	$('.vdoPlayer')[0].currentTime = 0;
		    	$('.adoPlayer')[0].pause();
		    	$('.adoPlayer')[0].onended = null;
		    	$(this).removeClass('testPlay').text('试听');
		    }
	    });

    $('.submit').click(function() {
    	var adoDropd = [];
    	for (var i = 0; i < $('.drop>.ado').length; i++) {
		    adoDropd[i] = parseInt($('.drop>.ado').eq(i).attr('id'));
		}
        if(adoDropd.length){
            var name = prompt('请输入你的姓名:');
        	$.ajax({
        		url: ajaxPath4Res,
        		type: 'POST',
        		data: {
                    adoDropd: adoDropd,                 //音频
                    name:name,                           //姓名
                    id:testId
                },
        	})
        	.done(function() {
        		console.log("success");
        	})
        	.fail(function() {
        		console.log("error");
        	})
        	.always(function() {
        		console.log("complete");
        	});
    	}
        else{
            alert('您还没有选择音频');
        }
    })
}