const janr = document.querySelector('.promo_genre')
// const reklam = document.querySelectorAll('.promo_adv img')
const duyme = document.querySelectorAll('.promo_menu-item')
const kino = document.querySelector('.promo_title')
const bg = document.querySelector(".promo_bg")
const adlar = document.querySelector(".promo_interactive-list")
const rembo = document.querySelectorAll('.promo_interactive-item')
const squid = document.querySelectorAll('.promo_interactive-item')
// const lost = document.querySelectorAll('.promo_interactive-item')
// const vikings = document.querySelectorAll('.promo_interactive-item')
// const kon_tiki = document.querySelectorAll('.promo_interactive-item')
// const bhd = document.querySelectorAll('.promo_interactive-item')

// janr.innerHTML = 'DRAMA';
// reklam.forEach(element => {
//     element.remove()
// });

duyme[0].onclick = () => {
    duyme.forEach(btn => btn.classList.remove('promo_menu-item_active'));
    duyme[0].classList.add('promo_menu-item_active');

    bg.style.backgroundImage = "URL('img/mars.webp')"
    janr.innerHTML = 'MACERA'
    kino.innerHTML = 'MARSLI'
    adlar.innerHTML = `
    <ul class="promo_interactive-list">
                        <li class="promo_interactive-item">Rembo
                            <div class="delete"></div>
                        </li>
                        <li class="promo_interactive-item">LOST
                            <div class="delete"></div>
                        </li>
                        <li class="promo_interactive-item">Vikings
                            <div class="delete"></div>
                        </li>
                        <li class="promo_interactive-item">KON TIKI
                            <div class="delete"></div>
                        </li>
                        <li class="promo_interactive-item">Black Hawk Down
                            <div class="delete"></div>
                        </li>
                    </ul>`
}

rembo[0].onclick = () => {
    sekil.style.backgroundImage = 'url(img/rembo.webp)'
    janr.innerHTML = 'BOEVIK'
    kino.innerHTML = 'REMBO'
}

rembo[1].onclick = () => {
    sekil.style.backgroundImage = 'url(img/lost.avif)'
    janr.innerHTML = 'MISTIKA'
    kino.innerHTML = 'LOST'
}

rembo[2].onclick = () => {
    sekil.style.backgroundImage = 'url(img/vikings.jpg)'
    janr.innerHTML = 'TARIXI'
    kino.innerHTML = 'VIKINGS'
}

rembo[3].onclick = () => {
    sekil.style.backgroundImage = 'url(img/kontiki.webp)'
    janr.innerHTML = 'MACERA'
    kino.innerHTML = 'KON TIKI'
}

rembo[4].onclick = () => {
    sekil.style.backgroundImage = 'url(img/bhd.jpg)'
    janr.innerHTML = 'HERBI'
    kino.innerHTML = 'BLACK HAWK DOWN'
}




duyme[1].onclick = () => {
    duyme.forEach(btn => btn.classList.remove('promo_menu-item_active'));
    duyme[1].classList.add('promo_menu-item_active');

    bg.style.backgroundImage = "URL('img/soz.webp')"; // Можно заменить на нужную картинку
    janr.innerHTML = 'DRAMA';
    kino.innerHTML = 'SOZ';

    adlar.innerHTML = `
        <ul class="promo_interactive-list">
            <li class="promo_interactive-item">Squid Game<div class="delete"></div></li>
            <li class="promo_interactive-item">Breaking Bad<div class="delete"></div></li>
            <li class="promo_interactive-item">Game of Thrones<div class="delete"></div></li>
            <li class="promo_interactive-item">Stranger Things<div class="delete"></div></li>
            <li class="promo_interactive-item">Peaky Blinders<div class="delete"></div></li>
        </ul>
    `;

    const serials = document.querySelectorAll('.promo_interactive-item');

    serials[0].onclick = () => {
        sekil.style.backgroundImage = 'url(img/squid.webp)';
        janr.innerHTML = 'TRILLER';
        kino.innerHTML = 'SQUID GAME';
    }

    serials[1].onclick = () => {
        sekil.style.backgroundImage = 'url(img/breaking.webp)';
        janr.innerHTML = 'DRAMA';
        kino.innerHTML = 'BREAKING BAD';
    }

    serials[2].onclick = () => {
        sekil.style.backgroundImage = 'url(img/game-of.webp)';
        janr.innerHTML = 'FENTEZI';
        kino.innerHTML = 'GAME OF THRONES';
    }

    serials[3].onclick = () => {
        sekil.style.backgroundImage = 'url(img/stranger.jpg)';
        janr.innerHTML = 'MISTIKA';
        kino.innerHTML = 'STRANGER THINGS';
    }

    serials[4].onclick = () => {
        sekil.style.backgroundImage = 'url(img/peaky.jpg)';
        janr.innerHTML = 'DRAMA';
        kino.innerHTML = 'PEAKY BLINDERS';
    }
};

