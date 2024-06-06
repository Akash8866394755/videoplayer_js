var action = function(e) {
    var uploadPara = document.getElementById("upload-para");
    uploadPara.innerHTML = "Video Uploading";

    var uploadIcon = document.getElementById("upload-icon");
    uploadIcon.innerHTML = "Wait...";

    setTimeout(() => {
        
        var uploadBack = document.getElementById("upload-background");
        uploadBack.style.display = "none";
    }, 2000);
    setTimeout(function() {

        var videoInput = e.target;
        var reader = new FileReader();
        reader.onload = function() {
            
            filename = reader.result;
            var result = document.getElementById("result");
            result.style.display = "block";
            result.src = filename;
        }
        reader.readAsDataURL(videoInput.files[0]);
    },2000)
    videoPlay();
}
function videoPlay() {
    var video = document.getElementById("result");
    video.play();
}
