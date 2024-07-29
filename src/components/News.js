
// type "rce" and then press entre 
import React, { useEffect, useState } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(true);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0);

    // LECTURE NUMBER 34
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const fetchMoreData = async () => {
        //  setState({ page: this.state.page + 1 });
        console.log(page);
        const urla = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pagesize}`;
        // ye setpage yha lga diye to ab wo jo 1st page 2 baar dikh rha tha wo ab nhi hoga esa
        setpage(page + 1);
        // this.setState({ loading: true });
        let data = await fetch(urla);
        let parsedatas = await data.json();
        console.log(parsedatas);
        setarticles(articles.concat(parsedatas.articles));
        setloading(false);
    };


    // LECTURE NUMBER 33
    // SINCE THIS BELOW CODE IS SAME IN ALL THE 3 FUNCTIONS BELOW i.e. WE MADE A COMMON FUNCTION TO CALL THIS FROM ALL THAT THREE FUNCTIONS 
    const updatenews = async () => {
        props.setprogress(10);
        const urla = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
        // this.setState({ loading: true });
        setloading(true);
        props.setprogress(30);
        let data = await fetch(urla);
        let parsedatas = await data.json();
        props.setprogress(70);
        console.log(parsedatas);
        setarticles(parsedatas.articles);
        settotalResults(parsedatas.totalResults);
        setloading(false);
        props.setprogress(100);
    }


    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)}-ABDNews`;
        updatenews();
    }, []);

    return (
        <>
            {/* LECTURE NUMBER 24 */}
            <div className="abcd">
            <img src="https://img.myloview.com/posters/abd-letter-logo-design-700-179383535.jpg" alt="Logo Description"
                style={{ width: "140px", height: "140px" , marginTop:"80px" }}
                />
            <h1 className="text-center" style={{ fontSize: "70px", marginTop: "80px", color: "rgb(240 28 28)", fontFamily: "lato sans-serif" }}> News</h1>
                </div>

            <h6 className="text-center" style={{ marginTop: "-14px", marginBottom: "35px", color: "purple" }}>Superfast News Topic {capitalizeFirstLetter(props.category)}</h6>
            {loading && <Spinner />}


            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {/* !this.state.loading &&  */}
                        {articles.map((element) => {

                            return <div className="col-md-4" key={element.url}>
                                <Newsitems title={element.title ? element.title.slice(0, 34) : ""} description={element.description ? element.description.slice(0, 90) : ""} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
}

export default News

News.defaultProps = {
    pagesize: 9,
    country: "in",
    category: 'general',
}
News.propTypes = {
    pagesize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
}