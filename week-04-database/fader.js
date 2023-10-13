
            function morphimages(){

              // Process the URL to load a new set of images. Must be in this format: 
              //     index.html?folderName-44-jpg
              // where the number is the number of images
              let url = window.location.href.split('?')[1]; 
              if(url===undefined){
                  console.log('URL undefined');
              }else{
                  folder = url.split('-')[0]; // Folder of images to display
                  imageN = url.split('-')[1]; // Number of images in the folder
                  imageType = url.split('-')[2]; // Tyoe of images in the folder - i.e jpg, gif
              }
              
              // Generate an array of images to display
              let images = [];
              let currentimg = 0;
              for(let i=0;i!=imageN;i++){
                  images[i] = `${folder}/${i}.${imageType}`;
              }

              // HTML tags where images are saved 
              let links = document.getElementById("links");
              let image = document.getElementById("image");
              let imagec= document.getElementById("imagecover");
              imagec.style.background = `url("${images[0]}")`;
              image.style.background = `url("${images[1]}")`;
              opacity = 0;

              // Auto-generate the list of links from the span tags
              let spans = links.getElementsByTagName("span");
              let myFolder;
              let myImageN; 
              for (var i = 0; i < spans.length; ++i) {
                myFolder = spans[i].getAttribute("data-folder");
                myImageN = spans[i].getAttribute("data-imageN");
                myImageType = spans[i].getAttribute("data-type");
                spans[i].setAttribute("onclick",`newImages('${myFolder}','${myImageN}','${myImageType}')`);
                console.log('myFolder:'+myFolder+' myImageN:'+myImageN+' myImageType:'+myImageType); 
              }

              // Animate the images
              function step(timestamp) {
                if (opacity > 0) {
                  opacity -= speed;  
                  imagec.style.opacity = opacity;
                }else{
                  opacity = 1;
                  let next = currentimg;
                  imagec.style.background = `url("${images[currentimg]}")`;
                  imagec.style.opacity = 1;
                  currentimg += 1;
                  if(currentimg == images.length) currentimg = 0;
                  image.style.background = `url("${images[currentimg]}")`;
                }
                window.requestAnimationFrame(step);
              }
              window.requestAnimationFrame(step);
          }
          // Load new images 
          function newImages(folder, number, type){
              window.location.href='?'+folder+'-'+number+'-'+type; 
          }
          morphimages();
  