import Head from 'next/head'
import Link from 'next/link'

export default function BlogPost({post}) {
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
        <Link href="/test"><a className="blog-title-link">{post.title}</a></Link></h2>
      
      <div>{post.detail}</div>
      <div className="blog-date">{post.date}</div>
      
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
BlogPost.getInitialProps = async ({req,query}) => {
  const res = await fetch('http://localhost:3000/api/post/${query.postId}')
  const json = await res.json()
  return { post: json.post }
}


