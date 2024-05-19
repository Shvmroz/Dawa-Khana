import { Button, TextField } from '@mui/material'
import React from 'react'
import contact from '../Images/5114855.jpg'

export const CustomerSupport = () => {
  return (
    <div className='support d-flex align-items-center'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center">
            <div className='right-support shadow-sm w-100'>
              <h2 className='text-center mb-4'>Contact us</h2>
              <div className='support-form'>
                <div className="your-name mb-3">
                  <TextField
                    required
                    fullWidth
                    label="Enter Your Name"
                    sx={{ backgroundColor: 'white', borderRadius: '10px' }}
                    InputProps={{
                      sx: {
                        borderRadius: '10px',
                      },
                    }}
                  />
                </div>
                <div className="your-number mb-3">
                  <TextField
                    required
                    fullWidth
                    label="Enter Your Number"
                    sx={{ backgroundColor: 'white', borderRadius: '10px' }}
                    InputProps={{
                      sx: {
                        borderRadius: '10px',
                      },
                    }}
                  />
                </div>
                <div className="email mb-3">
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    sx={{ backgroundColor: 'white', borderRadius: '10px' }}
                    InputProps={{
                      sx: {
                        borderRadius: '10px',
                      },
                    }}
                  />
                </div>
                <div className="Message mb-3">
                  <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    fullWidth
                    rows={4}
                    sx={{ backgroundColor: 'white', borderRadius: '10px' }}
                    InputProps={{
                      sx: {
                        borderRadius: '10px',
                      },
                    }}
                  />
                </div>
                <Button
                  className="green-btn"
                  variant="contained"
                  color="success"
                  fullWidth
                  sx={{ padding: "12px" }}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center">
            <img className='img-fluid' src={contact} alt="contact" />
          </div>
        </div>
      </div>
    </div>
  )
}
