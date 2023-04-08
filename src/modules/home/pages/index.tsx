import Enquire from "../../shared/components/enquire";
import Footer from "../../shared/components/footer";
import Header from "../../shared/components/header";
import Process from "../../shared/components/process";
import NextLink from "../../shared/components/reuseable/links/NextLink";
import Services from "../../shared/components/service";
import TechList from "../../shared/components/tech-list";
import GearBanner from "../components/gear-banner";
import { HomeBanner } from "../components/home-banner";

export function HomePage() {
  return (
    <>
    <header className="wrapper bg-soft-primary transparent ">
        
        <Header
          stickyBox={false}
          navOtherClass="navbar-other ms-lg-2"
          navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-dark"
          button={<NextLink href="#" title="Contact" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>
      <main className="content-wrapper">
      {/* <Header
        language
        button={
          <NextLink
            title="Contact"
            href="#"
            className="btn btn-sm btn-grape rounded-pill"
          />
        }
      /> */}
      {/* <GearBanner /> */}
      <HomeBanner />
      <section className="wrapper bg-light position-relative mt-n3">
        <div className="container pt-14 pb-12 pt-md-16 pb-md-14">
          <div className="row text-center">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h2 className="fs-16 text-uppercase text-muted mb-3">
                What We Do?
              </h2>
              <h3 className="display-4 mb-10 px-xl-10">
                Services We <span className="underline-3 style-2 yellow">Bestow</span> 
              </h3>
            </div>
          </div>
          <Services />
        </div>
      </section>


      <section className="wrapper bg-gray position-relative mt-n3">
        <div className="container pt-14 pb-12 pt-md-16 pb-md-14">
          <div className="row text-center">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h2 className="fs-16 text-uppercase text-muted mb-3">
              </h2>
              <div className="position-relative">
         
          <div
            className="shape bg-gear blue-gear rellax w-16 h-17 rotate-div"
            style={{ zIndex: 0, height:'25px', width:'25px', top: '-3.5rem',   left: '-6.2rem'}}
          />
              <h3 className="display-4 mb-10 px-xl-10">
                Technology <span className="underline-3 style-2 green">Bestow</span> 
              </h3>
              </div>
            </div>
          </div>
          <div className="position-relative">
          <div
            className="shape bg-gear green-gear rotate-div rellax w-16 h-16"
            style={{ zIndex: 0, right: '-6.2rem', bottom: '-4.5rem' }}
          />

          
          <TechList />
          </div>
        </div>
      </section>
      <section className="wrapper bg-light position-relative mt-n3">
        <div className="container pt-14 pb-12 pt-md-16 pb-md-5">
          <div className="row text-center">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h2 className="fs-16 text-uppercase text-muted mb-3">
                Who We Are
              </h2>
              <h3 className="display-4 mb-10 px-xl-10">
                Why <span className="underline-3 style-2 yellow">IZH-Tech</span> 
              </h3>
            </div>
          </div>
          <Process />
        </div>
      </section>
      <Enquire/>
      </main>
      <Footer />
    </>
  );
}
