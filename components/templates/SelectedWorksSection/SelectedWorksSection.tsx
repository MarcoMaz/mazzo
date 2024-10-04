import data from '../../../public/assets/content/content.json';

import Heading from '../../atoms/Heading/Heading';

import './SelectedWorksSection.css';
import ExternalLink from '@/components/atoms/ExternalLink/ExternalLink';
import React from 'react';

import Image from 'next/image';
import Carousel from '@/components/organisms/Carousel/Carousel';
import Accordion from '@/components/organisms/Accordion/Accordion';

const SelectedWorksSection: React.FC = () => {
  const { nda, knowMore, items, headline } = data.selectedWorks;

  return (
    <div className='selected-works-section' id='selected-works'>
      <Heading level={2} label={headline} />
      <Accordion items={items} />
      <Carousel
        ariaLabelMainTopic='Main Topic'
        ariaLabelTopic='Topic'
        items={items}
      ></Carousel>
      <Heading level={3} label={nda.headline} />
      <div data-cy={'selected-works-nda-images'}>
        {nda.images.map(({ src, alt }) => (
          <Image
            data-cy={src}
            src={src}
            alt={alt}
            key={src}
            height={45}
            width={150}
          />
        ))}
      </div>
      <Heading level={3} label={knowMore.headline} />
      {knowMore.CTA.map(({ url, label }, index) => (
        <React.Fragment key={index}>
          <ExternalLink url={url} label={label} />
          {index !== knowMore.CTA.length - 1 && <span> or </span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SelectedWorksSection;
