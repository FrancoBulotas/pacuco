
import React from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import '../../../assets/styles/buyProduct/paymentOptions.scss';

const PaymentOptions = ({ selectedOption, handleOptionChange, choosenCbu, choosenAlias, choosenTitular, imgQrSrc, payMethodsDisplay, imgCuentaDniDisplay }) => (
    
  <div id="divMedioDePago">
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="payment"
        name="payment"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <FormControlLabel value="Mercado Pago" control={<Radio />} label="Mercado Pago" />
        <FormControlLabel value="Transferencia Bancaria" control={<Radio />} label="Transferencia Bancaria" />
        <FormControlLabel value="Cuenta DNI" control={<Radio />} label="Cuenta DNI" />
      </RadioGroup>
    </FormControl>
    <div className="payment-options">
      <div className={`pay-methods-display ${payMethodsDisplay === 'block' ? 'show' : ''}`}>
        <div><label id="labelCBU1">{choosenTitular} </label></div>
        <div><label id="labelCBU1">{choosenCbu} </label></div>
        <div><label id="labelAlias1">{choosenAlias} </label></div>
      </div>
      <div className={`div-img-qr ${imgCuentaDniDisplay === 'block' ? 'show' : ''}`}>
        <img src={imgQrSrc} alt="Codigo QR de Cuenta DNI para descuento." id="img-qr" />
      </div>
    </div>
  </div>
)

export default PaymentOptions;
