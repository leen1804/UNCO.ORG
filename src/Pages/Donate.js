import React from 'react';
import PazDonateTODAY from '../components/PazDonateTODAY'
import PazMorepages from '../components/PazMorepages'
import PazFooter from '../components/PazFooter'
import PazBluesec from '../components/PazBluesec'
import PazHeader from '../components/PazHeader'
import Tech from '../components/Tech';
function Donate() {
  return (
    <>
     <PazHeader/>
      <PazDonateTODAY/>
      <PazMorepages/>
{/* <Tech/> */}
      <PazBluesec/>
      
    </>
  )
}

export default Donate
