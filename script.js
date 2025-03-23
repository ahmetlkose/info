function showSection(sectionId) {
    var sections = document.getElementsByClassName('section');
    for(var i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
    }
    document.getElementById(sectionId).classList.add('active');
}

function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var openbtn = document.getElementById("openbtn");
    var content = document.getElementById("content");
    
    if (sidebar.style.width === "0px" || sidebar.style.width === "0") {
        sidebar.style.width = "250px";
        content.style.marginLeft = "250px";
        openbtn.style.display = "none";
    } else {
        sidebar.style.width = "0";
        content.style.marginLeft = "0";
        openbtn.style.display = "block";
    }
}
