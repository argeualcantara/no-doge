// Setting language, try getting value from cookie, then browser
const cookieLang = document.cookie
.split("; ")
.find((row) => row.startsWith("lang="))
.split("=")[1];
const lang = cookieLang? cookieLang.toLowerCase(): navigator.language.toLowerCase();

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
            bttn.innerText = (lang == "pt-BR"?"Tweetar":"Tweet");
        }
        var title = document.querySelector("head > title").innerHTML
        if (title) {
            var newTitle = title.replace(" / X", " / Twitter");
            newTitle = newTitle.replace("on X", "on Twitter").replace("no X", "no Twitter");
            document.querySelector("head > title").innerHTML = newTitle;
        }

        var tweetBtn = document.querySelector("#react-root > div > div > div > main > div > div > div > div > div > div > div > div > div:nth-child(1) > div > div > div > div > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div > span > span");
        if(tweetBtn) {
            tweetBtn.innerText = (lang.indexOf("pt") != -1?"Tweetar":"Tweet");
        }
        var modalTweetBtn = document.querySelector("#layers > div:nth-child(2) > div > div > div > div > div > div.css-1dbjc4n.r-1habvwh.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-rsyp9y.r-1pjcn9w.r-htvplk.r-1udh08x.r-1potc6q > div > div > div > div:nth-child(3) > div.css-1dbjc4n.r-yfoy6g.r-1pp923h.r-1moyyf3.r-1h8ys4a > div:nth-child(1) > div > div > div > div.css-1dbjc4n.r-yfoy6g.r-jumn1c.r-xd6kpl.r-gtdqiz.r-ipm5af.r-184en5c > div:nth-child(2) > div > div > div:nth-child(2) > div > div > span > span");
        if(modalTweetBtn) {
            modalTweetBtn.innerText = (lang.indexOf("pt") != -1?"Tweetar":"Tweet");
        }

        var retwtBtn = document.querySelector("#layers > div.css-1dbjc4n.r-1p0dtai.r-1d2f490.r-105ug2t.r-u8s1d.r-zchlnj.r-ipm5af > div > div > div > div:nth-child(2) > div > div.css-1dbjc4n.r-yfoy6g.r-1q9bdsx.r-xnswec.r-j2cz3j.r-1udh08x.r-u8s1d > div > div > div > div[data-testid='retweetConfirm'] > div > div > span");
        if(retwtBtn) {
            retwtBtn.innerText = (lang.indexOf("pt") != -1?"Retweetar":"Retweet");
        }
        
        var commentRetwtBtn = document.querySelector("#layers > div.css-1dbjc4n.r-1p0dtai.r-1d2f490.r-105ug2t.r-u8s1d.r-zchlnj.r-ipm5af > div > div > div > div:nth-child(2) > div > div.css-1dbjc4n.r-yfoy6g.r-1q9bdsx.r-xnswec.r-j2cz3j.r-1udh08x.r-u8s1d > div > div > div > a[href='/compose/tweet'] > div > div > span");
        if(commentRetwtBtn) {
            commentRetwtBtn.innerText = (lang.indexOf("pt") != -1?"Comentar o Tweet":"Quote Tweet");
        }
        
    }, 500);
}
// Tweetdeck code
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
        
        var bttn = document.querySelector("#react-root > div > div > div > div > div > div > div > div > span > span");
        if (bttn) {
            bttn.innerText = (lang == "pt-BR"?"Tweetar":"Tweet");
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