duyme[3].onclick = () => {
    duyme.forEach(btn => btn.classList.remove('promo_menu-item_active'));
    duyme[3].classList.add('promo_menu-item_active');

    bg.style.backgroundImage = "URL('img/klip.jpg')";
    janr.innerHTML = 'MUSIC';
    kino.innerHTML = 'CLIP';

    adlar.innerHTML = `
        <ul class="promo_interactive-list">
            <li class="promo_interactive-item">Imagine Dragons - Believer<div class="delete"></div></li>
        <li class="promo_interactive-item">Billie Eilish - Bad Guy<div class="delete"></div></li>
        <li class="promo_interactive-item">Eminem - Lose Yourself<div class="delete"></div></li>
        <li class="promo_interactive-item">Linkin Park - Numb<div class="delete"></div></li>
        <li class="promo_interactive-item">BTS - Dynamite<div class="delete"></div></li>
        </ul>
    `;

    const clips = document.querySelectorAll('.promo_interactive-item');

    clips[0].onclick = () => {
        sekil.style.backgroundImage = 'url(img/believer.webp)';
        janr.innerHTML = 'MUSIC';
        kino.innerHTML = 'BELIEVER';
    }

    clips[1].onclick = () => {
        sekil.style.backgroundImage = 'url(img/badguy.webp)';
        janr.innerHTML = 'MUSIC';
        kino.innerHTML = 'BAD GUY';
    }

    clips[2].onclick = () => {
        sekil.style.backgroundImage = 'url(img/eminem.jpg)';
        janr.innerHTML = 'RAP';
        kino.innerHTML = 'LOSE YOURSELF';
    }

    clips[3].onclick = () => {
        sekil.style.backgroundImage = 'url(img/numb.jpg)';
        janr.innerHTML = 'ROCK';
        kino.innerHTML = 'NUMB';
    }

    clips[4].onclick = () => {
        sekil.style.backgroundImage = 'url(img/bts.jpeg)';
        janr.innerHTML = 'K-POP';
        kino.innerHTML = 'DYNAMITE';
    }
};

duyme[2].onclick = () => {
    duyme.forEach(btn => btn.classList.remove('promo_menu-item_active'));
    duyme[2].classList.add('promo_menu-item_active');

    bg.style.backgroundImage = "URL('img/multfilm.jpg')";
    janr.innerHTML = 'ANIMASİYA';
    kino.innerHTML = 'MULTFİLM';

    adlar.innerHTML = `
        <ul class="promo_interactive-list">
            <li class="promo_interactive-item">Shrek<div class="delete"></div></li>
            <li class="promo_interactive-item">Madagascar<div class="delete"></div></li>
            <li class="promo_interactive-item">Frozen<div class="delete"></div></li>
            <li class="promo_interactive-item">Kung Fu Panda<div class="delete"></div></li>
            <li class="promo_interactive-item">Toy Story<div class="delete"></div></li>
        </ul>
    `;

    const cartoon = document.querySelectorAll('.promo_interactive-item');

    cartoon[0].onclick = () => {
        sekil.style.backgroundImage = 'url(img/shrek.jpg)';
        janr.innerHTML = 'ANIMASİYA';
        kino.innerHTML = 'SHREK';
    }

    cartoon[1].onclick = () => {
        sekil.style.backgroundImage = 'url(img/madagaskar.jpg)';
        janr.innerHTML = 'ANIMASİYA';
        kino.innerHTML = 'MADAGASCAR';
    }

    cartoon[2].onclick = () => {
        sekil.style.backgroundImage = 'url(img/frozen.png)';
        janr.innerHTML = 'ANIMASİYA';
        kino.innerHTML = 'FROZEN';
    }

    cartoon[3].onclick = () => {
        sekil.style.backgroundImage = 'url(img/kungfu.jpg)';
        janr.innerHTML = 'ANIMASİYA';
        kino.innerHTML = 'KUNG FU PANDA';
    }

    cartoon[4].onclick = () => {
        sekil.style.backgroundImage = 'url(img/toystory.jpg)';
        janr.innerHTML = 'ANIMASİYA';
        kino.innerHTML = 'TOY STORY';
    }
};

duyme[4].onclick = () => {
    duyme.forEach(btn => btn.classList.remove('promo_menu-item_active'));
    duyme[4].classList.add('promo_menu-item_active');

    bg.style.backgroundImage = "URL('img/trailer.webp')";
    janr.innerHTML = 'TRAILER';
    kino.innerHTML = 'YENİ FİLMLƏR';

    adlar.innerHTML = `
        <ul class="promo_interactive-list">
            <li class="promo_interactive-item">Dune 2<div class="delete"></div></li>
            <li class="promo_interactive-item">Avengers<div class="delete"></div></li>
            <li class="promo_interactive-item">Batman<div class="delete"></div></li>
            <li class="promo_interactive-item">Deadpool 3<div class="delete"></div></li>
            <li class="promo_interactive-item">Joker 2<div class="delete"></div></li>
        </ul>
    `;

    const trailer = document.querySelectorAll('.promo_interactive-item');

    trailer[0].onclick = () => {
        sekil.style.backgroundImage = 'url(img/dune2.jpg)';
        janr.innerHTML = 'SCI-FI';
        kino.innerHTML = 'DUNE 2';
    }

    trailer[1].onclick = () => {
        sekil.style.backgroundImage = 'url(img/avangers.jpeg)';
        janr.innerHTML = 'FENTEZI';
        kino.innerHTML = 'AVENGERS';
    }

    trailer[2].onclick = () => {
        sekil.style.backgroundImage = 'url(img/batman.avif)';
        janr.innerHTML = 'SUPERQEHREMAN';
        kino.innerHTML = 'BATMAN';
    }

    trailer[3].onclick = () => {
        sekil.style.backgroundImage = 'url(img/deadpool3.avif)';
        janr.innerHTML = 'KOMEDİYA';
        kino.innerHTML = 'DEADPOOL 3';
    }

    trailer[4].onclick = () => {
        sekil.style.backgroundImage = 'url(img/joker2.webp)';
        janr.innerHTML = 'PSİXOLOGİYA';
        kino.innerHTML = 'JOKER 2';
    }
};
