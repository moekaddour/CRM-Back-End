import Contact from "../models/crmModel";


/////////////////////Add Contact EndPoint //////////////////
export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);
  newContact.save((err, contact) => {
    if (err) res.send(err);
    res.json(contact);
  });
};
//////////////////////Get All Contact EndPoint //////////////////////////////
export const getAllContacts = (req, res) => {
  Contact.find({}, (err, contacts) => {
    if (err) res.send(err);
    res.json(contacts);
  });
  // Contact.find()
  // .exec((err,contacts)=>{
  //     if(err){ res.send(err)}
  //     res.json(contacts)
  // })
};
//////////////////////// Get Contact By ID //////////////
export const getContactById = (req, res) => {
  Contact.findById({ _id: req.params.id }, (err, contact) => {
    if (err) res.send(err);
    res.json(contact);
  });
};
/////////////////////// Update Contact EndPoint //////////////////////

export const updateContact = (req, res) => {
  Contact.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, contact) => {
      if (err) res.send(err);
      res.json(contact);
    }
  );
};
///////////////////////// Delete Contact EndPoint //////////////////////

export const deleteContact = (req, res) => {
  Contact.remove({ _id: req.params.id }, err => {
    if (err) res.send(err);
    res.json({ message: "conatct successfully deleted" });
  });
};

