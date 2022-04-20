import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, Modal, ModalBody } from "reactstrap";
import firebase from "../services/firebase";

const ListProduct = ({data})=> {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const toggle = () => setModalOpen(!modalOpen);

  const ref = firebase.firestore().collection("product").doc("userID").collection("group1");
  const [dataUser, setDataUser] = useState([{}]);
  useEffect(() => {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
        //   console.log("items",doc.data())
      });
      setDataUser(items);
     
    });
  }, []);
  //   console.log("Output",ref)
  console.log("Output_dataUser", dataUser);
  return (
    <div className="container">
      {dataUser.map((item, index) => (
        <div style={{ borderRadius: "18px" }} className="row py-2" key={index}>
          <a
            href="#"
            className="list-group-item d-flex gap-3 py-3"
            aria-current="true"
            onClick={() => {
              setModalData(item);
              toggle();
            }}
          >
            <img
              src={item.image}
              alt="twbs"
              width="32"
              height="32"
              className="rounded-circle flex-shrink-0"
            />
            <div className="d-flex w-100 justify-content-between">
              <div>
                <p className="mb-0">{item.name}</p>
              </div>
              <small className="opacity-50 text-nowrap">{item.exp}</small>
            </div>
          </a>
        </div>
      ))}
      <div>
        <Modal size="sm" isOpen={modalOpen} toggle={() => toggle()}>
          <ModalBody>
            <div className="container">
              <h6 className="font-weight-bold">Name: {modalData.name}</h6>
              <h6 className="font-weight-bold">Exp: {modalData.exp}</h6>
              <h6 className="font-weight-bold">Category: {modalData.cat}</h6>
              <h6 className="font-weight-bold">รายละเอียด</h6>
              <p>{modalData.des}</p>
              <div className="row py-2">
                <NavLink to={`/edit/1`}>
                  <Button className="w-100" color="light text-dark">
                    Edit
                  </Button>
                </NavLink>
              </div>
              <div className="row py-2">
                <Button className="w-100" color="warning text-white">
                  Remove
                </Button>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
    return {
      data: state.dataProduct,
    };
  };
  
  
 
export default connect(mapStateToProps)(ListProduct);
