const janr = document.querySelector('.promo_genre')
// const reklam = document.querySelectorAll('.promo_adv img')
const duyme = document.querySelectorAll('.promo_menu-item')
const kino = document.querySelector('.promo_title')
const bg = document.querySelector(".promo_bg")
const adlar = document.querySelector(".promo_interactive-list")
const squid = document.querySelectorAll('.promo_interactive-item')
const imdb = document.querySelector('.promo_ratings span:nth-child(1)');
const netflix = document.querySelector('.promo_ratings span:nth-child(2)');

// const lost = document.querySelectorAll('.promo_interactive-item')
// const vikings = document.querySelectorAll('.promo_interactive-item')
// const kon_tiki = document.querySelectorAll('.promo_interactive-item')
// const bhd = document.querySelectorAll('.promo_interactive-item')

// janr.innerHTML = 'DRAMA';
// reklam.forEach(element => {
//     element.remove()
// });

function renderMovies() {

    duyme.forEach(btn => btn.classList.remove('promo_menu-item_active'));
    duyme[0].classList.add('promo_menu-item_active');


    bg.style.backgroundImage = "URL('img/mars.webp')";
    janr.innerHTML = 'MACERA';
    kino.innerHTML = 'MARSLI';


    adlar.innerHTML = `
        <li class="promo_interactive-item">Rembo<div class="delete"></div></li>
        <li class="promo_interactive-item">LOST<div class="delete"></div></li>
        <li class="promo_interactive-item">Vikings<div class="delete"></div></li>
        <li class="promo_interactive-item">KON TIKI<div class="delete"></div></li>
        <li class="promo_interactive-item">Black Hawk Down<div class="delete"></div></li>
    `;


    const items = document.querySelectorAll('.promo_interactive-item');

    items[0].onclick = () => {
        bg.style.backgroundImage = 'url(img/rembo.webp)';
        janr.innerHTML = 'BOEVIK';
        kino.innerHTML = 'REMBO';
        imdb.innerHTML = 'IMDb: 8.8';
        netflix.innerHTML = 'Netflix: 7.4';

    };

    items[1].onclick = () => {
        bg.style.backgroundImage = 'url(img/lost.avif)';
        janr.innerHTML = 'MISTIKA';
        kino.innerHTML = 'LOST';
        imdb.innerHTML = 'IMDb: 6.1';
        netflix.innerHTML = 'Netflix: 7.2';
    };

    items[2].onclick = () => {
        bg.style.backgroundImage = 'url(img/vikings.jpg)';
        janr.innerHTML = 'TARIXI';
        kino.innerHTML = 'VIKINGS';
        imdb.innerHTML = 'IMDb: 8.4';
        netflix.innerHTML = 'Netflix: 7.4';
    };

    items[3].onclick = () => {
        bg.style.backgroundImage = 'url(img/kontiki.webp)';
        janr.innerHTML = 'MACERA';
        kino.innerHTML = 'KON TIKI';
        imdb.innerHTML = 'IMDb: 4.3';
        netflix.innerHTML = 'Netflix: 5.2';
    };

    items[4].onclick = () => {
        bg.style.backgroundImage = 'url(img/bhd.jpg)';
        janr.innerHTML = 'HERBI';
        kino.innerHTML = 'BLACK HAWK DOWN';
        imdb.innerHTML = 'IMDb: 7.9';
        netflix.innerHTML = 'Netflix: 7.3';
    };


    const deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.promo_interactive-item').remove();
        });
    });
}


renderMovies();

duyme[0].onclick = renderMovies;



