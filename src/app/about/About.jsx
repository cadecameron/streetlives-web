/* eslint-disable max-len */
import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="About-container">
      <div className="About-banner">
        <img className="About-logo" alt="streetlives logo" src="img/streetlives_logo.png" />
        <div className="About-headline">Streetlives is coming soon!</div>
        <div className="About-subheader">Streetlives is currently under development. For any questions or concerns, reach out to team@streetlives.nyc</div>
      </div>
      <div className="About">
        <h3 className="About-title">Your city, your map, your voice.</h3>

        <div className="About-section">
          <h4>WHAT</h4>
          <p>Streetlives is a community-built mobile website that will enable people who are homeless or in poverty to easily find, rate and recommend social services across New York City.</p>
        </div>

        <div className="About-section">
          <h4>HOW</h4>
          <p>Streetlives will be accessible through any device that has a web browser, for example, a phone, or a computer at a public library or service provider’s media room.</p>

          <p>Anyone will be able to use Streetlives to search for services and/or to review and comment on services.</p>

          <p>The accuracy of information provided on services will come from a combination of sources including verification on site by users of services reporting current information to Streetlives, and our Street Team visiting services to verify information in person.</p>
        </div>

        <div className="About-section">
          <h4>WHY</h4>
          <p>Last year in NYC approximately 2.5 million people relied on some form of social services to survive, with nearly 130,000 individuals experiencing homelessness, including over 45,000 children.</p>
          <p>
            Each night thousands of unsheltered homeless people sleep on New York City streets, in the subway system, and in other public spaces. There is no accurate measurement of New York City’s unsheltered homeless population and recent City surveys, putting the number at about 3,700, significantly underestimate the number of unsheltered homeless New Yorkers.<br />
            <a href="https://www.coalitionforthehomeless.org/basic-facts-about-homelessness-new-york-city/">(source: Coalition for the Homeless)</a>
          </p>
          <p>Streetlives is a platform for community empowerment and self-representation. By improving the understanding of and access to relevant services, Streetlives can provide non-personal data for all stakeholders to advocate for and collaboratively improve those services.</p>
          <p>In short, the community’s insight over time into what works and what doesn’t is shared with Service Providers without compromising user privacy.</p>
          <p>Our core mission is to build technology, with homeless and vulnerable communities, that drives equity and positive systems change. We do not assume that we have a right to make choices for the user without consensus and the site’s functionality will adapt to and be guided by the community’s need.</p>
        </div>

        <div className="About-section">
          <p>Feedback is gratefully welcomed.</p>
          <p>
            Thank you,<br />
            —The Streetlives team.
          </p>
        </div>

        <p>Fiscal Sponsors:</p>
        <div className="About-Outreach">
          <div className="social-proof">
            <a href="https://techimpact.org/"><img alt="tech impact logo" src="img/partners/techimpact.png" /></a>
          </div>
          <div className="social-proof">
            <a href="https://opencollective.com/streetlives"><img alt="open collective logo" src="img/partners/open_collective_mobile.jpg" /></a>
          </div>
        </div>
        <p>International Partner Organization:</p>
        <div className="About-Outreach">
          <div className="social-proof">
            <a href="https://www.infoxchange.org/au/"><img alt="infoxchange logo" src="img/partners/infoxchange_mobile.jpg" /></a>
          </div>
        </div>
        <p>Core Partners:</p>
        <div className="About-Outreach">
          <div className="social-proof">
            <a href="http://civichall.org/"><img alt="civic hall logo" src="img/partners/civic_hall_mobile.jpg" /></a>
          </div>
          <div className="social-proof">
            <a href="https://www.breadandlife.org/"><img alt="st john's logo" src="img/partners/st_john_mobile.jpg" /></a>
          </div>
          <div className="social-proof">
            <a href="https://holyapostlessoupkitchen.org/"><img alt="holy apostles logo" src="img/partners/holy_apostles_mobile.jpg" /></a>
          </div>
          <div className="social-proof">
            <a href="http://www.aliforneycenter.org/"><img alt="ali forney logo" src="img/partners/ali_forney_mobile.jpg" /></a>
          </div>
          <div className="social-proof">
            <a href="http://www.edalliance.org/"><img alt="educational alliance logo" src="img/partners/educational_alliance_mobile.jpg" /></a>
          </div>
        </div>
        <p>In Collaboration With:</p>
        <div className="About-Outreach">
          <div className="social-proof">
            <a href="https://aws.amazon.com/"><img alt="aws logo" src="img/partners/aws_mobile.jpg" /></a>
          </div>
          <div className="social-proof">
            <a href="https://cartodb.com/"><img alt="carto logo" src="img/partners/carto.png" /></a>
          </div>
          <div className="social-proof">
            <a href="https://www.careforthehomeless.org/"><img alt="care for the homeless logo" src="img/partners/care_for_the_homeless_mobile.jpg" /></a>
          </div>
          <div className="social-proof">
            <a href="http://neighborstogether.org/"><img alt="neighbors together logo" src="img/partners/neighbors_together_mobile.jpg" /></a>
          </div>
          <div className="social-proof">
            <a href="https://www.plannedparenthood.org/"><img alt="planned parenthood logo" src="img/partners/planned_parenthood.svg" /></a>
          </div>
          <div className="social-proof">
            <a href="http://www.law.nyu.edu/"><img alt="nyu law logo" src="img/partners/nyu_law_mobile.jpg" /></a>
          </div>
          <div className="social-proof">
            <a href="https://www.fathersheartnyc.org/"><img alt="father's heart logo" src="img/partners/fathers_heart.png" /></a>
          </div>
          <div className="social-proof">
            <a href="http://minnow.io/"><img alt="minnow software logo" src="img/partners/minnow_mobile.jpg" /></a>
          </div>
          <div className="social-proof">
            <a href="https://openreferral.org/"><img alt="open referral logo" src="img/partners/openreferral_mobile.jpg" /></a>
          </div>
          <div className="social-proof">
            <a href="http://www.argolabs.org/"><img alt="argo labs logo" src="img/partners/argo.png" /></a>
          </div>
          <div
            className="social-proof"
            style={{
              padding: '10px 0px',
              backgroundColor: '#e35205',
            }}
          >
            <a href="https://www.ncsinc.org/"><img style={{ width: '80%' }} alt="neighborhood coalition for shelter logo" src="img/partners/neighborhood_coalition_for_shelter.svg" /></a>
          </div>
          <div className="social-proof">
            <a href="http://feedbacklabs.org/"><img alt="feedback labs logo" src="img/partners/feedback_labs.png" /></a>
          </div>
          <div className="social-proof">
            <a href="https://foundertherapy.co/"><img alt="founder therapy logo" src="img/partners/founder_therapy.png" /></a>
          </div>
          <div className="social-proof">
            <a href="http://civicconsultingusa.org/"><img alt="civic consulting usa logo" src="img/partners/civic_hall_mobile.jpg" /></a>
          </div>
          <div className="social-proof">
            <a href="https://www1.nyc.gov/site/dhs/index.page"><img alt="nyc dhs logo" src="img/partners/nyc_mobile.jpg" /></a>
          </div>
          <div className="social-proof">
            <a href="https://www.sethgodin.com/"><img alt="seth godin logo" src="img/partners/seth_godin.png" /></a>
          </div>
          <div className="social-proof">
            <a href="https://streetsupport.net/"><img alt="street support logo" src="img/partners/street_support.png" /></a>
          </div>
          <div className="social-proof">
            <a href="https://www.backonmyfeet.org/"><img alt="back_on_my_feet" src="img/partners/back_on_my_feet.png" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
