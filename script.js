/* =====================================
   JANANI PORTFOLIO - BABY PINK THEME
===================================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    scroll-behavior:smooth;
    font-family:'Poppins',sans-serif;
}

body{
    background:linear-gradient(135deg,#fff8fb,#ffeef5,#fff7fa);
    color:#444;
    overflow-x:hidden;
}

/* Scrollbar */

::-webkit-scrollbar{
    width:10px;
}

::-webkit-scrollbar-track{
    background:#ffeaf3;
}

::-webkit-scrollbar-thumb{
    background:#ec7ca8;
    border-radius:20px;
}

/* Navigation */

header{
    position:fixed;
    top:0;
    width:100%;
    z-index:999;
}

.navbar{

    width:100%;
    padding:18px 9%;

    display:flex;
    justify-content:space-between;
    align-items:center;

    background:rgba(255,255,255,.75);

    backdrop-filter:blur(15px);

    box-shadow:0 8px 30px rgba(0,0,0,.05);

}

.logo{

    font-size:30px;
    font-weight:700;

    color:#e75480;

}

.navbar ul{

    display:flex;
    list-style:none;

}

.navbar ul li{

    margin-left:35px;

}

.navbar ul li a{

    text-decoration:none;

    color:#555;

    font-weight:500;

    transition:.3s;

}

.navbar ul li a:hover{

    color:#e75480;

}

/* Hero */

.hero{

    min-height:100vh;

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:140px 9% 80px;

}

.hero-content{

    width:55%;

}

.hero-content h3{

    color:#ec7ca8;

    font-size:30px;

}

.hero-content h1{

    font-size:72px;

    color:#d63384;

    margin:10px 0;

}

.hero-content h2{

    color:#666;

    margin-bottom:20px;

}

.hero-content p{

    font-size:18px;

    line-height:1.9;

    color:#555;

    margin-bottom:35px;

}

/* Buttons */

.buttons{

    display:flex;
    gap:15px;
    flex-wrap:wrap;

}

.btn{

    text-decoration:none;

    background:#e75480;

    color:white;

    padding:14px 28px;

    border-radius:50px;

    transition:.3s;

    font-weight:600;

}

.btn:hover{

    background:#d63384;

    transform:translateY(-4px);

}

.btn-outline{

    text-decoration:none;

    border:2px solid #e75480;

    color:#e75480;

    padding:14px 28px;

    border-radius:50px;

    transition:.3s;

    font-weight:600;

}

.btn-outline:hover{

    background:#e75480;

    color:white;

}

/* Hero Image */

.hero-image{

    width:40%;

    display:flex;

    justify-content:center;

}

.hero-image img{

    width:360px;

    height:360px;

    object-fit:cover;

    border-radius:50%;

    border:8px solid white;

    box-shadow:0 25px 60px rgba(236,124,168,.35);

    transition:.4s;

}

.hero-image img:hover{

    transform:scale(1.05);

}

/* Sections */

section{

    padding:90px 9%;

}

.container{

    max-width:1200px;

    margin:auto;

}

section h2{

    text-align:center;

    color:#d63384;

    font-size:42px;

    margin-bottom:45px;

}

section p{

    font-size:18px;

    line-height:1.9;

    text-align:center;

    color:#555;

}