duyme[1].onclick = () => {
    duyme.forEach(btn => btn.classList.remove('promo_menu-item_active'));
    duyme[1].classList.add('promo_menu-item_active');

    bg.style.backgroundImage = "URL('img/soz.webp')";
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
        imdb.innerHTML = 'IMDb: 8.8';
        netflix.innerHTML = 'Netflix: 7.9';
    }

    serials[1].onclick = () => {
        sekil.style.backgroundImage = 'url(img/breaking.webp)';
        janr.innerHTML = 'DRAMA';
        kino.innerHTML = 'BREAKING BAD';
        imdb.innerHTML = 'IMDb: 6.5';
        netflix.innerHTML = 'Netflix: 7.4';
    }

    serials[2].onclick = () => {
        sekil.style.backgroundImage = 'url(img/game-of.webp)';
        janr.innerHTML = 'FENTEZI';
        kino.innerHTML = 'GAME OF THRONES';
        imdb.innerHTML = 'IMDb: 7.8';
        netflix.innerHTML = 'Netflix: 7.8';
    }

    serials[3].onclick = () => {
        sekil.style.backgroundImage = 'url(img/stranger.jpg)';
        janr.innerHTML = 'MISTIKA';
        kino.innerHTML = 'STRANGER THINGS';
        imdb.innerHTML = 'IMDb: 7.1';
        netflix.innerHTML = 'Netflix: 7.7';
    }

    serials[4].onclick = () => {
        sekil.style.backgroundImage = 'url(img/peaky.jpg)';
        janr.innerHTML = 'DRAMA';
        kino.innerHTML = 'PEAKY BLINDERS';
        imdb.innerHTML = 'IMDb: 9.0';
        netflix.innerHTML = 'Netflix: 8.8';
    }

    const deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.promo_interactive-item').remove();
        }, { once: true });
    });

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
        imdb.innerHTML = 'IMDb: 5.8';
        netflix.innerHTML = 'Netflix: 4.4';
    }

    clips[1].onclick = () => {
        sekil.style.backgroundImage = 'url(img/badguy.webp)';
        janr.innerHTML = 'MUSIC';
        kino.innerHTML = 'BAD GUY';
        imdb.innerHTML = 'IMDb: 7.8';
        netflix.innerHTML = 'Netflix: 7.4';
    }

    clips[2].onclick = () => {
        sekil.style.backgroundImage = 'url(img/eminem.jpg)';
        janr.innerHTML = 'RAP';
        kino.innerHTML = 'LOSE YOURSELF';
        imdb.innerHTML = 'IMDb: 8.8';
        netflix.innerHTML = 'Netflix: 9.4';
    }

    clips[3].onclick = () => {
        sekil.style.backgroundImage = 'url(img/numb.jpg)';
        janr.innerHTML = 'ROCK';
        kino.innerHTML = 'NUMB';
        imdb.innerHTML = 'IMDb: 2.8';
        netflix.innerHTML = 'Netflix: 2.3';
    }

    clips[4].onclick = () => {
        sekil.style.backgroundImage = 'url(img/bts.jpeg)';
        janr.innerHTML = 'K-POP';
        kino.innerHTML = 'DYNAMITE';
        imdb.innerHTML = 'IMDb: 4.7';
        netflix.innerHTML = 'Netflix: 3.4';
    }

    const deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.promo_interactive-item').remove();
        }, { once: true });
    });

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
        imdb.innerHTML = 'IMDb: 10.0';
        netflix.innerHTML = 'Netflix: 9.7';
    }

    cartoon[1].onclick = () => {
        sekil.style.backgroundImage = 'url(img/madagaskar.jpg)';
        janr.innerHTML = 'ANIMASİYA';
        kino.innerHTML = 'MADAGASCAR';
        imdb.innerHTML = 'IMDb: 8.8';
        netflix.innerHTML = 'Netflix: 8.4';
    }

    cartoon[2].onclick = () => {
        sekil.style.backgroundImage = 'url(img/frozen.png)';
        janr.innerHTML = 'ANIMASİYA';
        kino.innerHTML = 'FROZEN';
        imdb.innerHTML = 'IMDb: 8.1';
        netflix.innerHTML = 'Netflix: 7.9';
    }

    cartoon[3].onclick = () => {
        sekil.style.backgroundImage = 'url(img/kungfu.jpg)';
        janr.innerHTML = 'ANIMASİYA';
        kino.innerHTML = 'KUNG FU PANDA';
        imdb.innerHTML = 'IMDb: 9.8';
        netflix.innerHTML = 'Netflix: 8.4';
    }

    cartoon[4].onclick = () => {
        sekil.style.backgroundImage = 'url(img/toystory.jpg)';
        janr.innerHTML = 'ANIMASİYA';
        kino.innerHTML = 'TOY STORY';
        imdb.innerHTML = 'IMDb: 9.9';
        netflix.innerHTML = 'Netflix: 9.7';
    }

    const deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.promo_interactive-item').remove();
        }, { once: true });
    });

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
        imdb.innerHTML = 'IMDb: 9.0';
        netflix.innerHTML = 'Netflix: 8.4';
    }

    trailer[1].onclick = () => {
        sekil.style.backgroundImage = 'url(img/avangers.jpeg)';
        janr.innerHTML = 'FENTEZI';
        kino.innerHTML = 'AVENGERS';
        imdb.innerHTML = 'IMDb: 7.8';
        netflix.innerHTML = 'Netflix: 8.4';
    }

    trailer[2].onclick = () => {
        sekil.style.backgroundImage = 'url(img/batman.avif)';
        janr.innerHTML = 'SUPERQEHREMAN';
        kino.innerHTML = 'BATMAN';
        imdb.innerHTML = 'IMDb: 8.0';
        netflix.innerHTML = 'Netflix: 8.9';
    }

    trailer[3].onclick = () => {
        sekil.style.backgroundImage = 'url(img/deadpool3.avif)';
        janr.innerHTML = 'KOMEDİYA';
        kino.innerHTML = 'DEADPOOL 3';
        imdb.innerHTML = 'IMDb: 9.2';
        netflix.innerHTML = 'Netflix: 8.7';
    }

    trailer[4].onclick = () => {
        sekil.style.backgroundImage = 'url(img/joker2.webp)';
        janr.innerHTML = 'PSİXOLOGİYA';
        kino.innerHTML = 'JOKER 2';
        imdb.innerHTML = 'IMDb: 9.8';
        netflix.innerHTML = 'Netflix: 9.4';
    }

    const deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.promo_interactive-item').remove();
        }, { once: true });
    });

};
