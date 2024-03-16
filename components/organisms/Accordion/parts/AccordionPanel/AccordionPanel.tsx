import "./AccordionPanel.css";

import { Circle } from "react-feather";

interface AccordionPanelProps {
  buttonId: string;
  children: React.ReactNode;
}

const AccordionPanel: React.FC<AccordionPanelProps> = ({
  buttonId,
  children,
}) => {
  return (
    <div role="region" aria-labelledby={buttonId} className="accordion-panel">
      <div className="accordion-panel__content">{children}</div>
      <Circle />
    </div>
  );
};

export default AccordionPanel;
