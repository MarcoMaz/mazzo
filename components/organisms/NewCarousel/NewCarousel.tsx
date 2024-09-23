import "./NewCarousel.css";

interface NewCarouselNavigationProps {
  items: NewCarouselItemProps[];
}

const NewCarouselNavigation: React.FC<NewCarouselNavigationProps> = ({
  items,
}) => {
  return (
    <ul className='slidenav'>
      {items.map((_, index) => (
        <li key={index}>
          <button data-slide={index} type='button'>
            {index + 1}
          </button>
        </li>
      ))}
    </ul>
  );
};

const NewCarouselControls = () => {
  return (
    <ul className='controls'>
      <li>
        <button type='button' className='btn-prev'>
          Left
        </button>
      </li>
      <li>
        <button type='button' className='btn-next'>
          Right
        </button>
      </li>
    </ul>
  );
};

interface NewCarouselItemProps {
  id: string;
  children: React.ReactNode;
}

const NewCarouselItem: React.FC<NewCarouselItemProps> = ({ id, children }) => {
  return <li className="card" key={id}>{children}</li>;
};

interface NewCarouselProps {
  items: NewCarouselItemProps[];
}

const NewCarousel: React.FC<NewCarouselProps> = ({ items }) => {
  return (
    <section className='carousel' aria-label='Recent news'>
      <ul className='cards'>
        {items.map(({ id, children }) => (
          <NewCarouselItem id={id} key={id}>
            {children}
          </NewCarouselItem>
        ))}
      </ul>
      <NewCarouselControls />
      <NewCarouselNavigation items={items} />
    </section>
  );
};

export default NewCarousel;
