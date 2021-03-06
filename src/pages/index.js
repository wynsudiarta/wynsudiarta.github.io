import React from "react"

import kurs from "../images/kurs.png"
import gowes from "../images/gowes.png"
import pangan from "../images/pangan.png"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Homepage" />
    <article>
        <section>
          <h2><a id="inlines" href="#inlines" aria-hidden="true"></a>About
          </h2>
          <p><img src="https://avatars0.githubusercontent.com/u/5110305?s=460&u=ea31f2a07d15833fc01f51cee9b7eff6b9f44463&v=4" alt="Surprised cat" width="150"/>
          Developer from Bali with 6 Years experience with PHP. Build some projects over the years using Symfony for
          <br/>Content Management System.
          </p>
          <p>
            Currently using Python to playing with Data Analysis and Machine Learning.
          </p>
        </section>
        <section>
          <h2><a id="wtf" href="#wtf" aria-hidden="true"></a>The Experience:
          </h2>
          <dl>
            <dt>TIX</dt>
            <dd>
                <p>Develop and maintain a custom CMS system built for the needs of TIX.<br/>
                Develop and maintain integrations between TIX CMS and third party systems.<br/>
                Develop the app using react native</p>

            </dd>
            <dt>Egomedia Bali</dt>
            <dd>Develop a custom wordpress themes and plugins for client site</dd>
            <dt>CV. Mertabali</dt>
            <dd>Working with WebErp to customize the system following the company requirement.</dd>
          </dl>
        </section>
        <section>
          <h2><a id="usage" href="#usage" aria-hidden="true"></a>The Stack
          </h2>
          <dl>
              <dt>PHP</dt>
              <dd>Using on Wordpress, Symfony and WebErp Projects</dd>
              <dt>Javascript</dt>
              <dd>Using on React and React Native</dd>
              <dt>Python</dt>
              <dd>Using on Fast API and Django Framework</dd>
          </dl>
        </section>
        <section>
          <h2><a id="why" href="#why" aria-hidden="true"></a>The Projects:
          </h2>
         <br/>
          <table>
            <tr>
              <td align={'center'}>
                <blockquote>
                  <img src={gowes} alt="" width={'200'} style={{ margin: 'inherit'}}/>
                  <br />
                  <cite>Tech Stack: React, Youtube API</cite>
                  <footer>
                    <cite><a href={'https://wysdi.github.io/gowes/'} target={'_blank'}>Gowes</a></cite>
                  </footer>
                </blockquote>
                <br/>
              </td>
              <td align={'center'}>
                <blockquote>
                  <img src={kurs} alt="" width={'200'} style={{ margin: 'inherit'}}/>
                  <br />
                  <cite>Tech Stack: React, FastApi, Python Scrapping
                  </cite>
                  <footer>
                    <cite><a href={'https://wysdi.github.io/kurs/'} target={'_blank'}>Kurs</a></cite>
                  </footer>
                </blockquote>
              </td>

            </tr>
            <tr>
              <td align={'center'}>
                <blockquote>
                  <br/>
                  <img src={pangan} alt="" width={'200'} style={{ margin: 'inherit'}}/>
                  <br />
                  <cite>Tech Stack: React, Python Scrapping, FastApi</cite>
                  <footer>
                    <cite><a href={'https://wysdi.github.io/info-pangan/'} target={'_blank'}>Info Pangan</a></cite>
                  </footer>
                </blockquote>
                <br/>
              </td>
              <td>

              </td>

            </tr>
          </table>

        </section>
        <br/>
      </article>
  </Layout>
)

export default IndexPage
