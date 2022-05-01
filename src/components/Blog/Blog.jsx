import React from "react";
import { Nav } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="row mx-0">
      <div className="col-12 col-md-3 asid-menu">
        <Nav.Link className="text-black" href="blog#quizeone">
          Difference between javascript and nodejs
        </Nav.Link>
        <hr />
        <Nav.Link className="text-black" href="blog#quizetwo">
          When should you use nodejs and when should you use mongodb?
        </Nav.Link>
        <hr />
        <Nav.Link className="text-black" href="blog#quizethree">
          Differences between sql and nosql databases.
        </Nav.Link>
        <hr />
        <Nav.Link className="text-black" href="blog#quizefour">
          What is the purpose of jwt and how does it work
        </Nav.Link>
        <hr />
      </div>
      <div className="col-12 col-md-9 px-5">
        <section id="quizeone" className="mb-5">
          <h1>Difference between javascript and nodejs</h1>
          <p className="d-flex gap-2">
            <span>Author: Md. Nazmul Islam</span>
            <li>Last Updated: 16-04-2022</li>
          </p>
          <hr />
          <p>
            Authentication and authorization are the two words used in the
            security reson. There are many difference about them. Authentication
            is used to authenticate someone's identity but authorization is use
            to provide permission to someone to access a particular resource. In
            this article, we will discuss what authentication and authorization
            and what is difference about them.
          </p>

          <h3>Authentication?</h3>
          <ul>
            <li>
              Authentication is the process of identifying someone's identity.
            </li>
            <li>It is used both server side.</li>
            <li>
              The authentication in server is mostly done by using the username
              and password.
            </li>
          </ul>
          <h3>Authorization?</h3>
          <ul>
            <li>
              Authorization is the process to check if the user has permission
              to use a resource or not.
            </li>
            <li>
              It defines that what data and information one user can access.
            </li>
            <li>
              Authorization is not always necessary to access information
              available over the internet. Some data available over the internet
              can be accessed without any authorization.
            </li>
          </ul>
        </section>
        <section id="quizetwo" className="mb-5">
          <h1>Batter way to use nodejs and mongodb</h1>
          <p className="d-flex gap-2">
            <span>Author: Md. Nazmul Islam</span>
            <li>Last Updated: 17-04-2022</li>
          </p>
          <hr />
          <p>
            Google Firebase is an application development platform that allows
            developers to create iOS, Android, and Web apps. Here's why you
            should use it!
          </p>

          <h3>4 Reasons to using firebase</h3>
          <ol>
            <li>Incredibly Built-In Analytics</li>
            <p>
              Key features: Unlimited Reporting, Audience Segmentation,
              Integration with Other Services
            </p>
            <li>App Development Made Easy</li>
            <p>
              Key features: Cloud Messaging, Authentication, Hosting, Remote
              Configuration, Test Lab, Crash Reporting, Realtime Database,
              Storage.
            </p>
            <li>Growth and User Engagement</li>
            <p>
              Key features: AdWords, App Indexing, Dynamic Links, Invites,
              Notifications.
            </p>
            <li>Increase Your Earnings</li>
            <p>
              Of course, the point of having an app or any other business
              strategy is to increase your earnings.
            </p>
          </ol>
          <h3>Different ways to Authenticate a Web Application:</h3>
          <p>
            Authentication is common way to handle security for all
            applications. In this article we will learn how to handle
            authentication and different wayes to apply Authentication.
          </p>
          <ul>
            <li>Cookie based authenticatio</li>
            <li>Token-Based authentication</li>
            <li>Third party access(OAuth, API-token)</li>
            <li>OpenId</li>
          </ul>
        </section>
        <section id="quizethree" className="mb-5">
          <h1>Differences between sql and nosql databases.</h1>
          <p className="d-flex gap-2">
            <span>Author: Md. Nazmul Islam</span>
            <li>Last Updated: 18-04-2022</li>
          </p>
          <hr />
          <p>
            Many third-party service providers can help you in growing your
            business Like Firebase. Use various Firebase services to set up,
            run, and extend the functionality of your Parojects.
          </p>

          <h3>
            There are many services which Firebase provides, Most useful of them
            are:
          </h3>
          <ol>
            <li>Realtime Database</li>
            <li>Remote Config</li>
            <li>Hosting</li>
            <li>Cloud Messaging</li>
            <li>Cloud Storage</li>
            <li>Cloud Functions</li>
            <li>Authentication</li>
            <li>Dynamic Links</li>
          </ol>
          <p>
            Firebase is a full package that can help in developing your mobile
            or web applications faster with fewer resources and more efficiency.
          </p>
        </section>
        <section id="quizefour" className="mb-5">
          <h1>The purpose of jwt and how does it work</h1>
          <p className="d-flex gap-2">
            <span>Author: Md. Nazmul Islam</span>
            <li>Last Updated: 18-04-2022</li>
          </p>
          <hr />
          <p>
            Many third-party service providers can help you in growing your
            business Like Firebase. Use various Firebase services to set up,
            run, and extend the functionality of your Parojects.
          </p>

          <h3>
            There are many services which Firebase provides, Most useful of them
            are:
          </h3>
          <ol>
            <li>Realtime Database</li>
            <li>Remote Config</li>
            <li>Hosting</li>
            <li>Cloud Messaging</li>
            <li>Cloud Storage</li>
            <li>Cloud Functions</li>
            <li>Authentication</li>
            <li>Dynamic Links</li>
          </ol>
          <p>
            Firebase is a full package that can help in developing your mobile
            or web applications faster with fewer resources and more efficiency.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Blog;
