function appr(goal, current, time){
    if(current < goal){
      return current + time;
    }else{
      return goal;
    }
  }  
  
  function point(x, y){
    this.x = x;
    this.y = y;
  }
  
  var box = document.getElementById('page-loading');
  
  var crp = new point(0.0, 0);
  var p = new point(1.0, 100);
  
  setInterval(function(){
  
    crp.x = appr(p.x, crp.x, 0.015);
    crp.y = appr(p.y, crp.y, 1.5);
    box.style.opacity = crp.x;
    box.style.width = crp.y+"%";
  }, 1000/60);