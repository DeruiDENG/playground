import React, { Component } from 'react';

export class Comments extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    const anchor = document.getElementById('inject-comments-for-uterances');
    script.setAttribute('src', 'https://utteranc.es/client.js');
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('async', 'true');
    script.setAttribute('repo', 'DeruiDENG/blog-comment');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'github-light');
    anchor?.appendChild(script);
  }

  render() {
    return <div id="inject-comments-for-uterances" />;
  }
}
