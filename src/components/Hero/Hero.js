import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm a junior Frontend and Blockchain developer passionate about building
        intuitive web experiences. I focus on React, JavaScript, and smart
        contracts to create innovative projects that blend creativity and
        technical skill. Explore my portfolio to see my progress, and I'd be
        thrilled to start this journey with you.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "mailto:abdelrahmanaljabali1@gmail.com")
        }
      >
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
