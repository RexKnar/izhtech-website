import { FC } from 'react';
// import useLightBox from '../../hooks/useLightBox';
import VideoBanner from '../video-banner';
import ProcessCard from '../process-card';
import { processList } from '../../data/process-list';


const Process: FC = () => {
  // lighbox hook called
//   useLightBox();

  return (
    <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center mb-9 mb-md-10">
      <div className="col-md-8 col-lg-6 position-relative">
        <VideoBanner imageName="about8" />
      </div>

      <div className="col-lg-5 col-xl-4 offset-lg-1">
        <h2 className="fs-15 text-uppercase text-muted mb-3">How It Works?</h2>
        <h3 className="display-4 mb-7">Here are the 3 working steps on success.</h3>

        {processList.map(({ Icon, id, iconColor, ...item }) => (
          <ProcessCard key={id} {...item} Icon={<Icon className={`icon-svg-md text-${iconColor} me-5`} />} />
        ))}
      </div>
    </div>
  );
};

export default Process;
