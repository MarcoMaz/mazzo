'use client';

import './IntroSection.css';

import { useEffect, useState } from 'react';

import data from '../../../public/assets/content/content.json';

import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../../components/molecules/Paragraph/Paragraph';

import Image from 'next/image';

import avatarImage from '../../../public/assets/images/mm.jpeg';

const IntroSection: React.FC = () => {
  const {
    headline,
    paragraphs,
    image: { alt },
  } = data.hi;

  return (
    <header className='intro-section'>
      <div className='intro-section__avatar'>
        <Image src={avatarImage} alt={alt} priority />
        <Heading level={1} label={headline} />
      </div>
      <div className='intro-section__paragraphGroup'>
        {paragraphs.map((paragraph, index) => (
          <Paragraph
            key={index}
            text={paragraph.text}
            boldify={paragraph.boldify}
          />
        ))}
      </div>
    </header>
  );
};

export default IntroSection;
