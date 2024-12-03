import React from 'react';
import Host from '../components/Host';
import FadeInWords from '../components/FadeInWords';

export default function Offers() {
  //show comparison wordpress desktop and mobile with contentful desktop mobile (side by side)
  //why are we doing it 
  /**
   contentful reson is we want to rid ourselves of non entperise software and as we know wordpress a free product that 
   is used my bloggers, small ecom shops, other variety of websites. not suited for a corpration. 100-millsion worth of debt
   so we created a proof of concepts using industry standards for corprate enterprise level websites that offer functionality
   personalization, a/b testing, and developer friendly tools.
   */
  return (
    <div>
      <Host host="louisa"  />
      <FadeInWords text="Contentful" topic="topic" />
    </div>
  )
}
