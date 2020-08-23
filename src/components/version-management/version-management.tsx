import React from 'react';
import TermsAndConditions from './terms-conditions/terms-conditions';
import PrivacyPolicy from './privacy-policy/privacy-policy';
import './version-management.scss';

function VersionManagement() {

  return (
    <div >
      <div className='note'>
        Please note that this tool will reset consent and will prompt existing customers to provide consent on next login
        </div>
      <TermsAndConditions/>
      <PrivacyPolicy />
    </div>
  );
}

export default VersionManagement;