    $(document).ready(function(){
        var titleDis = document.getElementById('title_space')
        var bioDis = document.getElementById('bio_space')
         $.ajax({
             url:'title.html',
             dataType:'html',
             success:function(resp){
                 console.log(resp);
                 titleDis.innerHTML = resp;
                 var picture1 = document.getElementById('prof_img1')
                 var picture2 = document.getElementById('prof_img2')
                 var picture3 = document.getElementById('prof_img3')
                 var picture4 = document.getElementById('prof_img4')
                 var picture5 = document.getElementById('prof_img5')
                 var title_display = document.getElementById('title_space')
                 var bio_pic = document.getElementById('bio_pic')
                 var title4 = document.getElementById('wanted_text')
    
    
                 picture1.onclick = function(){
                        picture1.style.height = '50vh';
       
                    }
                 picture1.ondblclick = function(){
                    picture1.style.height = '48vh';
                    }
    
                picture2.onclick = function(){
                    bio_pic.style.backgroundImage = "url('Queen-Anne.gif')";
                    bio_pic.style.backgroundSize = 'contain';
       
                    }
     
                picture3.onclick = function(){
                    title_display.style.backgroundColor = 'black';
        
                }
    
                picture4.onmouseover = function(){
        
                    title4.style.color = 'red';
                }
    
                picture4.onmouseout = function(){
                    title4.style.color = 'black';
                }
    
                picture5.onclick = function(){
                    window.location.reload()
                }
    
             }
         });
         $.ajax({
             url:'bio.html',
             dataType:'html',
             success:function(resp){
                 console.log(resp);
                 bioDis.innerHTML = resp;
             }
         })
    });
                     
                      
                    
                      
                    
                      
            

    