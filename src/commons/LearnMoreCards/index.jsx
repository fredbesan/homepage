/* @flow */
import React from 'react';
import CardDeck from '@windingtree/wt-ui-react/lib/components/CardDeck';
import Card from 'commons/Card';
import cardsInfo from './data';

export type DataType = {
  href: string,
  title: string,
  text: string,
  linkText: string,
  imgSrc: string,
  shortText: string,
  buttonLabel: string,
  imgWidth: number
};

type PropsType = {
  main?: boolean,
  data?: DataType[]
};

const LearnMoreCards = ({ main, data = cardsInfo }: PropsType) => (
  <CardDeck>
    {data.map((info, index) => {
      if (main && index > 3) return null;
      return (
        <Card
          key={info.href}
          {...info}
          main={main}
        />
      );
    })}
  </CardDeck>
);
export default LearnMoreCards;
