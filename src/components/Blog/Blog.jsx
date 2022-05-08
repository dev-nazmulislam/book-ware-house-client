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
            <li>Last Updated: 05-05-2022</li>
          </p>
          <hr />
          <h3>JavaScript :</h3>
          <p>
            Javascript is a Scripting language. It is mostly abbreviated as JS.
            It can be said that Javascript is the updated version of the ECMA
            script. Javascript is a high-level programming language that uses
            the concept of Oops but it is based on prototype inheritance.{" "}
          </p>
          <h3>NodeJS :</h3>
          <p>
            NodeJS is a cross-platform and opensource Javascript runtime
            environment that allows the javascript to be run on the server-side.
            Nodejs allows Javascript code to run outside the browser. Nodejs
            comes with a lot of modules and mostly used in web development.{" "}
          </p>
          <p>
            There are many Difference between Nodejs and JavaScript some of them
            is given bellow.
          </p>
          <table>
            <th>
              <td>#</td>
              <td>Javascript</td>
              <td>NodeJS</td>
            </th>
            <tr>
              <td>01</td>
              <td>Javascript can only be run in the browsers.</td>
              <td>
                We can run Javascript outside the browser with the help of
                NodeJS.
              </td>
            </tr>
            <tr>
              <td>02</td>
              <td>It is basically used on the client-side.</td>
              <td>It is mostly used on the server-side.</td>
            </tr>
            <tr>
              <td>03</td>
              <td>Javascript is used in frontend development.</td>
              <td>Nodejs is used in server-side development.</td>
            </tr>
          </table>
        </section>
        <section id="quizetwo" className="mb-5">
          <h1>Batter way to use nodejs and mongodb</h1>
          <p className="d-flex gap-2">
            <span>Author: Md. Nazmul Islam</span>
            <li>Last Updated: 17-04-2022</li>
          </p>
          <hr />
          <p>
            Using Node.js allows your front-end (i.e. React, Vue.js, even
            jQuery) developers to use the same programming language, JavaScript,
            as your backend developers. This allows for more cross-functional
            and agile development. Node.js usage is widespread and ongoing, and
            I highly recommend it for new development.
          </p>
          <h3>Select database</h3>
          <p>
            For most applications, some kind of persistent data storage is
            required. Traditionally, this would be handled by a relational
            database such as MySQL, Postgres, SQLite/SQLite3, MSSQL Server, and
            so on. Relational databases are the right choice for many
            applications depending on the use case, but there are a few issues
            you may want to consider.
          </p>
          <h3>Performance and Scaling</h3>
          <p>
            SQL databases were not originally designed to scale, but instead to
            have ACID properties. As such, while it is easy to scale a SQL
            database vertically (e.g., put it on a bigger server), scaling it
            horizontally (multiple servers) is quite difficult and complex even
            today.
          </p>
        </section>
        <section id="quizethree" className="mb-5">
          <h1>Differences between sql and nosql databases.</h1>
          <p className="d-flex gap-2">
            <span>Author: Md. Nazmul Islam</span>
            <li>Last Updated: 6-05-2022</li>
          </p>
          <hr />
          <h3>SQL:</h3>
          <p>
            SQL stands for Structured Query Language its lets you access and
            manipulate databases SQL became a standard of the American National
            Standards Institute (ANSI) in 1986, and of the International
            Organization for Standardization (ISO) in 1987
          </p>
          <h3>NoSql</h3>
          <p>
            NoSQL databases (aka "not only SQL") are non-tabular databases and
            store data differently than relational tables. NoSQL databases come
            in a variety of types based on their data model. The main types are
            document, key-value, wide-column, and graph. They provide flexible
            schemas and scale easily with large amounts of data and high user
            loads.
          </p>
          <h3>Difference between SQL and NoSQL in below</h3>
          <tr>
            <td>
              1. These databases have fixed or static or predefined schema.
            </td>
            <td>1. They have dynamic schema</td>
          </tr>
          <tr>
            <td>
              2.These databases are not suited for hierarchical data storage.
            </td>
            <td>
              2.These databases are best suited for hierarchical data storage.
            </td>
          </tr>
          <tr>
            <td>3.These databases are best suited for complex queries.</td>
            <td>3.These databases are not so good for complex queries</td>
          </tr>
          <tr>
            <td>4.Vertically Scalable</td>
            <td>4.Horizontally scalable</td>
          </tr>
          <tr>
            <td>5.Follows ACID property</td>
            <td>
              5.Follows CAP(consistency, availability, partition tolerance)
            </td>
          </tr>
          <tr></tr>
        </section>
        <section id="quizefour" className="mb-5">
          <h1>The purpose of jwt and how does it work</h1>
          <p className="d-flex gap-2">
            <span>Author: Md. Nazmul Islam</span>
            <li>Last Updated: 7-05-2022</li>
          </p>
          <hr />
          <p>
            JWTs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted.There are no
            mandatory claims for a JWT, but overlaying standards may make claims
            mandatory. For example, when using JWT as bearer access token under
            OAuth2.0, iss, sub, aud, and exp must be present. some are more
            common than others.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Blog;
