import React from 'react';
import axios from 'axios';
import './rss.css';

function RssFeed() {
    const [rssContent, setRssContent] = React.useState('');

    React.useEffect(() => {
        axios.get('/rss.xml')

            .then(response => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(response.data, 'text/xml');

                const items = xmlDoc.getElementsByTagName('item');
                let content = '';

                for (let i = 0; i < items.length; i++) {
                    const title = items[i].getElementsByTagName('title')[0].textContent;
                    const link = items[i].getElementsByTagName('link')[0].textContent;
                    const description = items[i].getElementsByTagName('description')[0].textContent;

                    content += `
            <div class="feed-container">
              <h3 class="notice-text">${title}</h3>
              <div class="notice-text">
                <p><a href="${link}">${link}</a></p>
                <p>${description}</p>
              </div>
            </div>
          `;
                }

                setRssContent(content);
            })
            .catch(error => {
                console.error('Error fetching RSS feed:', error);
            });
    }, []);

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: rssContent }} />
        </div>
    );
}

export default RssFeed;
