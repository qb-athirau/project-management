import React, { useEffect, useState, useRef } from 'react';
import Sidebar from '../../components/Sidebar';
import SliderArrow from '../../components/SliderArrow';
import { Aside, ArrowContainer, ContentSection, LandingSection } from './style';

const LandingPage = (props) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(true);
  const node = useRef();
  return (
    <LandingSection className="container">
      <Aside isOpen={open}>
        <div ref={node}>
          <ArrowContainer isOpen={open}>
            <SliderArrow open={open} setOpen={setOpen} />
          </ArrowContainer>

          <Sidebar active={active} setActive={setActive} open={open} setOpen={setOpen} />
        </div>
      </Aside>
      <section className="content-section-wrap">
        <ContentSection className="content" isOpen={open}>
          Hello
        </ContentSection>
      </section>
    </LandingSection>
  );
};

export default LandingPage;
