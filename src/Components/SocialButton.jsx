import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const SocialButton = ({ icon, platform }) => {
  return (
    <Button variant="outline-primary" className="m-1">
      <i className={icon}></i> {platform}
    </Button>
  );
};

SocialButton.propTypes = {
  icon: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
};

export default SocialButton;
