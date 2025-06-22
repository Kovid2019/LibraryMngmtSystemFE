import { CustomCarousel } from "@components/customCarousel/CustomCarousel";
import { BestReadSection } from "@components/pageSection/BestReadSection";
import { JustInSection } from "@components/pageSection/JustInSection";
import { RecommendationSection } from "@components/pageSection/RecommendationSection";

import { Col, Container, Row } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container className="mb-4">
      <Row>
        <Col>
          {/* Hero Section  */}
          <CustomCarousel></CustomCarousel>
          {/* Just In Section  */}
          <JustInSection />
          {/* Best Read Section  */}
          <BestReadSection />
          {/* Recommendation Section  */}
          <RecommendationSection />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
