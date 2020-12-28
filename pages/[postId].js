import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="hero">
       <h1 className="hero-title"> Mehmet Sait Işık </h1>
      </div>
      <div className="hero-social-links">
      <Link href="https://twitter.com/saitisik63">
        <a className="social-link"> Twitter </a>
      </Link>
      
      <Link href="https://www.instagram.com/sanatsalyargi/">
        <a className="social-link"> İnstagram </a>
      </Link>
      </div>
     
        <div className="blog">
      <h2 className="blog-title">
        <Link href="/test"><a className="blog-title-link">Blog Başlığı</a></Link></h2>
      
      <div>Lorem ipsum dolor, sit amet consectetur
         adipisicing elit. In, sequi quia! Aspernatur 
         rerum dolorem excepturi possimus neque, nostrum eum debitis 
         fuga explicabo
         architecto suscipit ut id cumque veritatis, 
         similique odio. </div>
      <div className="blog-date">29 Aralık 2020</div>
      
        </div>
       
        <style jsx>{`
        .container {
          max-width:650px;
          width:100%;
          margin: 0 auto;
        }
        .hero {
          text-align: center;
          margin: 96px 0;
        }
        .social-link:first-child{
          margin-right:5px
        }

        .hero-title{
          font-size:48px;
        }

        .blog-date{
          text-align:right;
          color:#cccccc;
          margin:12px 0 48px 0;
        }

        a{
          color:#35459e;
          text-decoration:none;

        }
        .hero-social-links{
          
          text-align:center;
        
        }


      `}</style>
     
    </div>
    
  );
  
}
