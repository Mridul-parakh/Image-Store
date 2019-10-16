import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                 <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="mb-5">
              <h3 className="footer-heading mb-4">About Quillhash</h3>
              <p>We at QuillHash explore and build products in Blockchain, Machine Learning, AI and IoT. We help traditional businesses become more efficient, streamlined, creative and innovative by helping them realize the potential of the latest tech - Blockchain, Machine Learning, AI and IoT</p>
            </div>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="row mb-5">
              <div className="col-md-12">
                <h3 className="footer-heading mb-4">Navigations</h3>
              </div>
              <div className="col-md-6 col-lg-6">
                <ul className="list-unstyled">
                  <li><a href="/">Home</a></li>
                  <li><a href="/">Photography</a></li>
                  <li><a href="/">Gallery</a></li>
                  <li><a href="/">Services</a></li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-6">
                <ul className="list-unstyled">
                  <li><a href="/">About Me</a></li>
                  <li><a href="/">Privacy Policy</a></li>
                  <li><a href="/">Contact Me</a></li>
                  <li><a href="/">Terms</a></li>
                </ul>
              </div>
            </div>


          </div>

          <div className="col-lg-4 mb-5 mb-lg-0">
            <h3 className="footer-heading mb-4">Follow Me</h3>

                <div>
                  <a href="/" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
                  <a href="/" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                  <a href="/" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                  <a href="/" className="pl-3 pr-3"><span className="icon-linkedin"></span></a>
                </div>

            

          </div>
          
        </div>
       
      </div>
    </footer>
            </div>
        )
    }
}
