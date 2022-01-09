window.addEventListener("load", function() {
    const menuList = document.querySelectorAll("#header-menu > li");
    for (let i = 0; i < menuList.length; i++) {
        menuList[i].addEventListener('mouseover', function() {
            let menushow = document.getElementById('menu-'+i);
            console.log('menu-'+i);
            menushow.style.display = 'block';
        });
        menuList[i].addEventListener('mouseout', function() {
            let menushow = document.getElementById('menu-'+i);
            menushow.style.display = 'none';
        })
    }
    const menuChild = document.querySelectorAll('.menu-child');
    for (let i =0; i< menuChild.length; i++) {
        menuChild[i].parentElement.addEventListener('mouseover', function(){
            let menushow = document.getElementById('menu-child-'+i);
            console.log('menu-child-'+i);
            menushow.style.display = 'block';
        })
        menuChild[i].parentElement.addEventListener('mouseout', function() {
            let menushow = document.getElementById('menu-child-'+i);
            menushow.style.display = 'none';
        })
    }
    const menuButton = document.getElementById('menu-button');
    const menuLeft = document.getElementById('menu-left');
    console.log(menuLeft);
    menuButton.addEventListener('mouseover', function() {menuLeft.style.display = 'block'});
    menuButton.addEventListener('mouseout', function() {menuLeft.style.display = 'none'})
    const menuVertical = document.querySelectorAll('.menu-vertical > li > a');
    for (let i = 0; i < menuVertical.length; i++) {
        let menuDot = document.createElement('img');
        menuDot.setAttribute('src', './menuDot.gif');
        menuVertical[i].prepend(menuDot);
    }
    const searchButton = document.querySelector('#search-button');
    const searchInput = document.getElementById('search-input');
    searchButton.addEventListener('mouseover', function() {
        searchInput.style.opacity = '1';
        searchInput.style.width = 'calc(100% - 225px)';
        console.log(searchInput.style.width)
    });
    searchButton.addEventListener('mouseout', function() {
        searchInput.style.opacity = '0';
        searchInput.style.width = '0px';
    })
    searchInput.addEventListener('mouseover', function() {
        searchInput.style.opacity = '1';
        searchInput.style.width = 'calc(100% - 225px)';
        console.log(searchInput.style.width)
    });
    searchInput.addEventListener('mouseout', function() {
        searchInput.style.opacity = '0';
        searchInput.style.width = '0px';
    })
    const submitButton = document.querySelector('#search-button > a')
    searchInput.addEventListener('keyup', function(event){
        if (event.keyCode == 13) {submitButton.click()};
    })
    submitButton.onclick = function () {
        if (searchInput.value == "") {window.alert('Hãy nhập tin tức muốn tìm')} else {
            window.open('https://www.google.com/search?q='+searchInput.value+'&as_sitesearch=24h.com.vn','_blank');
            searchInput.value = "";
        }
    }
    function widgetPagination() {
        for (let i = 0; i<3 ; i++) {
            console.log(document.getElementById('pag'+i))
            document.getElementById('pag'+i).addEventListener('click', function(){
                console.log(i);
                document.getElementById('pag'+i).className = 'pag-active';
                document.getElementById('widget-page'+i).style.display = 'block';
                for (let x = 0; x <3; x++) {
                    if (x != i) {
                        console.log(document.getElementById('widget-page'+x))
                        document.getElementById('widget-page'+x).style.display = 'none';
                        console.log(document.getElementById('widget-page'+x))
                        document.getElementById('pag'+x).removeAttribute('class');
                    }
                }
                if (i ==0) {document.getElementById('pag<').style.display = 'none'} else {document.getElementById('pag<').style.display = 'initial'};
                if (i ==2) {document.getElementById('pag>').style.display = 'none'} else {document.getElementById('pag>').style.display = 'initial'};
            })
        }
        document.getElementById('pag<').addEventListener('click', function() {
            let pagactive = document.getElementsByClassName('pag-active');
            let newidactive = parseInt(pagactive[0].id.charAt(3)) - 1;
            document.getElementById('pag'+newidactive).click();
        })
        document.getElementById('pag>').addEventListener('click', function() {
            let pagactive = document.getElementsByClassName('pag-active');
            let newidactive = parseInt(pagactive[0].id.charAt(3)) + 1;
            document.getElementById('pag'+newidactive).click();
        })
    }
    widgetPagination();
    function menuMobile() {
        const mobileButton = document.getElementById('menu-mobile-button');
        const mobileMenu = document.getElementById('menu-mobile');
        mobileButton.addEventListener('click', function(){
            if (mobileMenu.style.display == 'none') {mobileMenu.style.display = 'flex'}
            else (mobileMenu.style.display = 'none');
        })
        const mobileChildButtons = document.querySelectorAll('span[id^="mobile-child-button"]');
        for (let i = 0; i < mobileChildButtons.length; i++) {
            let mobileChildButton = document.getElementById('mobile-child-button'+i);
            var arrow = document.createElement('p');
            arrow.append('>');
            arrow.setAttribute('class', 'arrow')
            mobileChildButton.append(arrow);
            mobileChildButton.addEventListener('click', function() {
                let mobileChild = document.getElementById('mobile-child'+i);
                console.log(mobileChild)
                mobileChild.setAttribute('class','menu-mobile mobile-child-active');
                document.getElementById('mobile-back').style.display = 'block';
            })
        }     
    }
    menuMobile();
});
function mobileback() {
    let mobileactive = document.getElementsByClassName('mobile-child-active');
    console.log(mobileactive)
    mobileactive[0].setAttribute('class', 'menu-mobile');
    document.getElementById('mobile-back').style.display = 'none'
}