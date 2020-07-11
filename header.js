function NavFun(){
    var nav = [
        {
            file:"index.html",
            name:"First Menu"
        },
        {
            file:"index-2.html",
            name:"Second Menu"
        },
        {
            file:"index-3.html",
            name:"Third Menu"
        },
        {
            file:"index-4.html",
            name:"Four Menu"
        }
    ];

    var NavArea = document.getElementById("NavArea"); 

    for (let i = 0; i < nav.length; i++) {
        var liEl = document.createElement("li");
        var aEl = document.createElement("a");
        aEl.type.href = nav[i]['file'];
        aEl.innerText = nav[i]['name'];
        liEl.appendChild(aEl);
        NavArea.appendChild(NavArea);
    }
}

NavFun();
    
