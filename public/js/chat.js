const Name = document.querySelector('.hidden1');
const vidpath = document.querySelector('.hidden2');

console.log(Name.innerHTML);
console.log(vidpath.innerHTML);

setTimeout(function() {
    document.getElementById('hcb_form_name').value=Name.innerHTML;
    document.getElementsByName('content')[0].placeholder="Type a message";
    document.getElementById('hcb_submit')[0].value="Send";
}, 1500);


/*
Updates the source of first video in the document matching the selector
*/
function setVideoSource(selector, src) {
  
    const element = document.querySelector(selector);
    
    /* 
    Check that element is video before proceeding 
    */
    if(element.nodeName === 'VIDEO') {
      
      for(const source of element.querySelectorAll('source')) {
        element.removeChild(source);
      }
      
      /* 
      Create a new source element and populate it with the src
      attribute 
      */
      const source = document.createElement('source');    
      source.setAttribute('src', src);    

      element.appendChild(source);    
    }
  }

  // Update source of existing video
  setVideoSource('#video', '/vid/20th_century_fox_3d_demo.mp4')
  