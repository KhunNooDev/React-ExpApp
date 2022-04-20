import React, { useState, useEffect } from "react";
import firebase from "../../services/firebase";
import { signInWithGoogle, auth } from "../../services/firebase";
import EditProduct from "../EditProduct";
import Home from "../Home";
import Scanner from "../Scanner";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import Profile from "../Profile";
import Auth from "./Auth"
const MailAuth = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userData) => {
      setUser(userData);
      console.log("userData", userData);
      if (userData) {
        props.dispatch({
          type: "SIGN_IN",
          payload: userData,
        });
      } else;
    });
  }, []);
  return (
    <div className="">
          <Routes>
            <Route exact path="/" element={props.data.status?(<Home />):(
           <div>
              {/* <button onClick={signInWithGoogle}>sign in</button> */}
            <Auth/>
           </div>
            )} />
            <Route exact path="/edit/:id" element={<EditProduct />} />
            <Route path="/scan" element={<Scanner />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
    </div>
  );
};
const mapStateToProps = (state) => {
    return {
      data: state.dataUser,
    };
  };
export default connect(mapStateToProps)(MailAuth);
