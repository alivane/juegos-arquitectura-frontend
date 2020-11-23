
import React from "react";
import { Card, CardImg, CardBody, Button } from "reactstrap";
class Prueba extends React.Component {
  constructor() {
    super();
    this.state = {
      loginState: true
    };
  }

  render() {
    let sessonState;
    let imgurl;
    if (this.state.loginState) {
      sessonState = "Logged In";
      imgurl = "https://picsum.photos/id/237/200/300";
    } else {
      imgurl = "https://picsum.photos/seed/picsum/200/300";
      sessonState = "Logged Out";
    }

    return (
      <div>
        <h1>Session {sessonState}!!</h1>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Card className="shadow">
                <CardImg top width="100%" src={imgurl} alt="Card image cap"   onClick={() => {
                      this.setState({
                        loginState: false
                      });
                    }}/>

                <CardBody>
                  <Button
                    className="shadow-sm btn "
                  
                  >
                    Button
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Prueba;