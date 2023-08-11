import React, { lazy, Suspense } from 'react'

// Libraries
import { Col, Container, Row } from 'react-bootstrap'
import { Parallax } from "react-scroll-parallax";

// Data
import { FilterData, portfolioBoxedData } from '../../../Components/Portfolio/PortfolioData'

const PortfolioBoxed = lazy(() => import('../../../Components/Portfolio/PortfolioBoxed'));

const PortfolioBoxedTwoColPage = (props) => {
  return (
    <div style={props.style}>
      {/* Parallax Section Start */}
      <div className="py-[80px] h-auto overflow-hidden md:relative md:py-[40px]">
        <Parallax className="lg-no-parallax absolute top-[0] w-full h-full bg-no-repeat lg:bg-cover" translateY={[-40, 40]} style={{ backgroundImage: `url(/assets/img/webp/portfolio-bg.webp)` }}></Parallax>
        <Container className="h-full relative">
          <Row className="justify-center h-[300px] sm:h-[250px]">
            <Col xl={6} lg={6} sm={8} className="text-center flex justify-center flex-col font-serif">
              <h1 className="text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] mb-[15px] inline-block text-xmd leading-[20px]">Portfolio boxed two column</h1>
              <h2 className="text-darkgray font-medium -tracking-[1px] mb-0">Portfolio boxed</h2>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Parallax Section End */}

      {/* Section Start */}
      <section className="pb-[130px] lg:pb-[90px] md:pb-[75px] sm:pb-[50px] relative">
        <Container>
          <Row>
            <Col xs={12} className="xs:px-0">
              <Suspense fallback={<></>}>
                <PortfolioBoxed
                  grid="grid grid-2col xl-grid-2col lg-grid-2col md-grid-2col sm-grid-2col xs-grid-1col gutter-large"
                  filterData={FilterData}
                  data={portfolioBoxedData}
                />
              </Suspense>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}
    </div>
  )
}

export default PortfolioBoxedTwoColPage