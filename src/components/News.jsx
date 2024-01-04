import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import Loader from './Loader';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
const {Text, Title} = Typography;
const { Option } = Select;
const demoImage = 'https://static.vecteezy.com/system/resources/previews/030/717/667/original/pixel-art-illustration-newspaper-pixelated-newspaper-news-paper-soffice-icon-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-vector.jpg';

const News = ({simplified}) => {
  const  {data: cryptoNewsApi , isFetching} = useGetCryptoNewsQuery();
  const size = (cryptoNewsApi?.data?.length>=6 && simplified) ? 6 : (cryptoNewsApi?.data?.length>=6)? 12 : cryptoNewsApi?.data?.length;
  if(isFetching) return <Loader />;
  return (
    <Row gutter={[ 24,24 ]}>
      {cryptoNewsApi.data.slice(0,size).map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className='news-card'>
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className='news-image-container'>
                <Title className='news-title' level={4}>{news.title}</Title>
                <img src={news?.thumbnail || demoImage} alt= "news" style={{height:200}}/>
              </div>
              <p>
                {
                  news.description > 100 ?
                   `${news.description.substring(0.100)} ...`: news.description
                }
              </p>
              <div className='provider-container'>
                <div>
                  <Text>{news.createdAt.split('+')[0]}</Text>
                </div>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News