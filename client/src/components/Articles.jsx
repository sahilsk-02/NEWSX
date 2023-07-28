import { useState, useEffect } from 'react';
import { getNews } from "../service/api";

import InfiniteScroll from 'react-infinite-scroll-component';

//components
import Article from './Article';

const Articles = () => {

    const [news, setNews] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const dailyNews = async () => {
            const response = await getNews(page);
            setNews([...new Set([...news, ...response.data])]);
        }
        dailyNews();
    }, [page])

    return (
        <InfiniteScroll
            dataLength={news.length}
            next={() => setPage(page => page + 1)}
            hasMore={true}
        >
            {
                news.map((article,key) => (
                    <Article article={article} key={key} />
                ))
            }
        </InfiniteScroll>
    )
}

export default Articles;