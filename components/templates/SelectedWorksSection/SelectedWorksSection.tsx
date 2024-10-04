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
        items={[
          {
            id: '1',
            children: (
              <article>
                <h2>Heading 1</h2>
                <p>This is some text</p>
                <a href='#'>Link 1</a>
              </article>
            ),
          },
          {
            id: '2',
            children: (
              <>
                <h2>Heading 2</h2>
                <p>This is some text</p>
                <a href='#'>Link 2</a>
              </>
            ),
          },
          {
            id: '3',
            children: (
              <>
                <h2>Heading 3</h2>
                <p>This is some text</p>
                <a href='#'>Link 3</a>
              </>
            ),
          },
          {
            id: '4',
            children: (
              <>
                <h2>Heading 4</h2>
                <p>This is some text</p>
                <a href='#'>Link 4</a>
              </>
            ),
          },
          {
            id: '5',
            children: (
              <>
                <h2>Heading 5</h2>
                <p>This is some text</p>
                <a href='#'>Link 5</a>
              </>
            ),
          },
          {
            id: '6',
            children: (
              <>
                <h2>Heading 6</h2>
                <p>This is some text</p>
                <a href='#'>Link 6</a>
              </>
            ),
          },
          {
            id: '7',
            children: (
              <>
                <h2>Heading 7</h2>
                <p>This is some text</p>
                <a href='#'>Link 7</a>
              </>
            ),
          },
          {
            id: '8',
            children: (
              <>
                <h2>Heading 8</h2>
                <p>This is some text</p>
                <a href='#'>Link 8</a>
              </>
            ),
          },
        ]}
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
