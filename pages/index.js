import React from 'react';
import Error from 'next/error';
import fetch from 'isomorphic-fetch';
import Link from 'next/link';
import Router from 'next/Router';

class Index extends React.Component {

  static async getInitialProps(context) {
    const { req, res, query } = context;

    let page;
    let stories;
    try {
      page = Number(query.page) || 1;
      //      const res = await fetch('http://node-hnapi.herokuapp.com/news?page=1');
      const res = await fetch(`https://jsonkeeper.com/b/IPQF`);
      stories = await res.json();
    } catch (e) {
      console.log('e', e);
      stories = []
    }
    return {
      stories,
      page
    };
  }

  /**
   * Register service worker here
   */
  componentDidMount(){
    if("serviceWorker" in navigator){
      navigator.serviceWorker
        .register('/service-worker.js') // next doesnt know abt this so will fail. create custom server
        .then(registration=>{
          console.log('service worker registration success', registration);
        })
        .catch(err=>{
          console.warn('service worker registration failed', err.message);
        })
    }
  }

  render() {
    const { stories, page } = this.props;
    if (!stories.length) {
      return (<Error statusCode="503" />)
    }
    return (
      <>
        
        <span onClick={()=>Router.back()}>Back</span>

        <h2>Hacker News</h2>
        <h3>PWA on nextjs</h3>
        <ul>
          {stories.map(story => (
            <li key={story.id}>{story.title}</li>
          ))}
        </ul>
          <footer>
            <Link href={`/?page=${page+1}`}>
              <a >You are on page {page} click here</a>
            </Link>
          </footer>
      </>
    );

  }
}

export default Index;