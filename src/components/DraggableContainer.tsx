import { createRef, useEffect, useState } from "react";

type DraggableContainerProps = React.PropsWithChildren & {
  id?: string;
};

export const DraggableContainer = ({ id, children }: DraggableContainerProps) => {
  const draggableRef = createRef<HTMLDivElement>();
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

  useEffect(() => {
    const container = draggableRef.current;
    container?.addEventListener("mousedown", startDrag);
    container?.addEventListener("mousemove", drag);
    container?.addEventListener("mouseup", endDrag);
    container?.addEventListener("mouseleave", endDrag);
  }, [draggableRef.current]);

  const startDrag = (event: Event) => {
    const targetElement: Element = event.target as Element;
    console.log(targetElement);
    if (targetElement.classList.contains("draggable")) {
      setSelectedElement(targetElement);
    }
  };
  const drag = (event: Event) => {
    // console.log("drag");
  };
  const endDrag = (event: Event) => {
    console.log("end drag");
    setSelectedElement(null);
  };

  return (
    <div id={id} ref={draggableRef}>
      {children}
    </div>
  );
};
