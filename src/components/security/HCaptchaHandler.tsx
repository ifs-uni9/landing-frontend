import React from 'react'
import HCaptcha from '@hcaptcha/react-hcaptcha'

type Props = {
    onVerify?: (token: string) => void
}

function HCaptchaHandler(props: Props) {
  const {onVerify} = props;

  return (
    <HCaptcha
      sitekey="your-sitekey"
      onVerify={onVerify}
    />
  )
}

export default HCaptcha