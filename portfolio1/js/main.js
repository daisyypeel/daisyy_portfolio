

function Sbutton(){
    var searchfrm=document.search
    
if(searchfrm.searchtxt.value=="검색어를 입력해주세요." || searchfrm.searchtxt.value==""){
    
    alert('검색어를 입력하세요');
    searchfrm.searchtxt.value=="";
    searchfrm.searchtxt.focus();
    return false;
}

}
function valuetxt(){
    var searchfrm=document.search
    if(searchfrm.searchtxt.value=="검색어를 입력해주세요."){
        searchfrm.searchtxt.value="";
        return false;
    }
}


var currentNum=0;
var gnblist;

function selectNum(n){
    gnblist[currentNum].className="gnb_list";
    gnblist[n].className="gnb_list on";
    gnblist[currentNum].childNodes[1].className="gnb_sub";
    gnblist[n].childNodes[1].className="gnb_sub on";

    currentNum=n
}

var visualList;
var iconList;
var menuNum=0;
var currentNum2=0;
var st;

function selectNum2(n2){
    if(currentNum2!=n2){
        iconList[currentNum2].className=""
        visualList[currentNum2].className="none";

        iconList[n2].className="on"
        visualList[n2].className="";
        currentNum2=n2
    }
}

function nextBtn(){
    menuNum++;
    if(menuNum>iconList.length-1){
       menuNum=0;
    }
    selectNum2(menuNum)
}

function prevBtn(){
    menuNum--;
    if(menuNum<0){
       menuNum=iconList.length-1;
    }
    selectNum2(menuNum)
}

    
    st=setInterval(img,2000)
    
    function img(n2){
        menuNum++;
        if(menuNum>visualList.length-1){
            menuNum=0;
        }
        selectNum2(menuNum)
    }

var noticeList;
var currentNum3=0;
var noticeList;


var mapicon;
var currentNum4=0;
var maplist;


/*
var tabWdh=100;
var tabNum=0;
var tablist=document.getElementsByClassName('tab_wrap')[0];
var tabB=document.getElementsByClassName('tab_wrap')[0].getElementsByTagName('ul')[0];
console.log(tabB)

function tabRight(){
    
    tabNum++
    //console.log(tabNum)
    if(tabNum>5){
        tabNum=0;
    }
    tablist.getElementsByClassName('tab_list')[0].style.left = -(tabWdh*tabNum)+'px';
  
    
}
*/




