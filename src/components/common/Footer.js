import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "../../styles/common/footer.scss";
import footerList from "../../locals/footer";

// console.log(footerList);
// console.log("Footer:" + footerList.message)
class Footer extends Component {
  listItem(text, link) {
    let elements = [];
    for (let index = 1; index < text.length; index++) {
      elements.push(
        <Card.Text>
          <a className="footer-text" href={`http://` + link[index - 1]}>
            {text[index]}
          </a>
        </Card.Text>
      );
    }
    return elements;
  }

  listTextItem(text) {
    let elements = [];
    for (let index = 1; index < text.length; index++) {
      elements.push(
        <Card.Text className="footer-text-nolink">{text[index]}</Card.Text>
      );
    }
    return elements;
  }

  renderTitle(title) {
    // console.log(title)
    if (title) {
      return <Card.Title className="footer-title">{title}</Card.Title>;
    } else {
      return <Card.Title className="footer-title-blank">{title}</Card.Title>;
    }
  }

  render() {
    return (
      <div className="footer-box">
        <div className="footer-content">
          <div className="footer-line1">
            <Card className="footer-card">
              {this.renderTitle(footerList.text1[0])}
              <Card.Text>{this.listTextItem(footerList.text1)}</Card.Text>
            </Card>
            <Card className="footer-card">
              {this.renderTitle(footerList.text2[0])}
              <Card.Text>
                {this.listItem(footerList.text2, footerList.link2)}
              </Card.Text>
            </Card>
          </div>
          <div className="footer-line2">
            <Card className="footer-card">
              {this.renderTitle(footerList.text3[0])}
              <Card.Text>
                {this.listItem(footerList.text3, footerList.link3)}
              </Card.Text>
            </Card>
            <Card className="footer-card">
              {this.renderTitle(footerList.text4[0])}
              <Card.Text>
                {this.listItem(footerList.text4, footerList.link4)}
              </Card.Text>
            </Card>
          </div>
        </div>
        <div className="footer-info">??Copyright 2019 All Rights Reserved</div>
        <div class="footer-info">?????????????????? / ?? 2000-2018 / &nbsp;
                <a href="http://www.miibeian.gov.cn/">???ICP???05004358???-12</a>&nbsp;/ ?????????0767???<br></br>
                    <a href="https://coder.twtstudio.com">????????????</a>&nbsp;
                    /&nbsp;<a href="https://coder.twtstudio.com/join">????????????</a>
                </div>
      </div>
    );
  }
}

export default Footer;
