import { FC } from 'react';
import {techLists } from '../../data/tech-list';
const TechList: FC = () => {
  return (
    <div className="row gx-lg-8 gx-xl-10 gy-10 gy-lg-0 mb-13 mb-md-17">
      <div className="col-lg-8 mx-auto">
        <div className="row row-cols-2 row-cols-md-5 gx-0 gx-md-8 gx-xl-12 gy-11 mt-n10">
          {techLists.map(({ id, image }) => (
            <div className="col" key={id}>
              <figure className="px-4 px-lg-3 px-xxl-5">
                <img src={image} alt="brand" />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechList;
