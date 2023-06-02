import data from "../../../public/assets/content/content.json";

const Accordion = () => {
  return (
    <div style={{ border: "1px solid" }} data-cy="selected-works-accordion">
      {data.selectedWorks.cards.map(
        (
          { headline, subheadline, description, chips, CTA: { url, label } },
          index
        ) => (
          <>
            <h3 data-cy={`selected-works-accordion-group-${headline}`}>
              <button
                type="button"
                aria-expanded="true"
                aria-controls={`sect${index}`}
                id={`accordion${index}id`}
              >
                <span>{headline}</span>
              </button>
            </h3>
            <div
              data-cy={`selected-works-accordion-panel-${headline}`}
              id={`sect${index}`}
              role="region"
              aria-labelledby={`accordion${index}id`}
            >
              <h4>{headline}</h4>
              <h5>{subheadline}</h5>
              <p>{description}</p>
              {chips.map((chip, idx) => (
                <div key={idx}>{chip}</div>
              ))}
              <a href={url}>{label}</a>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Accordion;
