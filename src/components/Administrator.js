import React from "react";
import { useState, useEffect } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
// import "./Administration.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { useHistory } from "react-router-dom";


const Administrator = () => {

  // const navigate = useNavigate();
  // const history = useHistory();

  const [userData, setUserData] = useState({});

  
  const callAdministrator = async () =>{
    try {
      const res = await fetch('/administrator', {
        method: "GET",
        headers:{
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      console.log(data)

      if(!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      // navigate('/project');
      // history.push('/project')
    }
  }

  useEffect(() => {
    callAdministrator();
  }, [])


  
  return (
    
    <div className="accor">
      <Accordion multiple>
        <AccordionTab
          header="Hospital Management"
          // {userData.title}
          headerClassName="color"
        >
          <div className="Content">
            <Row>
              <Col>
                <b>Project Title:</b>
                {/* Hospital Management */}
                { userData.title }
                <br></br>
                <br></br>
                <b>Project Goal and Objectives:</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Vitae semper quis lectus nulla at volutpat diam. 
                Ac turpis egestas maecenas pharetra convallis posuere morbi. 
                {/* {userData.objectives} */}
                <br></br>
                <br></br>
                <b>Project Scope:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis 
                  lectus nulla at volutpat diam. Ac turpis egestas maecenas pharetra convallis posuere morbi.
                {/* {userData.scope} */}
                <br></br>
                <br></br>
                <b>Project Plan:</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla 
                  at volutpat diam. Ac turpis egestas maecenas pharetra convallis posuere morbi. 
                {/* {userData.plan} */}
                <br></br>
                <br></br>
              </Col>
              <Col>
                <b>Project Deliverables:</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla 
                at volutpat diam. Ac turpis egestas maecenas pharetra convallis posuere morbi. 
                {/* {userData.deliverables} */}
                <br></br>
                <br></br>
                <b>Project Incentives:</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla 
                  at volutpat diam. Ac turpis egestas maecenas pharetra convallis posuere morbi. 
                {/* {userData.incentives} */}
                <br></br>
                <br></br>
                <b>Project Terms and Conditions:</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla 
                  at volutpat diam. Ac turpis egestas maecenas pharetra convallis posuere morbi. 
                {/* {userData.conditions} */}
              </Col>
            </Row>
          </div>
          <div className="Button">
            <Button
              label="Approve"
              icon="pi pi-check"
              iconPos="right"
              className="p-button-success p-button-raised p-button-rounded"
            />
          </div>
        </AccordionTab>
        {/*
          <AccordionTab header="App Devlopment" headerClassName="color">
            <div className="Content">Project : Project 2</div>
            <div className="Button">
              <Button
                label="Approve"
                icon="pi pi-check"
                iconPos="right"
                className="p-button-success p-button-raised p-button-rounded"
              />
            </div>
          </AccordionTab>
          <AccordionTab header="Al-ML" headerClassName="color">
            <div className="Content">Project : Project 3</div>
            <div className="Button">
              <Button
                label="Approve"
                icon="pi pi-check"
                iconPos="right"
                className="p-button-success p-button-raised p-button-rounded"
              />
            </div>
          </AccordionTab>
          <AccordionTab header="Data science" headerClassName="color">
            <div className="Content">Project : Project 4</div>
            <div className="Button">
              <Button
                label="Approve"
                icon="pi pi-check"
                iconPos="right"
                className="p-button-success p-button-raised p-button-rounded"
              />
            </div>
          </AccordionTab>
          */}
      </Accordion>
    </div>
  );
};



export default Administrator;


