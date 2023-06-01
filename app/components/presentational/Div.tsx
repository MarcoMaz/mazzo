interface DivProps {
  dataCy: string;
  children: string;
}

const Div: React.FC<DivProps> = ({ dataCy, children }) => {
  return <div data-cy={dataCy}>{children}</div>;
};

export default Div;
