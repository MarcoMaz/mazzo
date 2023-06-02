interface AccordionHeaderProps {
  dataCy: string;
  headline: string;
  index: number;
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  dataCy,
  headline,
  index,
}) => {
  return (
    <h3 data-cy={dataCy}>
      <button
        type="button"
        aria-expanded="true"
        aria-controls={`sect${index}`}
        id={`accordion${index}id`}
      >
        <span>{headline}</span>
      </button>
    </h3>
  );
};

export default AccordionHeader;
