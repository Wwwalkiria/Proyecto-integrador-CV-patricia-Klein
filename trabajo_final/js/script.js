
window.onload = function() {
    document.getElementById('show_button').onclick = function(){
        redirectTo("https://github.com/Wwwalkiria")
    }

    setInterval(function(){
        let image_src = document.getElementById('profile_image').getAttribute("src"); 
        changeProfileImage(image_src)
    
    }, 5000);
}

function redirectTo(url) {
    return window.location.href = url;
}

function changeProfileImage(currentPath) {
    if (currentPath == './img/img1.jpg'){
        document.getElementById('profile_image').src = './img/img2.jpg';
    } else {
        document.getElementById('profile_image').src = './img/img1.jpg';
    }
}