function init(){
    gnblist=document.getElementById('gnb').getElementsByClassName('gnb_list');
    
    for(var i=0; i<gnblist.length; i++){
            gnblist[i].n=i;
            gnblist[i].onmouseover=function(){
                selectNum(this.n);
               
            }
            gnblist[i].onmouseout=function(){
                gnblist[currentNum].className="gnb_list";
                gnblist[currentNum].childNodes[1].className="gnb_sub";

            }

    }
 
        visualList=document.getElementsByClassName('visual_wrap')[0].getElementsByClassName('visual')[0].getElementsByTagName('li');
        iconList=document.getElementsByClassName('visual_wrap')[0].getElementsByClassName('visual_btn')[0].getElementsByTagName('a');
        
        for(var a=0; a<visualList.length; a++){
            iconList[a].n2=a;
            iconList[a].onmouseover=function(){
                clearInterval(st);
                menuNum=this.n2;
                selectMenu2(menuNum)
                
            }
            iconList[a].onmouseout=function(){
                clearInterval(st);
                
                st=setInterval(img,2000)
            }
           
        }
        
    noticeLi=document.getElementsByClassName('notice_title')[0].getElementsByClassName('notice_li');
    noticeList=document.getElementsByClassName('notice_title')[0].getElementsByClassName('notice_list');
    for(var b=0; b<noticeLi.length; b++){        
        noticeLi[b].n3=b
        noticeLi[b].onclick=function(){
           if(currentNum3!=this.n3){
         
            noticeLi[currentNum3].className="notice_li";
            noticeLi[this.n3].className="notice_li on";

            noticeList[currentNum3].className="notice_list none";
            noticeList[this.n3].className="notice_list";

            currentNum3=this.n3;
            return false;
           }
           
        }
    }

   
    maplist=document.getElementsByClassName('map_icon')[0].getElementsByTagName('li')
    for(var c=0; c<maplist.length; c++){ 
        maplist[c].n4=c 
        maplist[c].onmouseover=function(){
            maplist[this.n4].className="on";
            if(currentNum4!=this.n4){
                maplist[currentNum4].className="";
                maplist[this.n4].className="on";

                currentNum4=this.n4;
            }
        }
        maplist[c].onmouseout=function(){
                maplist[currentNum4].className="";
        }
        
    }

    
var ceolist;
var currentNum5=0;

 ceolist=document.getElementsByClassName('ceo_list')[0].getElementsByTagName('li');
    
    for(var d=0; d<ceolist.length; d++){
        ceolist[d].getElementsByTagName('a')[0].n5=d;
        ceolist[d].getElementsByTagName('a')[0].onmouseover=function(){
            ceolist[this.n5].className="on";
            if(currentNum5!=this.n5){
                ceolist[currentNum5].className="";
                ceolist[this.n5].className="on";
                
                currentNum5=this.n5;
                return false;
             }  
        }
        ceolist[d].onmouseout=function(){
            ceolist[currentNum5].className="";
        }
    }


    var newsList=document.getElementsByClassName('news_head')[0].childNodes;
    var currentNum6=0;

    for(var e=1; e<=6; e++){
 
        newsList[e*2-1].n6=e;
        newsList[e*2-1].onclick=function(){
            newsList[currentNum6+1].className="";
            if(currentNum6!=this.n6*2-1){
            newsList[currentNum6].className="";
            newsList[this.n6*2-1].className="on";


            currentNum6=this.n6*2-1;
            return false;
            }     
              
        }        
    }

    var currentNum7=0;
    var comuList=document.getElementsByClassName('comu_cont')[0].getElementsByTagName('li');
    
    
    for(f=0; f<comuList.length; f++){
      
        comuList[f].n7=f;
        comuList[f].onmouseover=function(){
            comuList[this.n7].getElementsByClassName('comu_img')[0].getElementsByTagName('p')[0].style.display="block"
            if(currentNum7!=this.n7){
                comuList[currentNum7].getElementsByClassName('comu_img')[0].getElementsByTagName('p')[0].style.display="none"
                comuList[this.n7].getElementsByClassName('comu_img')[0].getElementsByTagName('p')[0].style.display="block"
                
                currentNum7=this.n7
                return false;
            }  
        }
     comuList[f].onmouseout=function(){
        comuList[currentNum7].getElementsByClassName('comu_img')[0].getElementsByTagName('p')[0].style.display="none"
            }
    }


    var currentNum8=0;
    var siteList=document.getElementsByClassName('footer_site')[0].getElementsByTagName('li');

    for(g=0; g<siteList.length; g++){
        
        siteList[g].getElementsByTagName('a')[0].n8=g;
        siteList[g].getElementsByTagName('a')[0].onmouseover=function(){
        if(currentNum8!=this.n8)
            siteList[currentNum8].getElementsByTagName('a')[0].className="site_icon_"+ (currentNum8+1)
            siteList[this.n8].getElementsByTagName('a')[0].className="on site_icon_" + (this.n8+1);

            currentNum8=this.n8;

            return false;
        }
        siteList[g].getElementsByTagName('a')[0].onmouseout=function(){
            siteList[currentNum8].getElementsByTagName('a')[0].className="site_icon_"+ (currentNum8+1)


        }
        
    }

    var tabWdh=100;
    
    var tablist=document.getElementsByClassName('tab_wrap')[0].getElementsByTagName('ul')[0];
    var tabBtn=document.getElementsByClassName('Section_2')[0].getElementsByClassName('tab_right')[0].getElementsByTagName('a');
    
    tabBtn.onclick=function(){
        console.log('a');
        return false;
    }
   

    
    //tablist.style.left = -(tabWdh*tabNum)+'px';
  
    
}
    
    
   



window.onload=init;
