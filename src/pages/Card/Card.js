import React from 'react';
import { Link } from 'react-router-dom';
import './card.css'

export const Card = () => {
  return (
    <section className='section'>
    <div className="card">
    <div className='single-card'>
      <div className="card__body">
        <img src="https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg" class="card__image" />
      </div>
      <Link to='/donate-form'><button className="card__btn">Donate</button></Link>
      </div>
      <div className='single-card'>
      <div className="card__body">
        <img src="https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg" class="card__image" />
      </div>
      <Link to='/products'><button className="card__btn">Receive</button></Link>
      </div>
    </div>
    </section>
  );

  }
