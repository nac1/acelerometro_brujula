//actions
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

var ac={ //crear una variable
  succes: function(a){
      
  $('#acelerometro h2').html('X: '+a.x+'<br> Y: '+a.y+'<br> Z: 'a.z);
      
  },
    
 error: function(e){
     alert(e.code);
 },

iniciar:function(){ //inicializar esta o no activo
    if(!ac.watchID){
   ac.watchID= navigator.accelerometer.watchAcceleration(ac.onSuccess, ac.onError, ac.options);
    }
    
},
    
detener:function(){
    if(ac.watchID){
    navigator.accelerometer.clearWatch(ac.watchID);
     ac.watchID=null;
        $('#acelerometro h2').text('Detenido');
    }
},
watchID:null, //propiedad
options:{frequency: 500}//es un objeto
    
    
    
};
    
    
    var fn={
    init: function(){
    $('#acIni').tap(ac.iniciar); //tam e sun click
    $('#acDet').tap(ac.detener);
},
    ready: function(){
        
        document.addEventListener("deviceready",fn,false);
    }
}

$(fn.ready);    
    
    
}