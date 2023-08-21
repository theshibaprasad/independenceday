function loco() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
  
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  
  loco();

  gsap.to("#page>video",{
    scrollTrigger:{
        trigger:`#page>video`,
        start:`1% top`,
        scroller: `#main`,
        // markers:true,
        
       
    },
    onStart:()=>{
        document.querySelector("#page>video").play()
        
    },
    
})
     gsap.to("#page_text",{
     scrollTrigger:{
      trigger:`#page_text`,
      start:`200% bottom`,
      end:`bottom top`,
      scroller: `#main`
     },
      opacity:0
    })
    gsap.to("#page1>h1", {
    transform: "translateX(-600%)",
    fontWeight: "800",
    color:"red",
    webkitTextStrokeColor: "green",
    WebkitTextStroke:"10px",
    WebkitTextWidth: "5px",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main", 
      // markers: true,
      start: "top 0",
      end: "top -200%",
      scrub: 4,
      pin: true,
      
    },
  })
  gsap.to("#page1", {
    backgroundColor:"white",
    
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main", 
      // markers: true,
      start: "top 1",
      end: "top -200%",
      scrub: 2,
      pin: true,
      
    }
  })
  var tl=gsap.timeline({
    scrollTrigger: {
      trigger: "#page2>h1",
      scroller: "#main",
      // markers: true,
      start: "top 27%",
      end: "top 0",
      scrub: 4,
     
    }
  })

  tl.to("#page2>h1", {
    x: 1300,
    color:"blue",
    
  },"pdcs")
  tl.to("#page2>h2", {
    x: -1300,
    color:"blue",
    
  },"pdcs")
  tl.to("#page2>video", {
    width:"100%",
    
  },"pdcs")


  document.addEventListener("DOMContentLoaded", () => {
    let playBtn = document.getElementsByClassName("play");
    let pauseBtn = document.getElementsByClassName("pause");
    let text = document.querySelector("p");
    
    const audio = new Audio("./component/Vande Mataram ---- Happy Independence Day(MP3_160K).mp3");
    let isPlaying = false;
    let image = document.getElementById('myImage');
    
    function playAudio() {
      audio.play();
      text.innerHTML = "Bande Mataram";
      isPlaying = true;
    }
    
    function pauseAudio() {
      audio.pause();
      text.innerHTML = "Jai Bharat";
      isPlaying = false;
    }
    
    function toggleAudio() {
      if (isPlaying) {
        pauseAudio();
      } else {
        playAudio();
      }
    }
    
    function changeImage() {
      if (isPlaying) {
        image.src = "./component/New-file (7).gif";
      } else {
        image.src = "./component/20230818_221734.png";
      }
    }
    
    
    if (playBtn.length > 0) {
      playBtn[0].addEventListener("click", (e) => {
        toggleAudio();
        changeImage();
      });
    }
    
    if (pauseBtn.length > 0) {
      pauseBtn[0].addEventListener("click", (e) => {
        pauseAudio();
      });
    }
});



  
  
