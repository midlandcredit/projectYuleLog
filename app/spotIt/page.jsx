import React from 'react';
import Host from '../components/Host';
import FadeInWords from '../components/FadeInWords';

export default function SpotIt() {
  //here is 5-10 lines of code, can you spot the problem?
  /*
  we currently have a problem!
  we noticed that the offers are broken, can you help us spot the bug?
  simple, medium, hard:
  simple: img src="this image".jpg
  medium: five lines of code, maybe a missing semicolon
  hard: 7-10 lines with multiple problems (then zoom out)
  */
  return (
    <div>
      <Host host={'louisa'} />
      <FadeInWords text={'Spot it!'} />
    </div>
  )
}
