
// Twitter.com code
if (location.href.indexOf("tweetdeck") == -1) {
    var i = 0;
    const loading = setInterval(() => {
        var logo = document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-5swwoo.r-13qz1uu.r-417010 > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1wtj0ep.r-1m04atk.r-i023vh.r-5njf8e.r-13qz1uu > div.css-901oao.r-1awozwy.r-vlxjld.r-xoduu5.r-37j5jr.r-n6v787.r-16dba41.r-1cwl3u0.r-bcqeeo.r-qvutc0 > svg")
        if(logo) {
            logo.setAttribute("viewBox", "0 0 16 16");
            var logoPath = document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-5swwoo.r-13qz1uu.r-417010 > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1wtj0ep.r-1m04atk.r-i023vh.r-5njf8e.r-13qz1uu > div.css-901oao.r-1awozwy.r-vlxjld.r-xoduu5.r-37j5jr.r-n6v787.r-16dba41.r-1cwl3u0.r-bcqeeo.r-qvutc0 > svg > g > path");
            if(logoPath) {
                logoPath.setAttribute("d", "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z");
            }   
        }
        var link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        link.href = 'https://abs.twimg.com/favicons/twitter.2.ico';
        i+= 1;
        if (i > 1000){
            clearInterval(loading);
        }
    }, 10);
    
    setInterval(() => {
        var logo = document.querySelector("h1 div > svg");
        if (logo) {
            logo.setAttribute("viewBox", "0 0 16 16");
            var logoPath = document.querySelector("h1 div > svg > g > path");
    
            if(logoPath) {
                logoPath.setAttribute("d", "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z");
            }
        }
        var bttn = document.querySelector("#react-root > div > div > div > header > div > div > div > div > div > a > div > span > div > div > span > span");
        if (bttn) {
            bttn.innerText = "Twittar"
        }
        var title = document.querySelector("head > title").innerHTML
        if (title) {
            document.querySelector("head > title").innerHTML = title.replace(" / X", " / Twitter");
        }
        
    }, 500);
}

if (location.href.indexOf("tweetdeck") != -1) {

    setInterval(() => {
        var logo = document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-5swwoo.r-13qz1uu.r-417010 > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1wtj0ep.r-1m04atk.r-i023vh.r-5njf8e.r-13qz1uu > div.css-901oao.r-1awozwy.r-vlxjld.r-xoduu5.r-37j5jr.r-n6v787.r-16dba41.r-1cwl3u0.r-bcqeeo.r-qvutc0 > svg");
        if (logo) {
            logo.setAttribute("viewBox", "0 0 16 16");
            var logoPath = document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-5swwoo.r-13qz1uu.r-417010 > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1wtj0ep.r-1m04atk.r-i023vh.r-5njf8e.r-13qz1uu > div.css-901oao.r-1awozwy.r-vlxjld.r-xoduu5.r-37j5jr.r-n6v787.r-16dba41.r-1cwl3u0.r-bcqeeo.r-qvutc0 > svg > g > path");
    
            if(logoPath) {
                logoPath.setAttribute("d", "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z");
            }
        }
        
        var bttn = document.querySelector("#react-root > div > div > div > header > div > div > div > div > div > a > div > span > div > div > span > span");
        if (bttn) {
            bttn.innerText = "Twittar"
        }

        var title = document.querySelector("head > title").innerHTML
        if (title) {
            document.querySelector("head > title").innerHTML = title.replace(" / X", " / Twitter");
        }

        var link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        link.href = 'https://abs.twimg.com/favicons/twitter.2.ico';
        
    }, 500);
}
