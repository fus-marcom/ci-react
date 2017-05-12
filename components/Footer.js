import React, { Component } from 'react';
class Footer extends Component {

  currentYear() {
    let dateToday = new Date();
    let currentYear = dateToday.getFullYear();
    return currentYear;
  }

  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row white-text">
            <div className="col s12 m3">
              <h5 className="light">Contact</h5>
              <address>
                <p typeof="schema:PostalAddress">
                  <span property="schema:streetAddress">1235 University Boulevard</span><br />
                  <span property="schema:addressLocality">Steubenville</span>, <abbr title="Ohio" property="schema:addressRegion">OH</abbr> <span property="schema:postalCode">43952</span> <abbr property="schema:addressCountry">USA</abbr><br />
                  <a href="tel:+17402836754" property="telephone" className="white-text">740.283.6754</a><br />
                  <a href="mailto:ci@franciscan.edu" property="email" className="white-text">ci@franciscan.edu</a>
                </p>
              </address>
            </div>
            <div className="col s12 m6">
              <h5 className="light">About the Catechetical Institute</h5>
              <p>
                The Catechetics Program at Franciscan University of Steubenville exists to prepare students to join the "army of catechists" called for by the late Pope Saint John Paul II, eager to help the Church in her mission of making all nations disciples of Jesus Christ. We combine a thorough study of Sacred Scripture, Sacred Tradition, and magisterial documents with training in proper and effective pedagogical techniques to help our students grasp the intelligibility and coherence of divine truths, and to pass them along effectively.
              </p>
            </div>
            <div className="col s12 m3">
              <h5 className="light">Related Links</h5>
              <ul>
                <li><a href="http://www.franciscanathome.com/" title="Franciscan at Home" target="_blank">Franciscan at Home</a></li>
                <li><a href="https://www.franciscan.edu/" title="Franciscan University of Steubenville" target="_blank">Franciscan University</a></li>
                <li><a href="https://www.steubenvilleconferences.com/" title="Steubenville Conferences" target="_blank">Steubenville Conferences</a></li>
                <li><a href="https://www.franciscan.edu/veritas" title="Veritas Center" target="_blank">Veritas Center for Ethics and Public Life</a></li>
                <li><a href="http://www.faithandreason.com/" title="Faith and Reason" target="_blank">Faith and Reason</a></li>
                <li><a href="https://review.catechetics.com/" title="The Catechetical Review" target="_blank">The Catechetical Review</a></li>
                <li style={{marginTop: '8px'}}><a href="https://giving.franciscan.edu/" title="Donate" target="_blank"><button className="btn waves-effect waves-light btn-inverted-white">Donate</button></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div className="row hide-on-large-only center">
              <a href="https://www.franciscan.edu/ferpa/" title="Privacy Policy" target="_blank">Privacy Policy</a>
              <a href="https://www.franciscan.edu/consumer-information/non-discrimination/" title="Nondiscrimination Statement" target="_blank">Nondiscrimination Statement</a>
            </div>
            © <span id="copyright-date">{this.currentYear()}</span> Franciscan University of Steubenville
          </div>
          <a className="hide-on-med-and-down" href="https://www.franciscan.edu/ferpa/" title="Privacy Policy" target="_blank">Privacy Policy</a>
          <a className="hide-on-med-and-down" href="https://www.franciscan.edu/consumer-information/non-discrimination/" title="Nondiscrimination Statement" target="_blank">Nondiscrimination Statement</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
