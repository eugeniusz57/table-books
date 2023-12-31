import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  padding-top: 50px;
  padding-bottom: 50;

  @media (min-width: 768px) {
    padding-top: 72px;
  }
  @media (min-width: 1240px) {
    padding-top: 100px;
  }
`;

export const SectionTitle = styled.title`
  display: inline-block;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: white;
  font-size: 22px;
  line-height: 44px;
  margin-bottom: 100px;
`;
